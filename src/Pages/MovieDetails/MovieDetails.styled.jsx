import styled from 'styled-components';
import { NavLink } from "react-router-dom"

const StyledImg = styled.img`
    
`
const FlexDiv = styled.div`
    display: flex;
    margin-bottom: 20px;
`

const InfoDiv = styled.div`
    margin-left: 20px;
`

const AdditionalDiv = styled.div`
    padding: 5px;
    border: 1px solid black;
`
const NavItem = styled(NavLink)`
    font-size: 20px;
    text-decoration: none;
    color: black;

    &.active {
        color: tomato;
    }

    :hover:not(.active),
    :focus-visible:not(.active) {
        color: tomato
    }
`

const GoBack = styled(NavLink)`
    text-decoration: none;
    color: black
`
const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
`

const Li = styled.li`
    list-style: none;
`
export { StyledImg, FlexDiv, InfoDiv, AdditionalDiv, NavItem, Li, Button, GoBack}