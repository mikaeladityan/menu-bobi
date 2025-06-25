import { useState, useRef, useEffect } from "react";
import { IconStarFilled, IconX, IconZoomIn, IconZoomOut, IconArrowsMaximize } from "@tabler/icons-react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

import { COLUMN_TYPE } from "~/store/fillter.atom";
import { MenuDTO } from "~/types";

export function CardMenu({ menu, company, column }: { menu: MenuDTO; company: string; column: COLUMN_TYPE }) {
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

    // Handler drag gambar
    const startDrag = (e: React.MouseEvent) => {
        if (zoomLevel <= 1) return;
        setIsDragging(true);
        setDragStart({
            x: e.clientX - position.x,
            y: e.clientY - position.y,
        });
    };

    const onDrag = (e: React.MouseEvent) => {
        if (!isDragging || zoomLevel <= 1) return;

        const newX = e.clientX - dragStart.x;
        const newY = e.clientY - dragStart.y;

        if (imageRef.current) {
            const imgWidth = imageRef.current.clientWidth * zoomLevel;
            const imgHeight = imageRef.current.clientHeight * zoomLevel;
            const containerWidth = imageRef.current.parentElement?.clientWidth || 0;
            const containerHeight = imageRef.current.parentElement?.clientHeight || 0;

            const maxX = Math.max(0, (imgWidth - containerWidth) / 2);
            const maxY = Math.max(0, (imgHeight - containerHeight) / 2);

            setPosition({
                x: Math.max(-maxX, Math.min(maxX, newX)),
                y: Math.max(-maxY, Math.min(maxY, newY)),
            });
        }
    };

    const endDrag = () => {
        setIsDragging(false);
    };

    // Close modal ketika escape ditekan
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape" && isModalOpen) {
                closeModal();
            }
        };

        window.addEventListener("keydown", handleEscape);
        return () => window.removeEventListener("keydown", handleEscape);
    }, [isModalOpen]);

    const closeModal = () => {
        setIsModalOpen(false);
        setZoomLevel(1);
        setPosition({ x: 0, y: 0 });
    };

    return (
        <>
            {/* Card Menu */}
            <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className={twMerge(
                    "relative rounded-lg overflow-hidden border border-gray-200 bg-gray-50 w-full cursor-pointer text-start flex flex-col justify-start min-w-[175px] hover:shadow-md transition-shadow",
                    column === "list" && "md:flex-row justify-between items-end"
                )}
            >
                {menu.image && (
                    <div className="relative p-2 lg:p-4">
                        <Image
                            src={!menu.image ? "/logo.webp" : menu.image}
                            alt={`${menu.title} | ${company}`}
                            width={2000}
                            height={2000}
                            className={twMerge(
                                "w-full h-40 md:h-60 object-center object-cover rounded",
                                column === "list" && "h-full md:w-52 md:h-30 lg:h-30"
                            )}
                            priority
                            quality={100}
                        />
                    </div>
                )}
                <div
                    className={twMerge(
                        "pb-2 px-3 flex flex-col justify-between gap-y-2 w-full md:px-3 md:py-5 lg:p-5",
                        !menu.image && "pt-2"
                    )}
                >
                    <h3 className="text-sm flex items-start justify-start gap-1 text-balance">
                        {menu.status === "FAVOURITE" && (
                            <div className="bg-red mt-0.5 flex items-center justify-center w-9 h-4 pt-[1px] ps-[1px] rounded-xs text-gray-50">
                                <span className="text-[10px] uppercase font-medium">best</span>
                            </div>
                        )}
                        {menu.title}
                    </h3>
                    <div className="flex items-center justify-between gap-3 w-full">
                        <span className="flex items-center justify-start gap-1 text-[11px] px-3 py-0.5 bg-yellow/20 w-fit border rounded-sm border-yellow">
                            <IconStarFilled className="text-yellow" size={12} /> {menu.rating || "5.0"}
                        </span>
                        <span className="text-red text-sm font-medium text-end">AED {menu.price}</span>
                    </div>
                    <p className="text-[11px] text-gray-500 leading-3">{truncateDescription(menu.description, 10)}</p>
                </div>
            </button>

            {/* Modal Detail */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black/10 backdrop-blur-sm bg-opacity-70 z-50 flex items-center justify-center p-4"
                    onClick={closeModal}
                >
                    <div
                        className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header Modal */}
                        <div className="flex justify-between items-center p-4 border-b border-gray-300">
                            <div className="flex items-center gap-2">
                                {menu.status === "FAVOURITE" && (
                                    <div className="bg-red flex items-center justify-center w-10 h-5 rounded-xs text-gray-50">
                                        <span className="text-xs uppercase font-medium">best</span>
                                    </div>
                                )}
                                <h2 className="text-xl font-bold">{menu.title}</h2>
                            </div>
                            <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
                                <IconX size={24} />
                            </button>
                        </div>

                        {/* Konten Modal */}
                        <div className="overflow-auto flex-grow p-4 md:p-6">
                            {/* Area Gambar dengan Zoom */}
                            <div className="relative overflow-hidden mb-6 rounded-lg bg-gray-100 h-[250px] md:h-[350px]">
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
                                        alt={`${menu.title} | ${company}`}
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
                                        <IconZoomOut size={18} />
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
                                        <IconZoomIn size={18} />
                                    </button>

                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleZoom("reset");
                                        }}
                                        className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-200"
                                    >
                                        <IconArrowsMaximize size={18} />
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
                                                    <IconStarFilled className="text-yellow-400 mr-1" size={16} />
                                                    <span className="font-medium">{menu.rating || "5.0"}</span>
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
                                                <span>Halal certified</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="mr-2">•</span>
                                                <span>Customizable options available</span>
                                            </li>
                                        </ul>
                                    </div> */}
                                </div>
                            </div>
                        </div>

                        {/* Footer Modal */}
                        <div className="p-4 border-t border-gray-300 flex justify-end gap-3">
                            <button
                                onClick={closeModal}
                                className="px-4 py-2 border bg-yellow text-red border-gray-300 rounded-lg hover:bg-gray-100 transition-colors"
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
