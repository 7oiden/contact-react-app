import Layout from "../layout/Layout";
import ContactsList from "../contacts/ContactsList";
import AddContactModal from "../modals/AddContactModal";

function HomePage() {
    return (
        <Layout>
            <AddContactModal />
        <div>
        <ContactsList />
        </div>
        </Layout>
    )
}

export default HomePage;