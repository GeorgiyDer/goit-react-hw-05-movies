import { Header, NavItem } from "./AppBar.styled";

const navItems = [
    { href: "/", text: 'Home' },
    { href: "movies", text: 'Movies' }
];

export const AppBar = () => {
    return (
        <Header>
        {navItems.map(({ href, text }) => (<NavItem to={href} key={href}>{text}</NavItem>))}
        </Header >
    )
}