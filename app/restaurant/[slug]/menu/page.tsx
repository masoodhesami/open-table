import { PrismaClient } from "@prisma/client";
import ResMenu from "../components/ResMenu";
import ResNavbar from "../components/ResNavbar";

const prisma = new PrismaClient();

const fetchRestaurantsMenu = async (slug: string) => {
    const restaurant = await prisma.restaurant.findUnique({
        where: {
            slug
        },
        select: {
            items: true
        }
    });
    if (!restaurant) throw new Error();
    return restaurant.items
}

export default async function RestaurantMenu({ params }: { params: { slug: string } }) {

    const menu = await fetchRestaurantsMenu(params.slug)
    
    return (
        <>
            <div className="bg-white w-[100%] rounded p-3 shadow">
                <ResNavbar slug={params.slug} />
                <ResMenu menu={menu} />
            </div>
        </>
    )
}