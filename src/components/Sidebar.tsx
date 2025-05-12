
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Play } from 'lucide-react';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 border-r border-border h-full flex flex-col">
      <div className="p-4">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            `flex items-center gap-3 p-2 rounded-md transition-colors sidebar-link ${isActive ? 'active' : ''}`
          }
        >
          <Play className="h-5 w-5" />
          <span>Stream</span>
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
