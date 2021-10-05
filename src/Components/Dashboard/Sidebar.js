import React from 'react'

export default function Sidebar() {
    return (
        <div className="flex z-0 flex-col h-screen px-7 pt-10 gap-7 items-start bg-black-200">
            <button className="focus:text-astra-100 focus:bg-astra-100 focus:bg-opacity-10 focus:ring-1 outline-none px-7 rounded-md py-1 focus:ring-astra-100">
                Ledger
            </button>
            <button className="focus:text-astra-100 focus:bg-astra-100 focus:bg-opacity-10 focus:ring-1 outline-none px-7 rounded-md py-1 focus:ring-astra-100">
                Invoice
            </button>
            <button className="focus:text-astra-100 focus:bg-astra-100 focus:bg-opacity-10 focus:ring-1 outline-none px-7 rounded-md py-1 focus:ring-astra-100">
                Inventory
            </button>
            <button className="focus:text-astra-100 focus:bg-astra-100 focus:bg-opacity-10 focus:ring-1 outline-none px-7 rounded-md py-1 focus:ring-astra-100">
                About Us
            </button>
            <button className="focus:text-astra-100 focus:bg-astra-100 focus:bg-opacity-10 focus:ring-1 outline-none px-7 rounded-md py-1 focus:ring-astra-100">
                Settings
            </button>
        </div>
    )
}
