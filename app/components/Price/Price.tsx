import { PRICE } from '@prisma/client'
import * as React from 'react'

interface IPriceProps {}

const Price = ({ price }: { price: PRICE }) => {
    const renderPrice = () => {
        if (price === PRICE.CHEAP) {
            return (
                <>
                    <span>$$</span>
                    <span className="text-gray-400">$$</span>
                </>
            )
        } else if (price === PRICE.REGULAR) {
            return (
                <>
                    <span>$$$</span>
                    <span className="text-gray-400">$</span>
                </>
            )
        } else {
            return (
                <>
                    <span className="text-gray-400">$$$$</span>
                </>
            )
        }
    }

    return <p className="flex mr-3">{renderPrice()}</p>
}

export default Price
