import { useState } from "react";
import { Header } from "./Header/Header";
import { FormProduct } from "./FormProduct/FormProduct";
import { ListProducts } from "./ListProduct/ListProducts";
import { Container } from "react-bootstrap";

interface ItemProduct {
  precio: number;
  imagen: string;
  nombre: string;
}

export const AppProduct = () => {
  const [products, setProducts] = useState<ItemProduct[]>([]);

  const handleAddProducts = (newItem: ItemProduct) => {
    setProducts((prev) => [...prev, newItem]);
  };

  return (
    <Container fluid>
      <Header />
      <h2 className="text-center mb-4">Formulario</h2>

      <div className="d-flex" style={{ height: "100vh" }}>
        {/* Formulario - Ocupa 25% del ancho */}
        <div style={{ flex: "0 0 25%", padding: "20px" }}>
          <FormProduct handleAddProducts={handleAddProducts} />
        </div>

        {/* Lista de Productos - Ocupa 75% del ancho */}
        <div style={{ flex: "0 0 75%", padding: "20px" }}>
          <h2 className="text-center">Productos</h2>
          {products.length > 0 ? (
            <ListProducts arrayItems={products} />
          ) : (
            <h4 className="text-center text-muted">No hay productos</h4>
          )}
        </div>
      </div>
    </Container>
  );
}