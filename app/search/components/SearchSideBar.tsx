import { PRICE } from "@prisma/client";
import Link from "next/link";

export default function SearchSideBar({ locations, cuisines, searchParams }: {
    locations: { name: string; id: number; }[],
    cuisines: { name: string; id: number; }[],
    searchParams: {
        city?: string | undefined;
        cuisine?: string | undefined;
        price?: PRICE | undefined;
    } | undefined
}) {

    const prices = [{
        label: "$",
        price: PRICE.CHEAP
    }, {
        label: "$$",
        price: PRICE.REGULAR
    }, {
        label: "$$$",
        price: PRICE.EXPENSIVE
    }]

    return (
        <div className="w-1/5 m-4">
            <div className="border-b pb-4">
                <h1 className="mb-2">Region</h1>
                {locations.map((location) => (
                    <Link href={{
                        pathname: "/search",
                        query: { ...searchParams, city: location.name }
                    }}>
                        <p className="font-light text-reg capitalize cursor-pointer">{location.name}</p>
                    </Link>
                ))}
            </div>
            <div className="border-b pb-4 mt-3">
                <h1 className="mb-2">Cuisine</h1>
                {cuisines.map((cuisine) => (
                    <Link href={{
                        pathname: "/search",
                        query: { ...searchParams, cuisine: cuisine.name },

                    }}>
                        <p className="font-light text-reg capitalize cursor-pointer">{cuisine.name}</p>
                    </Link>
                ))}
            </div>
            <div className="mt-3 pb-4">
                <h1 className="mb-2">Price</h1>
                <div className="flex">
                    {prices.map(({ price, label }) => (
                        <Link className="border border-t border-b w-full text-center text-reg font-light p-2" href={{
                            pathname: "/search",
                            query: { ...searchParams, price },
                        }}>
                            {label}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}