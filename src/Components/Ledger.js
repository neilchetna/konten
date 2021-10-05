import React from 'react'
import Sidebar from './Dashboard/Sidebar'
import TopBar from './Dashboard/TopBar'

export default function Ledger() {
    return (
        <div className="bg-black-100 text-white-100 h-screen">
            <TopBar />
            <div className="flex justify-end z-0">
                <Sidebar />
            </div>
        </div>
    )
}
