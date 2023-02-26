import Navbar from "app/components/Navbar";
import ResDescription from "./components/ResDescription";
import ResHeader from "./components/ResHeader";
import ResImages from "./components/ResImages";
import ResNavbar from "./components/ResNavbar";
import ResRating from "./components/ResRating";
import ResReservationCard from "./components/ResReservationCard";
import ResReviews from "./components/ResReviews";
import ResTitle from "./components/ResTitle";

export default function RestaurantDetails() {
    return (
        <main className="bg-gray-100 min-h-screen w-screen text-black">
            <main className="max-w-screen-2xl m-auto bg-white">
                <Navbar />
                <ResHeader />
                <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
                    <div className="bg-white w-[70%] rounded p-3 shadow">
                        <ResNavbar />
                        <ResTitle />
                        <ResRating />
                        <ResDescription />
                        <ResImages />
                        <ResReviews />
                    </div>
                    <div className="w-[27%] relative text-reg">
                        <ResReservationCard />
                    </div>
                </div>
            </main>
        </main>

    )
}