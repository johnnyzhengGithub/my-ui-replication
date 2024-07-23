// components/MainContent.js
"use client"
import React, { useState } from 'react';

const MainContent = () => {
    const [activeTab, setActiveTab] = useState('Security');

    const renderContent = () => {
        switch (activeTab) {
            case 'General':
                return <div>General Content</div>;
            case 'Security':
                return (
                    <div>
                        <div className="account-security">
                            <p>Your account security is 90%</p>
                            <button>Review security</button>
                        </div>
                        <div className="section basics">
                            <h2>Basics</h2>
                            <p>Password: ******** <button>Edit</button></p>
                            <p>Two-step verification: <input type="checkbox" checked /> <button>Edit</button></p>
                        </div>
                        <div className="section browsers-and-devices">
                            <h2>Browsers and devices</h2>
                            <p>These browsers and devices are currently signed in to your account. Remove any unauthorized devices.</p>
                            <ul>
                                <li>Brave on Mac OS X - Ninh Binh, Vietnam - Current session <button>Remove</button></li>
                                <li>Brave on Mac OS X - Mexico City, Mexico - 1 month ago <button>Remove</button></li>
                            </ul>
                        </div>
                    </div>
                );
            case 'Billing':
                return <div>Billing Content</div>;
            case 'Notifications':
                return <div>Notifications Content</div>;
            case 'Apps':
                return <div>Apps Content</div>;
            case 'Branding':
                return <div>Branding Content</div>;
            case 'Refer a friend':
                return <div>Refer a friend Content</div>;
            case 'Sharing':
                return <div>Sharing Content</div>;
            default:
                return null;
        }
    };

    return (
        <div className="main-content">
            <div className="tabs">
                <button onClick={() => setActiveTab('General')}>General</button>
                <button onClick={() => setActiveTab('Security')}>Security</button>
                <button onClick={() => setActiveTab('Billing')}>Billing</button>
                <button onClick={() => setActiveTab('Notifications')}>Notifications</button>
                <button onClick={() => setActiveTab('Apps')}>Apps</button>
                <button onClick={() => setActiveTab('Branding')}>Branding</button>
                <button onClick={() => setActiveTab('Refer a friend')}>Refer a friend</button>
                <button onClick={() => setActiveTab('Sharing')}>Sharing</button>
            </div>
            <div className="content">
                {renderContent()}
            </div>
        </div>
    );
};

export default MainContent;
