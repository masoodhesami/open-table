import { PRICE, PrismaClient } from "@prisma/client";
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
                cuisine: true,
                location: true,
                slug: true,
            }
        });
        return restaurants;
    }
}

const fetchAllLocations = async () => {
    const locations = await prisma.location.findMany({
        select: {
            id: true,
            name: true
        }
    });
    return locations;
}

const fetchAllCuisines = async () => {
    const cuisines = await prisma.cuisine.findMany({
        select: {
            id: true,
            name: true
        }
    });
    return cuisines;
}

export default async function Search({
    searchParams,
}: {
    searchParams?: { city?: string, cuisine?: string, price?: PRICE };
}) {

    const searchLocation = searchParams?.city?.toString().toLowerCase();
    const restaurants = await fetchResturantsByLocation(searchLocation);
    const locations = await fetchAllLocations();
    const cuisines = await fetchAllCuisines();

    return (
        <>
            <SearchHeader />
            <div className="flex py-4 m-auto w-2/3 justify-between items-start text-black">
                <SearchSideBar locations={locations} cuisines={cuisines} searchParams={searchParams} />
                <div className="w-5/6">
                    {!restaurants ? <h2 className="text-2xl">There is no restaurants in this city !</h2> : restaurants.map(restaurant => (
                        <SearchRestaurantCard restaurant={restaurant} />
                    ))}
                </div>
            </div>
        </>
    )
}
