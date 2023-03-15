import { RestaurantCardType, ReviewsType } from "app/page";
import Link from "next/link";
import Price from "./Price";

interface Props {
    restaurant: RestaurantCardType
    reviews: ReviewsType[]
}

export default function RestuarantCard({ restaurant, reviews }: Props) {

    const thisRestaurantReviews = reviews.filter(review => review.restaurant_id === restaurant.id);

    return (
        <div
            className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer"
        >
            <Link href={`/restaurant/${restaurant.slug}`}>
                <img
                    src={restaurant.main_image}
                    alt="alt-img"
                    className="w-full h-36"
                />
                <div className="p-1 text-black">
                    <h3 className="font-bold text-2xl mb-2">{restaurant.name}</h3>
                    <div className="flex items-start">
                        <div className="flex mb-2">*****</div>
                        <p className="ml-2">{thisRestaurantReviews && thisRestaurantReviews.length} review{thisRestaurantReviews.length > 1 ? "s" : " "}</p>
                    </div>
                    <div className="flex text-reg font-light capitalize">
                        <p className=" mr-3">{restaurant.cuisine.name}</p>
                        <Price price={restaurant.price} />
                        <p>{restaurant.location.name}</p>
                    </div>
                    <p className="text-sm mt-1 font-bold">Booked 3 times today</p>
                </div>
            </Link>
        </div>
    )
}