import { Col, Container, Row } from "react-bootstrap";


import React, { Component } from 'react';

class Maps extends Component {
    render() {
        return(
            <Container className="mt-5">
                <Row className="justify-content-center mb-5 mt-5 mx-1">
                    <iframe
                        className="embed-responsive-item"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1399.132324234079!2d-90.0081820628606!3d20.578452452938304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85f89d851f5db031%3A0x88bb1c96205029da!2sUniversidad%20Tecnol%C3%B3gica%20del%20Poniente!5e0!3m2!1ses-419!2smx!4v1696749969017!5m2!1ses-419!2smx"
                        width="1000"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map"
                    />
                </Row>
            </Container>
        );
    }
}

export default Maps;