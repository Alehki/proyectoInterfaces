import { Card, Button } from "react-bootstrap";

function CarritoItem({ producto, eliminarProducto, aumentarCantidad, disminuirCantidad }) {
  // Adaptamos las propiedades a FakeStore API con respaldos por seguridad
  const { id, title, price, image } = producto;
  const stock = producto.stock ?? 10;
  const cantidad = producto.cantidad ?? 1;

  const subtotal = price * cantidad;

  return (
    <Card className="shadow-sm border-0 h-100">
      <Card.Body className="d-flex align-items-center gap-3 p-3">
        {/* Imagen del Producto */}
        <div 
          style={{ 
            width: "80px", 
            height: "80px", 
            flexShrink: 0, 
            backgroundColor: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "4px"
          }}
        >
          <img 
            src={image} 
            alt={title} 
            style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "6px" }}
          />
        </div>

        {/* Información y Controles */}
        <div className="flex-grow-1">
          <h6 className="fw-bold mb-1 text-truncate" style={{ maxWidth: "250px" }} title={title}>
            {title}
          </h6>
          <p className="text-muted small mb-2">
            Precio unitario: ${price.toLocaleString("es-AR")}
          </p>

          <div className="d-flex align-items-center gap-2">
            <div className="d-flex align-items-center border rounded">
              <Button 
                variant="light" 
                size="sm" 
                onClick={() => disminuirCantidad(id)}
                disabled={cantidad <= 1}
                className="border-0 px-2 py-0"
              >
                <i className="bi bi-dash"></i>
              </Button>
              
              <span className="px-2 fw-semibold small">{cantidad}</span>
              
              <Button 
                variant="light" 
                size="sm" 
                onClick={() => aumentarCantidad(id)}
                disabled={stock <= cantidad}
                className="border-0 px-2 py-0"
              >
                <i className="bi bi-plus"></i>
              </Button>
            </div>

            <Button 
              variant="outline-danger" 
              size="sm" 
              onClick={() => eliminarProducto(id)}
              className="ms-auto border-0"
              title="Eliminar producto"
            >
              <i className="bi bi-trash fs-6"></i>
            </Button>
          </div>
        </div>

        {/* Subtotal */}
        <div className="text-end ps-2" style={{ minWidth: "90px" }}>
          <span className="text-muted small d-block">Subtotal</span>
          <span className="fw-bold text-primary">${subtotal.toLocaleString("es-AR")}</span>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CarritoItem;