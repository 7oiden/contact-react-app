import Layout from "../layout/Layout";
import ContactsList from "../contacts/ContactsList";

function HomePage() {
    return (
        <Layout>
        <div>
             <h1>Contact list:</h1>
        </div>
        <div>
        <ContactsList />
        </div>
        </Layout>
    )
}

export default HomePage;