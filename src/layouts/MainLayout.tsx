
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import SettingsPanel from '../components/SettingsPanel';

const MainLayout: React.FC = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
        <SettingsPanel />
      </div>
    </div>
  );
};

export default MainLayout;
