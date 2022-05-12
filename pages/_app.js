import React from 'react';
import {Toaster} from 'react-hot-toast';
import {Layout} from "../comps";
import '../styles/globals.css';

function MyApp({Component, pageProps}) {
    return (
        <Layout>
            <Toaster/>
            <Component {...pageProps} />
        </Layout>

    )
}

export default MyApp;