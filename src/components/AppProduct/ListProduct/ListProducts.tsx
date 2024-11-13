import { FC } from "react"
import { Card } from "react-bootstrap"

interface ItemProduct {
  precio: number;
  imagen: string;
  nombre: string;
}

interface IPropsListProduct {
  arrayItems: ItemProduct[];
}

export const ListProducts: FC<IPropsListProduct> = ({ arrayItems }) => {
  return (
    <div 
      className="p-3 m-3 border rounded bg-light"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)", // Cuatro columnas
        gap: "20px",
      }}
    >
      {arrayItems.map((el, i) => (
        <Card key={i} className="shadow-sm" style={{ width: '100%' }}>
          <Card.Img variant="top" src={el.imagen} style={{ height: '200px', objectFit: 'cover' }} />
          <Card.Body>
            <Card.Title>{el.nombre}</Card.Title>
            <Card.Text className="text-muted">Precio: ${el.precio}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}