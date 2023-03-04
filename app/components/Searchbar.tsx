"use client"

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";

export default function Searchbar() {
    const router = useRouter();
    const searchParams = useSearchParams()!;

    const [location, setLocation] = useState("");

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams);
            params.set(name, value);
            return params.toString();
        },
        [searchParams],
    );

    return (
        <div className="text-left text-lg py-3 m-auto flex justify-center">
            <input
                className="rounded bg-white text-black mr-3 p-2 w-[450px]"
                type="text"
                placeholder="State, city or town"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />
            <button onClick={() => {
                if (location === "") return;
                router.push("/search" + '?' + createQueryString('city', location));
                setLocation("");
            }} className="rounded bg-red-600 px-9 py-2 text-white">
                Let's go
            </button>
        </div>
    )
}
