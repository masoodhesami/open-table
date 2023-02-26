import Navbar from "app/components/Navbar";
import ResHeader from "../components/ResHeader";
import ResMenu from "../components/ResMenu";
import ResNavbar from "../components/ResNavbar";

export default function RestaurantMenu() {
    return (
        <main className="bg-gray-100 min-h-screen w-screen">
            <main className="max-w-screen-2xl m-auto bg-white">
                <Navbar />
                <ResHeader />
                <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11 text-black">
                    <div className="bg-white w-[100%] rounded p-3 shadow">
                        <ResNavbar />
                        <ResMenu />
                    </div>
                </div>
            </main>
        </main>
    )
}