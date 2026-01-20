import { levels } from '@/data/levels';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Trophy } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LevelSelectProps {
  onLevelSelect: (level: any) => void;
}

export default function LevelSelect({ onLevelSelect }: LevelSelectProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800 border-green-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Hard': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Choose Your Challenge</h1>
          <p className="text-lg text-gray-600">Select a level to start finding differences!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {levels.map((level) => (
            <Card key={level.id} className="hover:shadow-xl transition-shadow duration-300 cursor-pointer group">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl text-gray-800 group-hover:text-purple-600 transition-colors">
                    {level.title}
                  </CardTitle>
                  <Badge className={getDifficultyColor(level.difficulty)}>
                    {level.difficulty}
                  </Badge>
                </div>
                <CardDescription className="text-gray-600">
                  Find all {level.differences.length} hidden differences
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative overflow-hidden rounded-lg">
                    <img 
                      src={level.originalImage} 
                      alt="Original"
                      className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-1 left-1 bg-black/50 text-white text-xs px-2 py-1 rounded">
                      Original
                    </div>
                  </div>
                  <div className="relative overflow-hidden rounded-lg">
                    <img 
                      src={level.modifiedImage} 
                      alt="Modified"
                      className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-1 left-1 bg-black/50 text-white text-xs px-2 py-1 rounded">
                      Modified
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Clock size={16} />
                    <span>{level.timeLimit}s</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Trophy size={16} />
                    <span>{level.differences.length * 100} pts</span>
                  </div>
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium"
                  onClick={() => onLevelSelect(level)}
                >
                  Play Level
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white/80 backdrop-blur rounded-xl p-6 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">How to Play</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
              <div className="space-y-2">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold">
                  1
                </div>
                <h3 className="font-semibold text-gray-800">Compare Images</h3>
                <p className="text-sm text-gray-600">Look carefully at both side-by-side images</p>
              </div>
              <div className="space-y-2">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold">
                  2
                </div>
                <h3 className="font-semibold text-gray-800">Tap Differences</h3>
                <p className="text-sm text-gray-600">Click on areas where you spot differences</p>
              </div>
              <div className="space-y-2">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold">
                  3
                </div>
                <h3 className="font-semibold text-gray-800">Complete Level</h3>
                <p className="text-sm text-gray-600">Find all differences before time runs out</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}