import Layout from "../layout/Layout";
import ContactsList from "../contacts/ContactsList";

function HomePage() {
    return (
        <Layout>
        <div>
        <ContactsList />
        </div>
        </Layout>
    )
}

export default HomePage;