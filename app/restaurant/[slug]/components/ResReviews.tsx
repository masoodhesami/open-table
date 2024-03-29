import { Review } from "@prisma/client";
import ReviewCard from "./ReviewCard";

export default function ResReviews({ reviews }: { reviews: Review[] }) {
    return (
        <div>
            {reviews &&
                <h1 className="font-bold text-3xl mt-10 mb-7 borber-b pb-5">
                    What {reviews.length} people are saying
                </h1>}
            <div>
                {reviews.map((review) => (
                    <ReviewCard review={review} />
                ))}
            </div>
        </div>)
}
