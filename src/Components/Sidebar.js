import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <div className="flex z-0 flex-col h-screen px-7 pt-10 gap-7 items-start bg-black-200">
            <Link to="ledger">
            <button className="focus:text-astra-100 focus:bg-astra-100 focus:bg-opacity-10 focus:ring-1 outline-none px-7 rounded-md py-1 focus:ring-astra-100">
                Ledger
            </button>
            </Link>
            <Link to="ledger">
            <button className="focus:text-astra-100 focus:bg-astra-100 focus:bg-opacity-10 focus:ring-1 outline-none px-7 rounded-md py-1 focus:ring-astra-100">
                Invoice
            </button>
            </Link>
            <Link to="ledger">
            <button className="focus:text-astra-100 focus:bg-astra-100 focus:bg-opacity-10 focus:ring-1 outline-none px-7 rounded-md py-1 focus:ring-astra-100">
                Inventory
            </button>
            </Link>
            <Link to="ledger">
            <button className="focus:text-astra-100 focus:bg-astra-100 focus:bg-opacity-10 focus:ring-1 outline-none px-7 rounded-md py-1 focus:ring-astra-100">
                About Us
            </button>
            </Link>
            <Link to="settings">
            <button className="focus:text-astra-100 focus:bg-astra-100 focus:bg-opacity-10 focus:ring-1 outline-none px-7 rounded-md py-1 focus:ring-astra-100">
                Settings
            </button>
            </Link>
        </div>
    )
}
