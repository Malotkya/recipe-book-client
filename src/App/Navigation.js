import React, {useState} from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';

const Navigation = props => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/" className="mr-auto"><h1>Recipe Book</h1></NavbarBrand>
            <NavbarToggler onClick={toggleNavbar} className="mr-2" />
            <Collapse isOpen={!collapsed} navbar>
                <Nav navbar>
                    <NavItem>
                        <NavLink className={classnames({ active: props.activeTab === 'calendar'})}
                                onClick={()=>{props.toggle('calendar')}} href="#calendar">Calendar</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink className={classnames({ active: props.activeTab === 'new'})}
                            onClick={()=>{props.toggle('new')}} href="#new">New Recipe</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink className={classnames({ active: props.activeTab === 'import'})}
                            onClick={()=>{props.toggle('import')}} href="#import">Import Recipe</NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink className={classnames({ active: props.activeTab === 'all'})}
                            onClick={()=>{props.toggle('all')}} href="#all">All Recipes</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default Navigation;
