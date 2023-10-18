// These styles apply to every route in the application
import '../styles/global.css'
import {NavBar} from "../components/Navbar";
import Footer from "../components/Footer";

export default function App({Component, pageProps}) {
    return (
        <>
            <NavBar/>
            <Component {...pageProps} />
            <Footer/>
        </>
    )

}