import * as React from 'react'
import { Header } from '../components/Header'
import { Form } from '../components/Form'

export function Reserve() {
    return (
        <div className="border-t h-screen">
            <div className="py-9 w-3/5 m-auto">
                <Header />
                <Form />
            </div>
        </div>
    )
}

export default Reserve
