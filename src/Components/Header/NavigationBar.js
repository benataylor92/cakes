import React from 'react'
import '../Header/navigationBar.css'

function NavigationBar() {
    return (
        <div className="Navigation_Banner">
            <nav>
                <ul className="Buy_A_Cake">
                    <li><a href="/buyacake">Buy a Cake</a></li>
                </ul>
                <ul className="Become_A_Baker">
                    <li><a href="/buyacake">Become a Baker</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavigationBar;