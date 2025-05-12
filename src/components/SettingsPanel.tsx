
import React, { useState } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface OptionCardProps {
  title: string;
  isSelected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const OptionCard: React.FC<OptionCardProps> = ({ title, isSelected, onClick, children }) => {
  return (
    <div 
      className={`option-card ${isSelected ? 'active' : ''}`}
      onClick={onClick}
    >
      {children}
      <span className="mt-2 text-sm">{title}</span>
    </div>
  );
};

const SettingsPanel: React.FC = () => {
  const [selectedModel, setSelectedModel] = useState("flash");
  const [outputFormat, setOutputFormat] = useState("audio-text");
  const [voice, setVoice] = useState("puck");
  const [language, setLanguage] = useState("en-US");
  
  return (
    <div className="w-80 border-l border-border h-full p-4">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-medium">Run settings</h3>
        <button className="text-muted-foreground hover:text-foreground">
          <span className="sr-only">Close</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
      </div>

      <div className="space-y-6">
        {/* Model Selector */}
        <div>
          <Select value={selectedModel} onValueChange={setSelectedModel}>
            <SelectTrigger className="model-selector">
              <SelectValue placeholder="Flash 001" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="flash">Flash 001</SelectItem>
              <SelectItem value="pro">Pro 001</SelectItem>
              <SelectItem value="ultra">Ultra 001</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Output Format */}
        <div>
          <label className="block text-sm mb-2">Output format</label>
          <div className="grid grid-cols-2 gap-3">
            <OptionCard 
              title="Audio & Text" 
              isSelected={outputFormat === "audio-text"}
              onClick={() => setOutputFormat("audio-text")}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M17.5 5.5C19.3 5.5 20.5 6.1 20.5 8V16C20.5 17.9 19.3 18.5 17.5 18.5H6.5C4.7 18.5 3.5 17.9 3.5 16V8C3.5 6.1 4.7 5.5 6.5 5.5H17.5Z"></path><path d="M10 9L8 12H12L10 15"></path></svg>
            </OptionCard>
            <OptionCard 
              title="Text" 
              isSelected={outputFormat === "text"}
              onClick={() => setOutputFormat("text")}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M4 7V4h16v3"></path><path d="M9 20h6"></path><path d="M12 4v16"></path></svg>
            </OptionCard>
          </div>
        </div>

        {/* Voice Selector */}
        <div>
          <label className="block text-sm mb-2">Voice</label>
          <Select value={voice} onValueChange={setVoice}>
            <SelectTrigger className="model-selector">
              <SelectValue placeholder="Puck" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="puck">Puck</SelectItem>
              <SelectItem value="nova">Nova</SelectItem>
              <SelectItem value="ember">Ember</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Language Selector */}
        <div>
          <label className="block text-sm mb-2">Language</label>
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger className="model-selector">
              <SelectValue placeholder="English (United States)" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en-US">English (United States)</SelectItem>
              <SelectItem value="en-GB">English (United Kingdom)</SelectItem>
              <SelectItem value="es-ES">Spanish</SelectItem>
              <SelectItem value="fr-FR">French</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;
