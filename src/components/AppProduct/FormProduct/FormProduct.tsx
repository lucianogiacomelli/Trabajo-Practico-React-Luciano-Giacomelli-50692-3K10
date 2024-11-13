import { Button, Form } from "react-bootstrap"
import { useForm } from "../../../hooks/useForm"
import { FC } from "react";

interface IPropsFormProduct {
  handleAddProducts: Function;
}

export const FormProduct: FC<IPropsFormProduct> = ({ handleAddProducts }) => {
  const { handleChange, values, resetForm } = useForm({
    nombre: "",
    imagen: "",
    precio: 0
  });
  
  const handleSubmitForm = () => {
    handleAddProducts(values);
    resetForm();
  };

  return (
    <Form className="p-4 border rounded shadow-sm bg-light" style={{ height: "80vh" }}>
      <h4 className="text-center mb-4">Agregar Producto</h4>
      <Form.Group controlId="formNombre" className="mb-3">
        <Form.Label>Nombre</Form.Label>
        <Form.Control 
          type="text" 
          name="nombre" 
          placeholder="Ingrese nombre del producto" 
          value={values.nombre} 
          onChange={handleChange} 
        />
      </Form.Group>
      
      <Form.Group controlId="formImagen" className="mb-3">
        <Form.Label>Imagen</Form.Label>
        <Form.Control 
          type="text" 
          name="imagen" 
          placeholder="URL de la imagen del producto" 
          value={values.imagen} 
          onChange={handleChange} 
        />
      </Form.Group>
      
      <Form.Group controlId="formPrecio" className="mb-4">
        <Form.Label>Precio</Form.Label>
        <Form.Control 
          type="number" 
          name="precio" 
          placeholder="Precio del producto" 
          value={values.precio} 
          onChange={handleChange} 
        />
      </Form.Group>

      <div className="d-flex justify-content-center">
        <Button onClick={handleSubmitForm} variant="primary">Enviar producto</Button>
      </div>
    </Form>
  );
}