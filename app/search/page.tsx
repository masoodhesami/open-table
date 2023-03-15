import { PRICE, PrismaClient } from "@prisma/client";
import SearchHeader from "./components/SearchHeader";
import SearchRestaurantCard from "./components/SearchRestaurantCard";
import SearchSideBar from "./components/SearchSideBar";

interface SearchParams {
    city?: string | undefined;
    cuisine?: string | undefined;
    price?: PRICE | undefined;
}

const prisma = new PrismaClient();

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

const fetchRestaurantsDependOnSearchParams = async (searchParams: SearchParams | undefined) => {
    const restaurants = await prisma.restaurant.findMany({
        where: {
            location: {
                name: {
                    equals: searchParams?.city?.toLowerCase()
                }
            },
            cuisine: {
                name: {
                    equals: searchParams?.cuisine?.toLowerCase()
                }
            },
            price: {
                equals: searchParams?.price
            }
        },
        select: {
            id: true,
            name: true,
            main_image: true,
            price: true,
            cuisine: true,
            location: true,
            slug: true,
            reviews: true
        }
    });
    return restaurants;
}

export default async function Search({
    searchParams,
}: {
    searchParams?: SearchParams;
}) {

    const locations = await fetchAllLocations();
    const cuisines = await fetchAllCuisines();
    const restaurants = await fetchRestaurantsDependOnSearchParams(searchParams);

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
