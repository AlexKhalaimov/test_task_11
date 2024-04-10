import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {Icon} from "../shared/icon.jsx"
const CourseSearch = () => {
    return (
        <Form className={'d-flex flex-row align-items-center'}>
                <Form.Control type="text" placeholder="" />
            <Button variant="primary" type="submit">
                <Icon
                    iconName="Search"
                    color="white"
                    size={16}
                    className="align-center"
                />
            </Button>
        </Form>
    )
}
export { CourseSearch }
