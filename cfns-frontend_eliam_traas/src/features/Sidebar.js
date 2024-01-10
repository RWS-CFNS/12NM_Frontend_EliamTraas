// Sidebar.js
import React, { useState } from 'react';
import { Menu, MenuItem, SidebarContent, SidebarFooter, SidebarHeader } from 'react-pro-sidebar';
import { Home as HomeIcon } from '@mui/icons-material';
import './Sidebar.css';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const handleToggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`custom-sidebar ${collapsed ? 'collapsed' : ''}`}>
      <SidebarHeader>
        {/* Header content */}
      </SidebarHeader>
      <Menu iconShape="circle">
        <MenuItem icon={<HomeIcon />}>Home</MenuItem>
        {/* Add more menu items as needed */}
      </Menu>
      <SidebarFooter>
        {/* Footer content */}
      </SidebarFooter>
      <button onClick={handleToggleSidebar} className="toggle-button">
        Toggle Sidebar
      </button>
    </div>
  );
};

export default Sidebar;
