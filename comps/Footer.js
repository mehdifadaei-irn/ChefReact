import React from "react";
import {AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai'


const Footer = () => {
    return (
        <div className={'footer-container'}>
            <p>2021 mehdi Headphones All here</p>
            <p>
                <AiFillInstagram color={'green'} fontSize={40} style={{cursor: 'pointer'}}/>
                <AiOutlineTwitter color={'green'} fontSize={40} style={{cursor: 'pointer'}}/>
            </p>

        </div>
    )
}

export default Footer;