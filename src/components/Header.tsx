
import React from 'react';
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  return (
    <header className="border-b border-border flex items-center justify-between px-4 py-2 h-14">
      <div className="font-bold text-xl text-primary">AI Stream</div>
      <div className="flex items-center space-x-3">
      </div>
    </header>
  );
};

export default Header;
