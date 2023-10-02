import Link from 'next/link'
import * as React from 'react'
import AuthModal from '../AuthModal/AuthModal'

const NavBar = (): JSX.Element => {
    return (
        <nav className="bg-white p-2 flex justify-between">
            <Link href="" className="font-bold text-gray-700 text-2xl">
                OpenTable
            </Link>
            <div>
                <div className="flex">
                    <AuthModal isSignin={true} />
                    <button className="border p-1 px-4 rounded">Sign up</button>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
