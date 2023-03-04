import { PrismaClient } from "@prisma/client";
import SearchHeader from "./components/SearchHeader";
import SearchRestaurantCard from "./components/SearchRestaurantCard";
import SearchSideBar from "./components/SearchSideBar";

const prisma = new PrismaClient();

const fetchResturantsByLocation = async (name: string | undefined) => {
    const location = await prisma.location.findMany({
        where: {
            name
        }
    });

    if (location.length !== 0) {
        const restaurants = await prisma.restaurant.findMany({
            where: {
                location_id: location[0]?.id
            },
            select: {
                name: true,
                main_image: true,
                price: true,
                slug: true,
            }
        });
        return restaurants;
    }
}


export default async function Search({
    searchParams,
}: {
    searchParams?: { [key: string]: string | string[] | undefined };
}) {

    const searchLocation = searchParams?.city?.toString().toLowerCase();
    const restaurants = await fetchResturantsByLocation(searchLocation);
    return (
        <>
            <SearchHeader />
            <div className="flex py-4 m-auto w-2/3 justify-between items-start text-black">
                <SearchSideBar />
                <div className="w-5/6">
                    {!restaurants ? <h2 className="text-2xl">There is no restaurants in this city !</h2> : restaurants.map(restaurant => (
                        <SearchRestaurantCard restaurant={restaurant} />
                    ))}
                </div>
            </div>
        </>
    )
}
