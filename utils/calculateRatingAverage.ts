import { Review } from "@prisma/client";

export const calculateRatingAverage = (reviews: Review[]) => {
    return Number(((reviews.reduce((sum, review) => sum + review.rating, 0)) / reviews.length).toFixed(1));
}