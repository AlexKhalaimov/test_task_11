import {Icon} from "./icon.jsx";
import Nav from 'react-bootstrap/Nav'
import {NavLink} from "react-bootstrap";
const socialShare = () => {
    return (
        <Nav className={'social-share d-flex align-items-center'}>
            <Nav.Link href="/home" className={'p-1'}>
                <Icon
                iconName="GearFill"
                color="#244B83"
                size={16}
                className="align-top"
            />
            </Nav.Link>
            <Nav.Link>
                <Icon
                    iconName="Twitter"
                    color="#55ACEE"
                    size={16}
                    className="align-top"
                />
            </Nav.Link>
            <Nav.Link>
                <Icon
                    iconName="Facebook"
                    color="#4267B2"
                    size={16}
                    className="align-top"
                />
            </Nav.Link>
        </Nav>
    )
}
export default socialShare
