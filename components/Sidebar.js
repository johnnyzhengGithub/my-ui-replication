// components/Sidebar.js
import React from 'react';
import { FaHome, FaFolder, FaLock, FaShareAlt, FaTrash, FaPaintBrush, FaBell, FaCog } from 'react-icons/fa';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="logo">
                <h1>Untitled UI</h1>
            </div>
            <nav className="nav">
                <ul>
                    <li><FaHome /> Home</li>
                    <li><FaFolder /> All files</li>
                    <li><FaLock /> Private files</li>
                    <li><FaShareAlt /> Shared with me</li>
                    <li><FaTrash /> Deleted files</li>
                    <li><FaPaintBrush /> Design</li>
                    <li><FaBell /> Notifications <span className="notification-count">8</span></li>
                    <li><FaCog /> Settings</li>
                </ul>
            </nav>
            <div className="storage">
                <div className="storage-bar">
                    <div className="storage-used" style={{ width: '92%' }}></div>
                </div>
                <div className="storage-info">
                    <span>9.2 GB of 10 GB used</span>
                    <button className="upgrade-btn">Upgrade</button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
