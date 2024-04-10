import {Button, Card} from "react-bootstrap";
import SocialShare from "../shared/social.share.jsx";
import styles from './Dashboard.module.css'
const CoursesItem = ({product}) => {
    return (
        <Card className={styles['course-item']}>
            <Card.Img variant="top" src={product.thumbnail} />
            <Card.Body className={'d-flex flex-column'}>
                <Card.Title className={'text-start'}>{product.title}</Card.Title>
                <Card.Text className={'text-start'}>{product.description}</Card.Text>
                <Card.Footer className={'d-flex align-items-center justify-content-center mt-auto border-0 course-item__footer'}>
                    <SocialShare></SocialShare>
                    <Button variant="outline-info" href="#link" as="a">Переглянути курс</Button>
                </Card.Footer>
            </Card.Body>
        </Card>
    )
}
export default CoursesItem
