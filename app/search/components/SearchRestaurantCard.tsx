import { Cuisine, Location, PRICE, PrismaClient, Review } from "@prisma/client";
import Price from "app/components/Price";
import Stars from "app/components/Stars";
import Link from "next/link";
import { calculateRatingAverage } from "utils/calculateRatingAverage";

const prisma = new PrismaClient()
interface Props {
    id: number;
    price: PRICE;
    name: string;
    main_image: string;
    cuisine: Cuisine;
    location: Location;
    slug: string;
    reviews: Review[];
}

const renderRating = (rating: number) => {
    if (!rating) return "Not bad"
    else if (rating >= 4) return "Awesome"
    else if (rating > 1 && rating < 4) return "Fantastic"
    else return "Good"
}

export default function SearchRestaurantCard({ restaurant }: { restaurant: Props }) {

    return (
        <div className="border-b flex pb-5">
            <img
                src={restaurant.main_image}
                alt=""
                className="w-44 rounded h-40"
            />
            <div className="pl-5">
                <h2 className="text-3xl">{restaurant.name}</h2>
                <div className="flex items-start">
                    <Stars reviews={restaurant.reviews} />
                    <p className="ml-2 text-sm">{renderRating(Number(calculateRatingAverage(restaurant.reviews)))}</p>
                </div>
                <div className="mb-9">
                    <div className="font-light flex text-reg">
                        <Price price={restaurant.price} />
                        <p className="mr-4 capitalize">{restaurant.cuisine.name}</p>
                        <p className="mr-4 capitalize">{restaurant.location.name}</p>
                    </div>
                </div>
                <div className="text-red-600">
                    <Link href={`/restaurant/${restaurant.slug}`}>View more information</Link>
                </div>
            </div>
        </div>
    )
}