export function CardSkeleton() {
    return (
        <>
            <div className="relative rounded-lg overflow-hidden bg-gray-300 shadow cursor-pointer text-start flex flex-col justify-start min-w-[175px] h-auto gap-y-2 p-2">
                <div className="w-full h-24 rounded bg-gray-200 animate-pulse"></div>
                <div className="w-full h-5 rounded bg-gray-200 animate-pulse"></div>
                <div className="flex flex-col gap-y-1">
                    <div className="w-full h-3 rounded bg-gray-200 animate-pulse"></div>
                    <div className="w-full h-3 rounded bg-gray-200 animate-pulse"></div>
                    <div className="w-full h-3 rounded bg-gray-200 animate-pulse"></div>{" "}
                </div>
            </div>
        </>
    );
}
