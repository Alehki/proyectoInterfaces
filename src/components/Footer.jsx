import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./footer.css";

function Footer() {
    return (
        <footer className="bg-dark text-light py-5 mt-auto">
            <Container>
                <Row className="gy-4 justify-content-between align-items-center">
                    {/* Columna 1: Información de la Marca */}
                    <Col lg={6}>
                        <h5 className="fw-bold text-white mb-3">
                            Paws & Style 🐾
                        </h5>
                        <p className="footer-link fw-normal mb-0" style={{ cursor: "default", maxWidth: "500px" }}>
                            Fábrica de diseño de indumentaria y accesorios para mascotas con 17 años de trayectoria. Prendas con identidad propia y calidad premium.
                        </p>
                    </Col>

                    {/* Columna 2: Contacto y Redes (Simplificada) */}
                    <Col lg={4} className="text-lg-end">
                        <h5 className="fw-bold text-white mb-3">Contacto</h5>
                        <p className="footer-link fw-normal mb-1" style={{ cursor: "default" }}>Mayorista:</p>
                        <a 
                            href="https://wa.me/5491134343434"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-link d-inline-flex align-items-center gap-1 mb-3"
                        >
                            <i className="bi bi-whatsapp text-success"></i> +54 9 11 3434-3434
                        </a>

                        <div className="d-flex gap-3 fs-5 mt-2 justify-content-lg-end">
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