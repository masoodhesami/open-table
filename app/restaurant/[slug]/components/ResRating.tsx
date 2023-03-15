import { Review } from '@prisma/client'
import Stars from 'app/components/Stars';
import { calculateRatingAverage } from 'utils/calculateRatingAverage';

export default function ResRating({ reviews }: { reviews: Review[] }) {
    return (
        <div className="flex items-end">
            <div className="ratings mt-2 flex items-center">
                <Stars reviews={reviews} />
                <p className="text-reg ml-3">{calculateRatingAverage(reviews)}</p>
            </div>
            <div>
                <p className="text-reg ml-4">{reviews.length} Review{reviews.length > 1 ? "s" : ""}</p>
            </div>
        </div>)
}
