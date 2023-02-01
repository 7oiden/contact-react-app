import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import DeleteContactBtn from './DeleteContactBtn';
import EditContactModal from '../modals/EditContactModal';

function ContactCard(props) {
    const {id, firstName, lastName, email} = props;

    return (
        <>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{firstName} {lastName}</Card.Title>
        <Card.Text>
          {email}
        </Card.Text>
      <EditContactModal />
        <DeleteContactBtn id={id} />
      </Card.Body>
    </Card>
    </>
    
    );
}

export default ContactCard;