import { Navbar, Container, Nav } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <>
            <Navbar bg="dark" className="navbar" variant="dark" fixed="top" data-testid="navigation-1">
                <Container>
                    <Navbar.Brand>Notes</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link className="nav-link" to="/">New Note</Link>
                        <Link className="nav-link" to="/notes">All Notes</Link>
                    </Nav>
                </Container>
            </Navbar>
            <br></br>
            <br></br>
            <br></br>
            <Outlet />
        </>
    )
}