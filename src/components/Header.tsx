import { Link } from '@tanstack/react-router';
import { Home, Gamepad2, Trophy, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-200/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Gamepad2 className="text-white" size={20} />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              SpotDiff
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors font-medium">
              <Home size={18} />
              <span>Home</span>
            </Link>
            <Link to="/play" className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors font-medium">
              <Gamepad2 size={18} />
              <span>Play</span>
            </Link>
            <Link to="/leaderboard" className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors font-medium">
              <Trophy size={18} />
              <span>Leaderboard</span>
            </Link>
            <Link to="/settings" className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors font-medium">
              <Settings size={18} />
              <span>Settings</span>
            </Link>
          </nav>

          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" asChild>
              <Link to="/play">Start Playing</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}