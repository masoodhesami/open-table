import Header from "./components/Header";
import Navbar from "./components/Navbar";
import RestuarantCard from "./components/RestaurantCard";

export default function Home() {

  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <Navbar />
        <main>
          <Header />
          <div className="py-3 px-36 mt-10 flex flex-wrap justify-start">
            <RestuarantCard />
          </div>
        </main>
      </main>
    </main>

  )
}
