"use client";
import { IconAlertSquareRounded, IconAlertTriangle, IconSquareRoundedCheck } from "@tabler/icons-react";
import { useAtom } from "jotai";
import { twMerge } from "tailwind-merge";
import { alertAtom } from "~/store/alert.atom";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

export function Alert() {
    const [alert, setAlert] = useAtom(alertAtom);

    // Auto-clear alert after 5 seconds
    useEffect(() => {
        if (alert) {
            const timer = setTimeout(() => {
                setAlert(null);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [alert, setAlert]);

    // Animation variants
    const slideVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 50 },
    };

    return (
        <AnimatePresence>
            {alert && (
                <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={slideVariants}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className={twMerge(
                        "fixed top-3 right-3 max-w-md mx-auto z-50 px-3 py-4 rounded-lg overflow-hidden",
                        alert.type === "error"
                            ? "bg-red-700 text-gray-50"
                            : alert.type === "warning"
                            ? "bg-yellow text-gray-900"
                            : "bg-cyan-700 text-gray-50"
                    )}
                >
                    <div className="flex items-center justify-between gap-2 text-sm">
                        {alert.type === "error" ? (
                            <IconAlertSquareRounded stroke={2} size={25} className="text-red-100" />
                        ) : alert.type === "warning" ? (
                            <IconAlertTriangle stroke={2} size={25} className="text-yellow-100" />
                        ) : (
                            <IconSquareRoundedCheck stroke={2} size={25} className="text-cyan-100" />
                        )}

                        <div className="flex gap-2 items-center justify-end ml-2">
                            <p className="font-semibold capitalize">{alert.title}</p>
                            <p className="font-medium text-xs">{alert.message}</p>
                        </div>
                    </div>

                    {/* Progress bar */}
                    <motion.div
                        className="absolute bottom-0 left-0 h-1 bg-white/50"
                        initial={{ width: "100%" }}
                        animate={{ width: 0 }}
                        transition={{ duration: 5, ease: "linear" }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
