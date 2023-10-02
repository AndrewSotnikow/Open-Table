import React, { ChangeEvent } from 'react'

interface Props {
    inputs: {
        firstName: string
        lastName: string
        email: string
        phone: string
        city: string
        password: string
    }
    handleChangeInput: (e: ChangeEvent<HTMLInputElement>) => void
    isSignin: boolean
}

export const AuthModalInputs = ({
    inputs,
    handleChangeInput,
    isSignin,
}: Props) => {
    return (
        <div>
            {isSignin ? null : (
                <div className="my-3 flex justify-between text-sm">
                    <input
                        value={inputs.firstName}
                        onChange={handleChangeInput}
                        name="firstName"
                        type="text"
                        className="border rounded p-2 py-3 w-[49%]"
                        placeholder="First name"
                    />
                    <input
                        value={inputs.lastName}
                        onChange={handleChangeInput}
                        name="lastName"
                        type="text"
                        className="border rounded p-2 py-3 w-[49%]"
                        placeholder="Last name"
                    />
                </div>
            )}
            <div className="my-3 flex justify-between text-sm">
                <input
                    value={inputs.email}
                    onChange={handleChangeInput}
                    name="email"
                    type="email"
                    className="border rounded p-2 py-3 w-full"
                    placeholder="Email"
                />
            </div>
            {isSignin ? null : (
                <div className="my-3 flex justify-between text-sm">
                    <input
                        value={inputs.phone}
                        onChange={handleChangeInput}
                        name="phone"
                        type="tel"
                        className="border rounded p-2 py-3 w-[49%]"
                        placeholder="Phone"
                    />
                    <input
                        value={inputs.city}
                        onChange={handleChangeInput}
                        name="city"
                        type="text"
                        className="border rounded p-2 py-3 w-[49%]"
                        placeholder="City"
                    />
                </div>
            )}
            <div className="my-3 flex justify-between text-sm">
                <input
                    value={inputs.password}
                    onChange={handleChangeInput}
                    name="password"
                    type="password"
                    className="border rounded p-2 py-3 w-full"
                    placeholder="Password"
                />
            </div>
        </div>
    )
}
