'use client'

import * as React from 'react'
import Box from '@mui/material/Box'
import {Input} from '@mui/material'
import Modal from '@mui/material/Modal'
import { ChangeEvent, useEffect, useState, useContext } from 'react'
import { AuthModalInputs } from '../AuthModalInputs/AuthModalInputs'
import { useAuth } from '../../../hooks/useAuth'
import { AuthenticationContext } from '../../context/AuthContext'
import { Alert, CircularProgress } from '@mui/material'

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
}

export default function AuthModal({ isSignin }: { isSignin: boolean }) {
    const {loading, data, error} = useContext(AuthenticationContext)
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const {signIn, signOut} = useAuth()

    const handleClick = () => {

        if(isSignin){
            signIn({email: inputs.email, password: inputs.password})
        }
    }
    const renderContent = (signinContent: string, signupContent: string) => {
        return isSignin ? signinContent : signupContent
    }

    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
    }

    const [inputs, setInputs] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        city: '',
        password: '',
    })

    const [isDisabled, setIsDisabled] = useState(true)

    useEffect(() => {
        if (isSignin) {
            if (inputs.password && inputs.email) {
                return setIsDisabled(false)
            } else {
                if (
                    inputs.firstName &&
                    inputs.lastName &&
                    inputs.email &&
                    inputs.password &&
                    inputs.city &&
                    inputs.phone
                ) {
                    return setIsDisabled(false)
                }
            }

            setIsDisabled(true)
        }
    }, [inputs])

    return (
        <div>
            <button
                onClick={handleOpen}
                className={`${renderContent(
                    'bg-blue-400 text-white',
                    ''
                )} border p-1 px-4 rounded mr-3`}>
                {isSignin ? 'Sign in' : 'Sign out'}
                {renderContent('Sign in', 'Sign out')}
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={style}>
                    {loading ? <div className="py-24 px-2 h-[600px] flex justify-items-center">
                        <CircularProgress/>

                    </div> : (<>
                        <div className="p-2 h-[600px]">
                            <div className="uppercase font-bold text-center pb-2 border-b mb-2">
                                <p className="text-sm">
                                    {renderContent('Sign In', 'Create Account')}
                                </p>
                            </div>
                        </div>
                        {error ? <Alert severity='error' className='mb-4'>{error}</Alert> : null}
                        <div className="m-auto">
                            <h2 className="text-2xl font-light text-center">
                                {renderContent(
                                    'Log Into Your Account',
                                    'Create Your OpenTable Account'
                                )}
                            </h2>
                            <AuthModalInputs
                                inputs={inputs}
                                handleChangeInput={handleChangeInput}
                                isSignin={isSignin}
                            />
                            <button
                                onClick={handleClick}
                                disabled={isDisabled}
                                className="uppercase bg-red-600 w-full text-white p-3 rounded text-sm mb-5 disabled:bg-gray-400">
                                {' '}
                                {renderContent(
                                    'Log Into Your Account',
                                    'Create Your OpenTable Account'
                                )}
                            </button>
                        </div>
                    </>)}
                </Box>
            </Modal>
        </div>
    )
}
