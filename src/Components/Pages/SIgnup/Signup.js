import React from 'react'
// import {Toggle} from './Toggle'

export default function Signup() {
    return (
        <>
            <div className="h-screen flex font-sans bg-black-100 text-white-100">
                <div className="md:flex-1  flex rounded-sm flex flex-col">
                    <h2 className="text-3xl font-bold flex justify-center">Sign up</h2>
                    <form>
                        <div>
                        <div className="bg-black-100 text-white-100">
                            <span>
                                <label>
                                Email
                                </label>
                            </span>
                        <input className="text-black-100" placeholder="enter you email"></input>
                        </div>
                        <div className="bg-black-100 text-white-100">
                            <span>
                                <label>
                                Password
                                </label>
                            </span>
                        <input className="text-black-100" placeholder="enter a password"></input>
                        </div>
                        <button className="border-light-astra-100 border-2 hover:font-bold rounded-md px-5 bg-opacity-30 text-astra-100 bg-astra-100" type="submit">
                            Submit
                        </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
