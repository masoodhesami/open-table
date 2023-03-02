import ReserveForm from "./components/ReserveForm";
import ReserveHeader from "./components/ReserveHeader";

export default function Reserve() {
    return (
        <div className="border-t h-screen text-black">
            <div className="py-9 w-3/5 m-auto">
                <ReserveHeader />
                <ReserveForm />
            </div>
        </div>
    )
}