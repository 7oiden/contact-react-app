import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import DeleteContactBtn from './DeleteContactBtn';

function ContactCard(props) {
    const {id, firstName, lastName, email} = props;

    return (
        <>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{firstName}</Card.Title>
        <Card.Text>
          {email}
          <p>{id}</p>
        </Card.Text>
        <Button variant="primary">Edit</Button>
        <DeleteContactBtn id={id} />
      </Card.Body>
    </Card>
    </>
    
    );
}

export default ContactCard;