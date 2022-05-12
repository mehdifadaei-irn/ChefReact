import React from "react";

import Head from 'next/head';
import {Footer, Navbar} from "./index";


const Layout = ({children})=> {
    return (
        <>
            <div className={'layout'}>
                {/*metaSection*/}
                <Head>
                    <title> Mehdi Fadaei Store</title>
                </Head>
                {/*header*/}
                <header>
                    <Navbar/>
                </header>

                {/*mainSection*/}
                <main className={'main-container'}>
                    {children}
                </main>

                {/*FooterSection*/}
                <footer>
                    <Footer/>
                </footer>
            </div>
        </>
    )
}

export default Layout;