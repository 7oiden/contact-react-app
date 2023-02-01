import HeaderNav from "./PageHeader";
import PageFooter from "./PageFooter";

function Layout({ children }) {
    return (
        <>
        <div className="sticky-footer-wrapper">
        <HeaderNav />
        <main className="container">
            {children}
        </main>
        </div>
        <PageFooter />
        </>
    )
}

export default Layout;