import { Fragment, useEffect } from "react";
import Banner from "../components/Banner/Banner";
import HomeAbout from "../components/UsAbout/homeabout";

const Aboutus = () => {
    useEffect(()=> {
        window.scrollTo(0,0);
    },[])
    return ( 
        <Fragment>
            <Banner title="¿Quienes somos?"/>
            <HomeAbout/>
        </Fragment>
    );
}

export default Aboutus;