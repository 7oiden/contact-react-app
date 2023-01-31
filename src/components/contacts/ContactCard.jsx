import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ContactCard(props) {
    const {id, name, body} = props;

    return (
        <>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {body}
        </Card.Text>
        <Button variant="primary">Edit</Button>
      </Card.Body>
    </Card>
    </>
    
    );
}

export default ContactCard;