import Layout from "../layout/Layout";
import ContactsList from "../contacts/ContactsList";

function HomePage() {
    return (
        <Layout>
        <div>
             <h1>This is the home page</h1>
        </div>
        <div>
        <ContactsList />
        </div>
        </Layout>
    )
}

export default HomePage;