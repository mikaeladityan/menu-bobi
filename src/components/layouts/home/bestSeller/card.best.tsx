import { useState, useRef, useEffect } from "react";
import { useAtom } from "jotai";
import Image from "next/image";
import { companyAtom } from "~/store/company.atom";
import { MenuDTO } from "~/types";

export function CardBestSeller({ menu }: { menu: MenuDTO }) {
    const [{ data: company }] = useAtom(companyAtom);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [zoomLevel, setZoomLevel] = useState(1);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const imageRef = useRef<HTMLImageElement>(null);

    // Fungsi untuk memotong deskripsi
    const truncateDescription = (text: string, maxWords: number) => {
        if (!text) return "";
        const words = text.trim().split(/\s+/);
        if (words.length <= maxWords) return text;
        return words.slice(0, maxWords).join(" ") + "...";
    };

    // Handler zoom gambar
    const handleZoom = (direction: "in" | "out" | "reset") => {
        if (direction === "in") {
            setZoomLevel((prev) => Math.min(prev + 0.5, 3));
        } else if (direction === "out") {
            setZoomLevel((prev) => Math.max(prev - 0.5, 1));
        } else {
            setZoomLevel(1);
            setPosition({ x: 0, y: 0 });
        }
    };

    // Handler mulai drag gambar
    const startDrag = (e: React.MouseEvent) => {
        if (zoomLevel <= 1) return;

        setIsDragging(true);
        setDragStart({
            x: e.clientX - position.x,
            y: e.clientY - position.y,
        });
    };

    // Handler saat drag gambar
    const onDrag = (e: React.MouseEvent) => {
        if (!isDragging || zoomLevel <= 1) return;

        const newX = e.clientX - dragStart.x;
        const newY = e.clientY - dragStart.y;

        if (imageRef.current) {
            const imgWidth = imageRef.current.clientWidth * zoomLevel;
            const imgHeight = imageRef.current.clientHeight * zoomLevel;
            const containerWidth = imageRef.current.parentElement?.clientWidth || 0;
            const containerHeight = imageRef.current.parentElement?.clientHeight || 0;

            // Batasi pergerakan agar tidak keluar dari container
            const maxX = Math.max(0, (imgWidth - containerWidth) / 2);
            const maxY = Math.max(0, (imgHeight - containerHeight) / 2);

            setPosition({
                x: Math.max(-maxX, Math.min(maxX, newX)),
                y: Math.max(-maxY, Math.min(maxY, newY)),
            });
        }
    };

    // Handler selesai drag
    const endDrag = () => {
        setIsDragging(false);
    };

    // Close modal ketika escape ditekan
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isModalOpen) {
                setIsModalOpen(false);
                setZoomLevel(1);
                setPosition({ x: 0, y: 0 });
            }
        };

        window.addEventListener("keydown", handleEscape);
        return () => window.removeEventListener("keydown", handleEscape);
    }, [isModalOpen]);

    return (
        <>
            <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="relative rounded-lg overflow-hidden border border-gray-200 bg-gray-50 shadow cursor-pointer text-start flex flex-col justify-start min-w-[200px] min-h-48 hover:shadow-md transition-shadow"
            >
                <div className="relative min-h-20">
                    <Image
                        src={menu.image || "/logo.webp"}
                        alt={`${menu.title} | ${company?.name}`}
                        width={200}
                        height={150}
                        className="w-full h-full object-cover"
                        priority
                        quality={100}
                    />
                    <div className="absolute bottom-3 right-3 z-10">
                        <p className="text-xs text-gray-50 font-semibold">AED {menu.price}</p>
                    </div>
                    <div className="absolute top-0 left-0 right-0 w-full h-full bg-gradient-to-b bg-gray-950/10 to-gray-950/50 z-[1]" />
                </div>
                <div className="p-3">
                    <h3 className="text-sm font-semibold text-wrap">{menu.title}</h3>
                    <p className="text-[11px] text-gray-500 leading-3.5 text-wrap">
                        {truncateDescription(menu.description, 10)}
                    </p>
                </div>
            </button>

            {/* Modal Detail */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black/10 backdrop-blur-sm bg-opacity-70 z-50 flex items-center justify-center p-4"
                    onClick={() => {
                        setIsModalOpen(false);
                        setZoomLevel(1);
                        setPosition({ x: 0, y: 0 });
                    }}
                >
                    <div
                        className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header Modal */}
                        <div className="flex justify-between items-center p-4 border-b border-gray-300">
                            <h2 className="text-xl font-bold">{menu.title}</h2>
                            <button
                                onClick={() => {
                                    setIsModalOpen(false);
                                    setZoomLevel(1);
                                    setPosition({ x: 0, y: 0 });
                                }}
                                className="text-gray-500 hover:text-gray-700 text-2xl"
                            >
                                &times;
                            </button>
                        </div>

                        {/* Konten Modal */}
                        <div className="overflow-auto flex-grow p-4 md:p-6">
                            {/* Area Gambar dengan Zoom */}
                            <div className="relative overflow-hidden mb-6 rounded-lg bg-gray-100 h-[300px] md:h-[400px]">
                                <div
                                    className="absolute inset-0 overflow-hidden cursor-move"
                                    onMouseDown={startDrag}
                                    onMouseMove={onDrag}
                                    onMouseUp={endDrag}
                                    onMouseLeave={endDrag}
                                >
                                    <Image
                                        ref={imageRef}
                                        src={menu.image || "/logo.webp"}
                                        alt={`${menu.title} | ${company?.name}`}
                                        layout="fill"
                                        objectFit="contain"
                                        className="transition-transform duration-300"
                                        style={{
                                            transform: `scale(${zoomLevel}) translate(${position.x}px, ${position.y}px)`,
                                            transformOrigin: "center center",
                                        }}
                                    />
                                </div>

                                {/* Kontrol Zoom */}
                                <div className="absolute bottom-4 right-4 bg-white/80 rounded-lg shadow-md flex items-center gap-2 p-2">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleZoom("out");
                                        }}
                                        className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-200"
                                        disabled={zoomLevel <= 1}
                                    >
                                        <span className="text-xl">-</span>
                                    </button>

                                    <span className="text-sm mx-1">{Math.round(zoomLevel * 100)}%</span>

                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleZoom("in");
                                        }}
                                        className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-200"
                                        disabled={zoomLevel >= 3}
                                    >
                                        <span className="text-xl">+</span>
                                    </button>

                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleZoom("reset");
                                        }}
                                        className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-200 text-sm"
                                    >
                                        ↺
                                    </button>
                                </div>
                            </div>

                            {/* Detail Menu */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-semibold text-lg mb-2">Description</h3>
                                    <p className="text-gray-700">{menu.description || "No description available."}</p>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <h3 className="font-semibold text-lg mb-2">Details</h3>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <p className="text-gray-500 text-sm">Price</p>
                                                <p className="font-medium">AED {menu.price}</p>
                                            </div>
                                            <div>
                                                <p className="text-gray-500 text-sm">Rating</p>
                                                <div className="flex items-center">
                                                    <span className="font-medium mr-1">{menu.rating}</span>
                                                    <span className="text-yellow-400">★</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <div>
                                        <h3 className="font-semibold text-lg mb-2">Additional Info</h3>
                                        <ul className="space-y-2 text-gray-700">
                                            <li className="flex items-start">
                                                <span className="mr-2">•</span>
                                                <span>Fresh ingredients daily</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="mr-2">•</span>
                                                <span>Vegetarian options available</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="mr-2">•</span>
                                                <span>Prepared with love</span>
                                            </li>
                                        </ul>
                                    </div> */}
                                </div>
                            </div>
                        </div>

                        {/* Footer Modal */}
                        <div className="p-4 border-t border-gray-300 flex justify-end gap-3">
                            <button
                                onClick={() => {
                                    setIsModalOpen(false);
                                    setZoomLevel(1);
                                    setPosition({ x: 0, y: 0 });
                                }}
                                className="px-4 py-2 border border-red bg-yellow rounded-lg hover:bg-gray-100 transition-colors"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
