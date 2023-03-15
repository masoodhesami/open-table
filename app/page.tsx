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

export interface ReviewsType {
  text: string;
  id: number;
  restaurant_id: number;
}[]

const fetchRestaurants = async (): Promise<RestaurantCardType[]> => {
  const restaurants = prisma.restaurant.findMany({
    select: {
      id: true,
      name: true,
      main_image: true,
      cuisine: true,
      location: true,
      price: true,
      slug: true,
    }
  });
  return restaurants;
}

const fetchReviews = async (): Promise<ReviewsType[]> => {
  const reviews = await prisma.review.findMany({
    select: {
      id: true,
      text: true,
      restaurant_id: true
    }
  });

  return reviews;
}

export default async function Home() {
  const restaurants = await fetchRestaurants();
  const reviews = await fetchReviews();

  return (
    <main>
      <Header />
      <div className="py-2 px-12 mt-10 flex flex-wrap justify-start">
        {restaurants.map((restaurant) => (
          <RestuarantCard restaurant={restaurant} reviews={reviews} />
        ))}
      </div>
    </main>
  )
}
