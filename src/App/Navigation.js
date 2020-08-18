import React, {useState} from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const Navigation = props => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    const click = event => {
        event.preventDefault();

        props.toggle(event.target.href.split("#")[1]);
    }

    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/" className="mr-auto"><h1>Recipe Book</h1></NavbarBrand>
            <NavbarToggler onClick={toggleNavbar} className="mr-2" />
            <Collapse isOpen={!collapsed} navbar>
                <Nav navbar>
                    <NavItem>
                        <NavLink onClick={click} href="#calendar">Calendar</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink onClick={click} href="#new">New Recipe</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink onClick={click} href="#import">Import Recipe</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink onClick={click} href="#all">All Recipes</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default Navigation;
