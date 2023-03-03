import { PRICE } from "@prisma/client";

export default function Price({ price }: { price: PRICE }) {

    const renderPrice = () => {
        switch (price) {
            case PRICE.CHEAP:
                return (
                    <>
                        <span className="text-black">$$</span> <span className="text-gray-400">$$</span>
                    </>
                );
            case PRICE.REGULAR:
                return (
                    <>
                        <span className="text-black">$$$</span> <span className="text-gray-400">$</span>
                    </>
                );
            case PRICE.EXPENSIVE:
                return (
                    <>
                        <span className="text-black">$$$$</span>
                    </>
                );
        }
    }
    return (
        <p className="mr-3 flex">{renderPrice()}</p>
    )
}
