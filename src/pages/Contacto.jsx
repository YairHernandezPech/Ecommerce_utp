import FormEmail from "../components/Forms/FormEmail/FormEmail";
import Maps from "../components/Maps";
import { Fragment, useEffect } from "react";
import Banner from "../components/Banner/Banner";

const Contacto = () => {
    useEffect(()=> {
        window.scrollTo(0,0);
    },[])
    return ( 
        <Fragment>
            <Banner title="Contáctanos"/>
            <FormEmail/>
            <Maps/>
        </Fragment>
    );
}

export default Contacto;