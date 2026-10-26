import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Descripcion() {
  return (
    <section className='py-5 bg-body-tertiary'>
      <Container>
        <h2 className='text-center mb-4 fw-bold'>
          Sobre Paws & Style
        </h2>
        <p className='lead text-center text-muted mb-4'>
          Paws & Style es una marca líder en diseño de indumentaria y accesorios para mascotas con 17 años de trayectoria.
        </p>

        <Row className="g-4 text-center">
          <Col md={4}>
            <div className="p-3">
              <i className="bi bi-award fs-1 text-danger mb-3"></i>
              <h4 className="fw-bold h5">Trayectoria y Calidad</h4>
              <p className="text-muted small">
                Colecciones completas para invierno, verano y ocasiones especiales, trabajando con distintos talles y texturas premium.
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className="p-3">
              <i className="bi bi-stars fs-1 text-danger mb-3"></i>
              <h4 className="fw-bold h5">Diseños Originales</h4>
              <p className="text-muted small">
                Prendas con identidad propia pensadas para vestir mascotas de todas las razas y estilos, buscando resaltar su personalidad.
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div className="p-3">
              <i className="bi bi-graph-up-arrow fs-1 text-danger mb-3"></i>
              <h4 className="fw-bold h5">Rotación Comercial</h4>
              <p className="text-muted small">
                Diseños dinámicos y colecciones que rotan durante todo el año garantizando una excelente rotación en el mercado.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Descripcion;