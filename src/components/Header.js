import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from 'react-redux';

const Header = (props) => {
    
    const ListUsers = useSelector((state) => state.user.ListUsers);

    return (
        <>
            <Navbar bg="light" expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown
                                // title="Dropdown"
                                style={{ marginLeft: "50px" }}
                                title={`(${ListUsers.length}) Users`}
                                id="basic-nav-dropdown"
                            >
                                {ListUsers && ListUsers.length > 0 &&
                                    ListUsers.map((item, index) => {
                                        return (
                                            <NavDropdown.Item
                                                href="#"
                                                key={`user-${index}`}
                                            >
                                                {item.email}
                                            </NavDropdown.Item>
                                        )
                                    })}
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;
