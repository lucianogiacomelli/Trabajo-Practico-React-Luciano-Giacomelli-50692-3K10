import { Container, Navbar } from "react-bootstrap"

export const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" className="mb-4">
      <Container className="justify-content-center">
        <Navbar.Brand className="text-center">Carga de Productos</Navbar.Brand>
      </Container>
    </Navbar>
  )
}



