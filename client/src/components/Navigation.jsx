import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import useAuth from "../auth/useAuth"
import routes from "../helpers/routes"

export default function Navigation() {
    const marginAuto = {
        marginRight: "auto"
    }

    const { logout } = useAuth()

    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
            <Navbar.Brand as={NavLink} to={routes.home}>
                Gorus App
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                {/* <Nav className="mr-auto" style={marginAuto}>
                    <Nav.Link as={NavLink} to={routes.projects}> Proyectos </Nav.Link>
                    <NavDropdown title="Admin">
                        <NavDropdown.Item as={NavLink} to={routes.admin.users}>Usuarios</NavDropdown.Item>
                    </NavDropdown>
                </Nav> */}
                <Nav>
                    <Nav.Link as={NavLink} to={routes.login}>Iniciar Sesion</Nav.Link>
                    <Nav.Link as={NavLink} to={routes.register}>Registro</Nav.Link>
                    <Nav.Link as={NavLink} to={routes.account}>Mi cuenta</Nav.Link>
                    <Nav.Link onClick={() => logout()}>Cerrar Sesion</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
