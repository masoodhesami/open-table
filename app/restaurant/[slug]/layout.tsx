import ResHeader from "./components/ResHeader";

export default function Restaurantlayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <ResHeader />
            <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11 text-black">
                {children}
            </div>
        </>
    )
}
