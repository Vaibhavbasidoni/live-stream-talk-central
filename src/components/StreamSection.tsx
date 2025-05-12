
import React, { useState } from 'react';
import { Talk, Mic, MicOff } from 'lucide-react';
import { Button } from '@/components/ui/button';

const StreamSection: React.FC = () => {
  const [isMicActive, setIsMicActive] = useState(false);
  
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <h2 className="text-4xl font-light text-primary mb-12">Talk to AI live</h2>
        
        <div className="w-full max-w-lg mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Type something"
              className="w-full bg-secondary border border-border rounded-full px-5 py-3 text-foreground"
            />
            <Button 
              size="sm"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full"
              variant="ghost"
            >
              Run
            </Button>
          </div>
        </div>
        
        <div className="flex gap-4">
          <button className="talk-button">
            <Talk className="w-5 h-5" />
            <span>Talk</span>
          </button>
          
          <button 
            className="talk-button"
            onClick={() => setIsMicActive(!isMicActive)}
          >
            {isMicActive ? (
              <MicOff className="w-5 h-5" />
            ) : (
              <Mic className="w-5 h-5" />
            )}
            <span>{isMicActive ? 'Stop' : 'Start'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StreamSection;
