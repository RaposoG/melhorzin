import { Developer } from '../types';
import { X } from 'lucide-react';

interface DeveloperModalProps {
  developer: Developer;
  onClose: () => void;
}

export function DeveloperModal({ developer, onClose }: DeveloperModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
      <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-2xl font-bold">{developer.name}</h2>
            <p className="text-gray-600">{developer.role}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>
        
        <img
          src={developer.image}
          alt={developer.name}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        
        <a
          href={developer.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-indigo-600 text-white text-center py-2 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          View Profile
        </a>
      </div>
    </div>
  );
}