import React from 'react'
import pfp from "../../assets/pfp.jpg";
import logo from '../../assets/logo.svg'

export default function TopBar() {
    return (
        <div className="shadow-md flex z-100 justify-between items-center px-3 py-3">
            <img className="h-8" src={logo} alt="#"></img>
            <div className="flex justify-around px-2">
                <img className="h-10 flex object-cover rounded-full w-10 ring ring-astra-100" src={pfp} alt="#"></img>
                <p className="flex justify-center px-4 items-center">User Name</p>
            </div>
        </div>
    )
}
