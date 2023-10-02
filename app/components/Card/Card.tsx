import Link from 'next/link'
import * as React from 'react'
import { RestaurantCardType } from '../../page'
import Price from '../Price/Price'
import Stars from '../Stars/Stars'

interface IRestaurantCard {
    restaurant: RestaurantCardType
}

const RestaurantCard = ({ restaurant }: IRestaurantCard): JSX.Element => {
    const { name, cuisine, location, main_image, slug, price, reviews } =
        restaurant
    return (
        <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer">
            <Link href={`/restaurant/${slug}`}>
                <img src={main_image} alt="" className="w-full h-36" />
                <div className="text-black p-1">
                    <h3 className="font-bold text-xl mb-2">{name}</h3>
                    <div className="flex items-start">
                        <Stars reviews={reviews} />
                        <p className="ml-2">
                            {reviews.length} review
                            {reviews.length === 1 ? '' : 's'}
                        </p>
                    </div>
                    <p className=" mr-3">{cuisine.name}</p>
                    <div className="flex text-reg font-light capitalize">
                        <Price price={price} />
                        <p>{location.name}</p>
                    </div>
                    <p className="text-sm mt-1 font-bold">
                        Booked 3 times today
                    </p>
                </div>
            </Link>
        </div>
    )
}

export default RestaurantCard
