import React from "react";
import { Navbar, Container, Nav, Button} from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";

function Navigation() {
    const {
        user,
        isAuthenticated,
        loginWithRedirect,
        logout,
    } = useAuth0();


    const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/profile">Profile</Nav.Link>
                </Nav>
                {!isAuthenticated && (
                    <Button variant="success" onClick={() => loginWithRedirect()}>Login</Button>
                )}
                {isAuthenticated && (
                    <div>
                        <Button variant="success" onClick={() => logoutWithRedirect()}>Logout</Button>
                        <Button variant="success">{user.name}</Button>
                    </div>
                )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;