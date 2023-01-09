import styled from 'styled-components';
import { NavLink } from "react-router-dom";

const NavItem = styled(NavLink)`
    color: black;
    text-decoration: none;
    font-size: 20px;

    &.active {
        color: tomato;
    }
    
    :hover:not(.active),
    :focus-visible:not(.active) {
        color: tomato
    }

`
const Li = styled.li`
    list-style: none;
`
export {NavItem, Li}