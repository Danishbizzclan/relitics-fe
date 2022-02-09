import React from 'react';
import Link from "next/link"
import { useRouter } from "next/router"


export default function SecondNav() {
    const router = useRouter();
    return (
        <div className=' bg-lightBlue'>
            <ul className="nav container ps-4">
                <Link href="/MarketStats" className="dropdown-item">
                    <button className={`btn fs-15 text-white nav-link py-3 px-5 border-L_white ${router.pathname == "/MarketStats" ? "active" : null}`} href="#">Market</button>
                </Link>
                <Link href="/EconomicStats" className="dropdown-item">
                    <button className={`btn fs-15 text-white nav-link py-3 px-5 border-L_white ${router.pathname == "/EconomicStats" ? "active" : null}`} href="#">Economic</button>
                </Link>
                <Link href="/DemographicStats" className="dropdown-item">
                    <button className={`btn fs-15 text-white nav-link py-3 px-5 border-L_white ${router.pathname == "/DemographicStats" ? "active" : null}`} href="#">Demographic</button>
                </Link>
                <Link href="/Notes" className="dropdown-item">
                    <button className={`btn fs-15 text-white nav-link py-3 px-5 border-L_white ${router.pathname == "/Notes" ? "active" : null}`} href="#">Notes</button>
                </Link>
            </ul>
        </div>)
}
