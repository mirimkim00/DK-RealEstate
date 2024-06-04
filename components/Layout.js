import MainNav from './MainNav';
import { Container } from 'react-bootstrap';

export default function Layout(props) {
    return (
        <>
            <title>DK Real Estate Home</title>
            <MainNav />
            {props.children}
            <br />
        </>
    )
}