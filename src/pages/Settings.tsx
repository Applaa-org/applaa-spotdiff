import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Volume2, VolumeX, Eye, Clock, Trophy, RotateCcw } from 'lucide-react';
import { useState } from 'react';

export default function Settings() {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [showTimer, setShowTimer] = useState(true);
  const [showHints, setShowHints] = useState(true);
  const [showScore, setShowScore] = useState(true);

  const handleResetProgress = () => {
    if (confirm('Are you sure you want to reset all your progress? This action cannot be undone.')) {
      // Reset logic here
      localStorage.clear();
      alert('Progress reset successfully!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Settings</h1>
          <p className="text-lg text-gray-600">Customize your SpotDiff experience</p>
        </div>

        <div className="space-y-6">
          {/* Game Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Trophy className="text-purple-500" />
                <span>Game Settings</span>
              </CardTitle>
              <CardDescription>
                Configure gameplay preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Clock className="text-gray-600" size={20} />
                  <div>
                    <h4 className="font-medium text-gray-800">Show Timer</h4>
                    <p className="text-sm text-gray-600">Display countdown timer during gameplay</p>
                  </div>
                </div>
                <Switch 
                  checked={showTimer} 
                  onCheckedChange={setShowTimer}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Eye className="text-gray-600" size={20} />
                  <div>
                    <h4 className="font-medium text-gray-800">Enable Hints</h4>
                    <p className="text-sm text-gray-600">Allow hint usage during levels</p>
                  </div>
                </div>
                <Switch 
                  checked={showHints} 
                  onCheckedChange={setShowHints}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Trophy className="text-gray-600" size={20} />
                  <div>
                    <h4 className="font-medium text-gray-800">Show Score</h4>
                    <p className="text-sm text-gray-600">Display real-time score updates</p>
                  </div>
                </div>
                <Switch 
                  checked={showScore} 
                  onCheckedChange={setShowScore}
                />
              </div>
            </CardContent>
          </Card>

          {/* Audio Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                {soundEnabled ? <Volume2 className="text-purple-500" /> : <VolumeX className="text-gray-500" />}
                <span>Audio Settings</span>
              </CardTitle>
              <CardDescription>
                Configure sound effects and notifications
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {soundEnabled ? <Volume2 className="text-gray-600" size={20} /> : <VolumeX className="text-gray-600" size={20} />}
                  <div>
                    <h4 className="font-medium text-gray-800">Sound Effects</h4>
                    <p className="text-sm text-gray-600">Enable click sounds and completion effects</p>
                  </div>
                </div>
                <Switch 
                  checked={soundEnabled} 
                  onCheckedChange={setSoundEnabled}
                />
              </div>
            </CardContent>
          </Card>

          {/* Display Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Eye className="text-purple-500" />
                <span>Display Settings</span>
              </CardTitle>
              <CardDescription>
                Adjust visual preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <h4 className="font-medium text-gray-800">Difficulty Preference</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="cursor-pointer hover:bg-green-100 hover:border-green-300">Easy</Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-yellow-100 hover:border-yellow-300">Medium</Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-red-100 hover:border-red-300">Hard</Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-purple-100 hover:border-purple-300">All Levels</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Management */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <RotateCcw className="text-purple-500" />
                <span>Data Management</span>
              </CardTitle>
              <CardDescription>
                Manage your game data and progress
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <h4 className="font-medium text-gray-800">Reset Progress</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Clear all saved progress, scores, and achievements. This action cannot be undone.
                </p>
                <Button 
                  variant="destructive" 
                  onClick={handleResetProgress}
                  className="w-full sm:w-auto"
                >
                  <RotateCcw size={16} className="mr-2" />
                  Reset All Progress
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* About */}
          <Card>
            <CardHeader>
              <CardTitle>About SpotDiff</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-gray-600">
                <p className="mb-2">
                  <strong>Version:</strong> 1.0.0
                </p>
                <p className="mb-2">
                  <strong>Purpose:</strong> Find differences between images for fun and entertainment
                </p>
                <p className="mb-2">
                  <strong>Features:</strong> Zoom-friendly images, multiple difficulty levels, timed challenges
                </p>
                <p className="text-sm text-gray-500 italic">
                  Disclaimer: This game is for entertainment purposes only. Play responsibly!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}