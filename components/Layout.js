// components/Layout.js
import Sidebar from './Sidebar';
import Header from './Header';
import MainContent from './MainContent';

const Layout = () => {
    return (
        <div className="layout">
            <Sidebar />
            <div className="main-section">
                <Header />
                <MainContent />
            </div>
        </div>
    );
};

export default Layout;
