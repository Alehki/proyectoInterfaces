import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
    return (
        <footer className="bg-dark text-light py-5 mt-auto">
            <Container>
                <Row className="gy-4">
                    {/* Columna 1: Información de la Marca */}
                    <Col md={4}>
                        <h5 className="fw-bold text-white mb-3">
                            Paws & Style 🐾
                        </h5>
                        <p className="footer-link fw-normal mb-0" style={{ cursor: "default" }}>
                            Fábrica de diseño de indumentaria y accesorios para mascotas con 17 años de trayectoria. Prendas con identidad propia y calidad premium.
                        </p>
                    </Col>

                    {/* Columna 2: Enlaces Rápidos */}
                    <Col md={4}>
                        <h5 className="fw-bold text-white mb-3">Enlaces rápidos</h5>
                        <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
                            <li>
                                <Link to="/" className="footer-link">
                                    <i className="bi bi-chevron-right small me-1"></i> Inicio
                                </Link>
                            </li>
                            <li>
                                <Link to="/productos" className="footer-link">
                                    <i className="bi bi-chevron-right small me-1"></i> Productos
                                </Link>
                            </li>
                            <li>
                                <Link to="/contacto" className="footer-link">
                                    <i className="bi bi-chevron-right small me-1"></i> Contacto
                                </Link>
                            </li>
                        </ul>
                    </Col>

                    {/* Columna 3: Contacto y Redes */}
                    <Col md={4}>
                        <h5 className="fw-bold text-white mb-3">Contacto</h5>
                        <p className="footer-link fw-normal mb-1" style={{ cursor: "default" }}>WhatsApp Mayorista:</p>
                        <a 
                            href="https://wa.me/5491140869806"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-link d-inline-flex align-items-center gap-1 mb-3"
                        >
                            <i className="bi bi-whatsapp text-success"></i> +54 9 11 4086-9806
                        </a>

                        <div className="d-flex gap-3 fs-5 mt-2">
                            <a href="#instagram" className="footer-link" title="Instagram">
                                <i className="bi bi-instagram"></i>
                            </a>
                            <a href="#facebook" className="footer-link" title="Facebook">
                                <i className="bi bi-facebook"></i>
                            </a>
                            <a href="#tiktok" className="footer-link" title="TikTok">
                                <i className="bi bi-tiktok"></i>
                            </a>
                        </div>
                    </Col>
                </Row>

                <hr className="border-secondary my-4" />
                
                <p className="text-center footer-link mb-0 small w-100" style={{ cursor: "default" }}>
                    &copy; 2026 Paws & Style - Todos los derechos reservados.
                </p>
            </Container>
        </footer>
    );
}

export default Footer;