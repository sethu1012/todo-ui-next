import { CSSReset, ThemeProvider } from "@chakra-ui/core";
import NextApp, { AppContext } from 'next/app';
import Head from 'next/head';
import React from 'react';
import Nav from "../components/@core/nav";

class App extends NextApp {
    render() {
        const { pageProps, Component } = this.props;
        return (
            <ThemeProvider>
                <CSSReset />
                <Head>
                    <link rel="shortcut icon" href="/favicon.ico" />
                </Head>
                <Nav />
                <Component {...pageProps} />
            </ThemeProvider>
        );
    }

    static async getInitialProps({ Component, ctx }: AppContext) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
        return { pageProps };
    }
}

export default App;