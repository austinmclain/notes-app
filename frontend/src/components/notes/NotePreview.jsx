import Card from 'react-bootstrap/Card';

export default function NotePreview(props) {
    return (
        <Card>
            <Card.Title>{props.title}</Card.Title>
            <Card.Body>{props.content}</Card.Body>
        </Card>
    )
}
