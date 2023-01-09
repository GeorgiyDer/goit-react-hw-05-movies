import styled from 'styled-components';
import { NavLink } from "react-router-dom"

const Header = styled.header`
    padding: 20px;
    display: flex;
    margin-bottom: 20px;
    border: 1px solid tomato;
    
    box-shadow: 0 5px 5px -5px #333;

`
const NavItem = styled(NavLink)`
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 24px;
    color: black;
    :not(:last-child) {
        margin-right: 10px}

    &.active {
        color: tomato;
    }

    :hover:not(.active),
    :focus-visible:not(.active) {
        color: tomato
    }
`
export { Header, NavItem }