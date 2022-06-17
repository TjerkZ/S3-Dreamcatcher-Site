import React from "react";
import { Navbar, Container, Nav, Button, NavDropdown} from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";

function Navigation() {
    const {
        user,
        isAuthenticated,
        isLoading,
        loginWithRedirect,
        logout,
    } = useAuth0();


    const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });

    if (isLoading) {
        return <div></div>
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/profile">Profile</Nav.Link>
                        <Nav.Link href="/dreams">Dreams</Nav.Link>
                        <Nav.Link href="/stats">Stats</Nav.Link>
                    </Nav>
                    
                    {isAuthenticated && (
                        <div>
                            <Nav>
                                <NavDropdown title={user.name} id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="/profile">profile</NavDropdown.Item>
                                    <NavDropdown.Item><Button variant="danger" onClick={() => logoutWithRedirect()}>Logout</Button></NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </div>
                    )}
                    {!isAuthenticated && (
                        <Button variant="success" onClick={() => loginWithRedirect()}>Login</Button>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;