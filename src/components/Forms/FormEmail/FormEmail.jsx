
import { Col, Container, Row } from "react-bootstrap";
import "./FormEmail.css";

import React, { Component } from 'react';

class FormEmail extends Component {
  render() {
    return (
      <Container className="mt-4 mt-md-5">
                <Row className="justify-content-center">
                    <Col md={6} className="col-cust mb-5">
                        <h2><strong>¿Tienes alguna pregunta, comentario o sugerencia?</strong></h2>
                        <p class="">En TrendyClothes, valoramos tu opinión y estamos comprometidos a brindarte el mejor servicio posible. No dudes en ponerte en contacto con nuestro equipo de atención al cliente. </p>
                        <p class="mb-5"> Puedes enviarnos un mensaje a través del formulario de contacto a continuación o escribirnos directamente a contacto@trendy.mx. Estamos ansiosos por ayudarte en lo que necesites y esperamos escucharte pronto.</p>
                        <ul class="list-unstyled pl-md-5 mb-5">
                            <li class="d-flex text-black mb-2">
                                <span class="icon mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                </svg>
                                </span>
                                Calle 29 s/n Colonia Tres Cruces, Maxcanú, Mexico
                            </li>
                            <li class="d-flex text-black mb-2">
                                <span class="icon mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                                </svg>
                                </span>
                                994 544 6023
                            </li>
                            <li class="d-flex text-black">
                                <span class="icon mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                                </svg>
                                </span>
                                contacto@trendy.mx
                            </li>
                        </ul>
                    </Col>

                    <Col md={5}>
                        
                        <form className="mb-5" /* onSubmit={handleSubmit} */>
                            <div className="form-group">
                                <label htmlFor="name">Nombre</label>
                                <input
                                type="text"
                                className="form-control my-2"
                                name="name"
                                id="name"
                                /* value={formData.name}
                                onChange={handleInputChange} */
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                type="text"
                                className="form-control my-2 "
                                name="email"
                                id="email"
                                /* value={formData.email}
                                onChange={handleInputChange} */
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Mensaje</label>
                                <textarea
                                className="form-control my-2"
                                name="message"
                                id="message"
                                cols="30"
                                rows="5"
                                /* value={formData.message}
                                onChange={handleInputChange} */
                                ></textarea>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-dark">
                                Enviar Mensaje
                                </button>
                            </div>
                        </form>
                    </Col>
                </Row>
                
            </Container>
    );
  }
}

export default FormEmail;
