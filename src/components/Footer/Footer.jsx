import React from "react";
import "./style.css";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="footer-row">
          <Col md={3} sm={5} className="box">
            <div className="logo">
              <ion-icon name="bag"></ion-icon>
              <h1>TrendyCloset</h1>
            </div>
            <p>
              En TrendyCloset, la elegancia se encuentra en cada detalle.
              Nuestra colección de alta costura y vestidos deslumbrantes te
              ayudará a destacar en cualquier ocasión. Únete a nuestra comunidad
              y redescubre la moda elegante.
            </p>
          </Col>
          <Col md={3} sm={5} className="box">
            <h2>Sobre nosotros</h2>
            <ul>
              <li>Empleos</li>
              <li>Nuestras Tiendas</li>
              <li>Nuestra Responsabilidad Social</li>
              <li>Términos y Condiciones</li>
              <li>Política de Privacidad</li>
            </ul>
          </Col>
          <Col md={3} sm={5} className="box">
            <h2>Atención al cliente</h2>
            <ul>
              <li>Centro de Ayuda</li>
              <li>Cómo Comprar</li>
              <li>Rastrear tu Pedido</li>
              <li>Compras Corporativas y al Por Mayor</li>
              <li>Devoluciones y Reembolsos</li>
            </ul>
          </Col>
          <Col md={3} sm={5} className="box">
            <h2>Contacta con nosotros</h2>
            <ul>
              <li>Email: info@trendycloset.com</li>
              <li>Phone: +52 55 1234 5678</li>
              <li>
                {" "}
                ¡Estamos trabajando en nuestra nueva ubicación en México! Pronto
                te proporcionaremos más detalles.
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
