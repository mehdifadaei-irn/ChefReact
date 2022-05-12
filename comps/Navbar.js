import React from "react";

import {urlFor} from '../lib/client'
import {AiOutlineShopping} from 'react-icons/ai'
import Link from 'next/link'


const Navbar = ()=> {
    return (
        <div className={'navbar-container'}>
            <p className={'logo'}>
                <Link href={'/'}>Fadaei Store</Link>
            </p>

            <button type={"button"}
                className={'cart-icon'}
                onClick={''}
            >
                <AiOutlineShopping/>
                <span className={'cart-item-qty'}>2</span>
            </button>
        </div>
    )
}

export default Navbar;