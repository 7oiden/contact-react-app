import HeaderNav from "./PageHeader";
import PageFooter from "./PageFooter";

function Layout({ children }) {
    return (
        <>
        <div className="sticky-footer-wrapper">
        <HeaderNav />
        <main>
            {children}
        </main>
        </div>
        <PageFooter />
        </>
    )
}

export default Layout;