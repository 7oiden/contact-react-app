import Card from 'react-bootstrap/Card';
import DeleteContactBtn from './DeleteContactBtn';
import EditContactModal from '../modals/EditContactModal';
import NotesModal from "../modals/NotesModal"

function ContactCard(props) {
    const {id, firstName, lastName, email, handleRerender } = props;

    return (
        <>
    <Card style={{ width: '20rem' }}>
      <Card.Body>
        <Card.Title>{firstName} {lastName}</Card.Title>
        <Card.Text>
          {email}
        </Card.Text>
      <NotesModal />
        <DeleteContactBtn 
          id={id}
          firstName={firstName}
          lastName={lastName}
          email={email}
          handleRerender={handleRerender} />     
          <EditContactModal 
        id={id}
        firstName={firstName}
          lastName={lastName}
          email={email} />
      </Card.Body>
    </Card>
    </>
    );
}

export default ContactCard;