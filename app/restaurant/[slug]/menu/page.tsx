import ResHeader from "../components/ResHeader";
import ResMenu from "../components/ResMenu";
import ResNavbar from "../components/ResNavbar";

export default function RestaurantMenu() {
    return (
        <>
            <div className="bg-white w-[100%] rounded p-3 shadow">
                <ResNavbar />
                <ResMenu />
            </div>
        </>
    )
}