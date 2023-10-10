import { Container, Row, Carousel } from "react-bootstrap";
import "./homeabout.css";
import React, { Component } from 'react';
import Logo from "../../Images/Logo.jpg";
import moda1 from "../../Images/moda1.png";
import moda2 from "../../Images/moda2.png";
import moda3 from "../../Images/moda3.png";
import moda4 from "../../Images/moda4.png";

class HomeAbout extends Component {
  render() {
    return (
      <Container className="mt-4 mt-md-5">
        <Row className="justify-content-center">
          <div class="container text-center">
            <div class="row align-items-start">
              <div class="col">
                <img src={Logo} alt="Img" class="logo1" />
              </div>
              <div class="col">
                <p class="descrip">
                  <strong>
                    TrendyCloset, nuestra pasión es la moda masculina elegante y atemporal.
                    Nos enorgullece ofrecer a hombres de todas las edades y
                    estilos una experiencia de compra excepcional que
                    refleja la sofisticación y la calidad que buscan.
                  </strong>
                </p>
              </div>
            </div>
          </div>
          <div style={{ marginTop: '60px' }}>
            <div class="container text-center">
              <div class="row align-items-center">
                <div class="col">
                  <h1 class="eslogan">"Refina tu estilo, define tu elegancia."</h1>
                </div>
              </div>
            </div>
          </div>
          <div class="container text-center" style={{ marginTop: '60px' }}>
            <div class="row align-items-start">
              <div class="col">
                <pre class="title1"><strong>Nuestra Misión</strong></pre>
                Nuestra misión es simple: ayudar a los hombres a lucir su mejor versión.
                Creemos que la moda es una forma de expresión personal y queremos ser tu
                aliado en la búsqueda de un estilo que refleje tu individualidad y confianza.
                Nos esforzamos por ofrecer un servicio al cliente excepcional y
                una experiencia de compra sin complicaciones.
              </div>
              <div class="col">
                <Carousel id="carouselExample" interval={2000} touch={false}>
                  <Carousel.Item>
                    <img src={moda4} className="d-block w-100 modas" alt="moda4" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={moda1} className="d-block w-100 modas" alt="moda1" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={moda2} className="d-block w-100 modas" alt="moda2" />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={moda3} className="d-block w-100 modas" alt="moda3" />
                  </Carousel.Item>
                </Carousel>

              </div>
              <div class="col">
                <pre class="title1"><strong>Lo que Ofrecemos</strong></pre>
                En TrendyCloset, encontrarás una amplia gama de ropa elegante para hombres,
                desde trajes impecablemente confeccionados hasta camisas de vestir, pantalones,
                abrigos y accesorios que te ayudarán a destacar en cualquier ocasión. Nos asociamos
                con marcas de renombre y diseñadores emergentes para asegurarnos de que cada artículo en
                nuestro catálogo cumpla con los
                estándares más altos de calidad y estilo.
              </div>
            </div>
          </div>
          <div class="espacio" />

        </Row>
      </Container>
    );
  }
}


export default HomeAbout;