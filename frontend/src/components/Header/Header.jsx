import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='header-contents'>
                <h2>Fresh Food, Delivered Right to Campus!</h2>
                <p>Tired of long lines at the canteen or rushing off-campus for a quick bite? We’ve got you covered! Our service is designed exclusively for college students who want a hassle-free, delicious meal without leaving campus.</p>
                <button>View Menu</button>
            </div>
        </div>
    )
}

export default Header
