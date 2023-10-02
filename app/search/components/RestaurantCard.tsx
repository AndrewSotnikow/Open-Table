import { Cuisine, PRICE, Location, Review } from '@prisma/client'
import Link from 'next/link'
import Price from '../../components/Price/Price'
import Stars from '../../components/Stars/Stars'
import { calculateReviewRatingAverage } from '../../utils/calculateReviewRatingAverage'

interface Restaurant {
    id: number
    name: string
    main_image: string
    price: PRICE
    cuisine: Cuisine
    location: Location
    slug: string
    reviews: Review[]
}

const RestaurantCard = ({ restaurant }: { restaurant: Restaurant }) => {
    const { name, main_image, price, cuisine, location, slug, reviews } =
        restaurant

    const renderRatingText = () => {
        const rating = calculateReviewRatingAverage(reviews)

        if (rating > 4) return 'Awesome'
        else if (rating <= 4 && rating > 3) return 'Good'
        else if (rating <= 3 && rating > 2) return 'Average'
        else return ''
    }

    return (
        <div className="border-b flex pb-5">
            <img src={main_image} alt="" className="w-44 rounded h-36" />
            <div className="pl-5">
                <h2 className="text-3xl">{name}</h2>
                <div className="flex items-start">
                    <div className="flex mb-2">
                        <Stars reviews={reviews} />
                    </div>
                    <p className="ml-2 text-sm">{renderRatingText()}</p>
                </div>
                <div className="mb-9">
                    <div className="font-light flex text-reg">
                        <Price price={price} />
                        <p className="mr-4 capitalized">{cuisine.name}</p>
                        <p className="mr-4 capitalized">{location.name}</p>
                    </div>
                </div>
                <div className="text-red-600">
                    <Link href={slug}>View more information</Link>
                </div>
            </div>
        </div>
    )
}

export default RestaurantCard
