import React, { useState } from 'react';
import { Galaxy } from './components/Galaxy';
import { DeveloperModal } from './components/DeveloperModal';
import { Developer } from './types';
import { developers } from './data/developers';
import { Code2 } from 'lucide-react';

function App() {
  const [selectedDeveloper, setSelectedDeveloper] = useState<Developer | null>(null);

  return (
    <div className="relative w-full h-screen bg-black">
      <div className="absolute inset-0">
        <Galaxy
          developers={developers}
          onDeveloperClick={(dev) => setSelectedDeveloper(dev)}
        />
      </div>
      
      <div className="absolute top-0 left-0 right-0 p-6 text-white z-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Code2 size={32} />
            <h1 className="text-2xl font-bold">Galaxy Dev Team</h1>
          </div>
          <p className="text-gray-300">
            Use mouse or touch to explore the galaxy:
            <br />
            <span className="text-sm">
              • Scroll to zoom in/out
              <br />
              • Drag to rotate
              <br />
              • Right-click to pan
            </span>
          </p>
        </div>
      </div>

      {selectedDeveloper && (
        <DeveloperModal
          developer={selectedDeveloper}
          onClose={() => setSelectedDeveloper(null)}
        />
      )}
    </div>
  );
}

export default App;