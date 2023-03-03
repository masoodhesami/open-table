import { Item } from "@prisma/client";
import ResMenuCard from "./ResMenuCard";

export default function ResMenu({ menu }: { menu: Item[] }) {
    return (
        <main className="bg-white mt-5">
            <div>
                <div className="mt-4 pb-1 mb-1">
                    <h1 className="font-bold text-4xl">Menu</h1>
                </div>
                <div className="flex flex-wrap justify-between">
                    {menu.length === 0 ? <p> The menu is empty.. </p>
                        : menu.map(item => (
                            <ResMenuCard key={item.id} item={item} />
                        ))
                    }
                </div>
            </div>
        </main>)
}