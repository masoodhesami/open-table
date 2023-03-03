import Header from "./components/Header";
import RestuarantCard from "./components/RestaurantCard";
import { PrismaClient, Cuisine, PRICE, Location } from "@prisma/client";

const prisma = new PrismaClient();

export interface RestaurantCardType {
  id: number
  name: string
  main_image: string
  cuisine: Cuisine
  location: Location
  price: PRICE
  slug: string
}

const fetchRestaurants = async (): Promise<RestaurantCardType[]> => {
  const restaurants = prisma.restaurant.findMany({
    select: {
      id: true,
      name: true,
      main_image: true,
      cuisine: true,
      location: true,
      price: true,
      slug: true
    }
  });
  return restaurants;
}

export default async function Home() {
  const restaurants = await fetchRestaurants();
  return (
    <main>
      <Header />
      <div className="py-2 px-12 mt-10 flex flex-wrap justify-start">
        {restaurants.map((restaurant) => (
          <RestuarantCard restaurant={restaurant} />
        ))}
      </div>
    </main>
  )
}
