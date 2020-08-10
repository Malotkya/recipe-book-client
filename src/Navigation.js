import React, {useState} from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Navigation = props => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/" className="mr-auto">Recipe Book</NavbarBrand>
            <NavbarToggler onClick={toggleNavbar} className="mr-2" />
            <Collapse isOpen={!collapsed} navbar>
                <Nav navbar>
                    <NavItem>
                        <NavLink href="#">Calendar</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">New Recipe</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">All Recipes</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default Navigation;
