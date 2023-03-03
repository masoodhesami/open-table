import { PrismaClient } from "@prisma/client";
import ResDescription from "./components/ResDescription";
import ResImages from "./components/ResImages";
import ResNavbar from "./components/ResNavbar";
import ResRating from "./components/ResRating";
import ResReservationCard from "./components/ResReservationCard";
import ResReviews from "./components/ResReviews";
import ResTitle from "./components/ResTitle";

const prisma = new PrismaClient()

interface Restaurant {
    id: number;
    name: string;
    images: string[];
    description: string;
    slug: string;
}

const fetchRestaurantBySlug = async (slug: string): Promise<Restaurant> => {
    const restaurant = await prisma.restaurant.findUnique({
        where: {
            slug
        },
        select: {
            id: true,
            name: true,
            images: true,
            description: true,
            slug: true
        }
    })
    if (!restaurant) {
        throw new Error()
    }
    return restaurant;
}

export default async function RestaurantDetails({ params }: { params: { slug: string } }) {

    const restaurant = await fetchRestaurantBySlug(params.slug)
    return (
        <>
            <div className="bg-white w-[70%] rounded p-3 shadow">
                <ResNavbar slug={restaurant.slug} />
                <ResTitle name={restaurant.name} />
                <ResRating />
                <ResDescription description ={restaurant.description} />
                <ResImages images={restaurant.images}/>
                <ResReviews />
            </div>
            <div className="w-[27%] relative text-reg">
                <ResReservationCard />
            </div>
        </>
    )
}