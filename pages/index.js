import React from 'react';
import {HeroBanner, FooterBanner, Product} from "../comps";

import { client} from '../lib/client';

const Home = ({products, banners}) => {

    console.log(banners)

    return (
        <>
            <HeroBanner heroBanner={banners.length && banners[0]}/>

            <div className={'products-heading'}>
                <h2>Best selling Products</h2>
                <p>Speakers of many variations</p>
            </div>

            <div className={'products-container'}>
                {products?.map((product, i)=> <Product product={product} key={product._id}/>)}
            </div>

            <FooterBanner footerBanner={banners && banners[0]}/>
        </>
    )
}

export const getServerSideProps= async ()=> {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);

    const bannerQuery = '*[_type == "banner"]';
    const banners = await client.fetch(bannerQuery);

    return {
        props: {products, banners}
    }
}



export default Home;