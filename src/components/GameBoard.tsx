import { useState, useRef, useEffect } from 'react';
import { useGameState } from '@/hooks/useGameState';
import { Level } from '@/data/levels';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Card } from '@/components/ui/card';
import { Clock, Eye, Zap, RotateCcw } from 'lucide-react';
import { cn } from '@/lib/utils';

interface GameBoardProps {
  level: Level;
  onLevelComplete: (score: number) => void;
  onBack: () => void;
}

export default function GameBoard({ level, onLevelComplete, onBack }: GameBoardProps) {
  const { gameState, checkDifference, markDifferenceFound, useHint, resetGame } = useGameState();
  const [clickPosition, setClickPosition] = useState<{ x: number; y: number } | null>(null);
  const [showWrongClick, setShowWrongClick] = useState(false);
  const imageRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];
  const [imageScale, setImageScale] = useState(1);

  useEffect(() => {
    resetGame();
  }, [level, resetGame]);

  useEffect(() => {
    if (gameState.isComplete && gameState.currentLevel) {
      onLevelComplete(gameState.score);
    }
  }, [gameState.isComplete, gameState.score, gameState.currentLevel, onLevelComplete]);

  const handleImageClick = (event: React.MouseEvent<HTMLDivElement>, imageIndex: number) => {
    if (!gameState.isPlaying) return;

    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    setClickPosition({ x, y });
    setTimeout(() => setClickPosition(null), 500);

    const difference = checkDifference(x, y);
    if (difference) {
      markDifferenceFound(difference.id);
    } else {
      setShowWrongClick(true);
      setTimeout(() => setShowWrongClick(false), 300);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = gameState.currentLevel 
    ? (gameState.foundDifferences.length / gameState.currentLevel.differences.length) * 100 
    : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-4">
      <div className="container mx-auto max-w-7xl">
        {/* Game Header */}
        <div className="bg-white/90 backdrop-blur-xl rounded-xl shadow-lg p-4 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <Button variant="outline" onClick={onBack}>
                ← Back
              </Button>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">{level.title}</h2>
                <Badge variant={level.difficulty === 'Easy' ? 'default' : level.difficulty === 'Medium' ? 'secondary' : 'destructive'}>
                  {level.difficulty}
                </Badge>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Clock className="text-gray-600" size={20} />
                <span className={cn(
                  "font-mono font-bold text-lg",
                  gameState.timeRemaining <= 10 ? "text-red-600" : "text-gray-800"
                )}>
                  {formatTime(gameState.timeRemaining)}
                </span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Zap className="text-yellow-500" size={20} />
                <span className="font-bold text-lg text-gray-800">{gameState.score}</span>
              </div>
              
              <Button 
                variant="outline" 
                onClick={useHint}
                disabled={!gameState.isPlaying || gameState.hintsUsed >= 3}
              >
                <Eye size={16} className="mr-2" />
                Hint ({3 - gameState.hintsUsed})
              </Button>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span>Progress: {gameState.foundDifferences.length} / {level.differences.length} differences found</span>
              <span>Time Bonus: {gameState.timeRemaining > 0 ? `+${gameState.timeRemaining}` : '0'}</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>

        {/* Game Board */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {level.originalImage && level.modifiedImage && (
            <>
              <Card className="relative overflow-hidden shadow-xl">
                <div className="absolute top-2 left-2 z-10 bg-white/90 backdrop-blur px-3 py-1 rounded-full">
                  <span className="text-sm font-medium text-gray-700">Original</span>
                </div>
                <div 
                  ref={imageRefs[0]}
                  className="relative cursor-crosshair select-none"
                  onClick={(e) => handleImageClick(e, 0)}
                  style={{ paddingBottom: '66.67%' }} // 3:2 aspect ratio
                >
                  <img 
                    src={level.originalImage} 
                    alt="Original"
                    className="absolute inset-0 w-full h-full object-cover"
                    draggable={false}
                  />
                  
                  {/* Found differences overlay */}
                  {gameState.foundDifferences.map(diffId => {
                    const diff = level.differences.find(d => d.id === diffId);
                    if (!diff) return null;
                    return (
                      <div
                        key={diffId}
                        className="absolute border-4 border-green-500 rounded-full animate-pulse"
                        style={{
                          left: `${diff.x}%`,
                          top: `${diff.y}%`,
                          width: `${diff.radius * 2}%`,
                          height: `${diff.radius * 2}%`,
                          transform: 'translate(-50%, -50%)'
                        }}
                      />
                    );
                  })}
                  
                  {/* Click feedback */}
                  {clickPosition && (
                    <div
                      className="absolute w-8 h-8 border-2 border-blue-500 rounded-full animate-ping"
                      style={{
                        left: `${clickPosition.x}%`,
                        top: `${clickPosition.y}%`,
                        transform: 'translate(-50%, -50%)'
                      }}
                    />
                  )}
                </div>
              </Card>

              <Card className="relative overflow-hidden shadow-xl">
                <div className="absolute top-2 left-2 z-10 bg-white/90 backdrop-blur px-3 py-1 rounded-full">
                  <span className="text-sm font-medium text-gray-700">Modified</span>
                </div>
                <div 
                  ref={imageRefs[1]}
                  className={cn(
                    "relative cursor-crosshair select-none",
                    showWrongClick && "animate-pulse bg-red-500/10"
                  )}
                  onClick={(e) => handleImageClick(e, 1)}
                  style={{ paddingBottom: '66.67%' }} // 3:2 aspect ratio
                >
                  <img 
                    src={level.modifiedImage} 
                    alt="Modified"
                    className="absolute inset-0 w-full h-full object-cover"
                    draggable={false}
                  />
                  
                  {/* Found differences overlay */}
                  {gameState.foundDifferences.map(diffId => {
                    const diff = level.differences.find(d => d.id === diffId);
                    if (!diff) return null;
                    return (
                      <div
                        key={diffId}
                        className="absolute border-4 border-green-500 rounded-full animate-pulse"
                        style={{
                          left: `${diff.x}%`,
                          top: `${diff.y}%`,
                          width: `${diff.radius * 2}%`,
                          height: `${diff.radius * 2}%`,
                          transform: 'translate(-50%, -50%)'
                        }}
                      />
                    );
                  })}
                  
                  {/* Hint overlay */}
                  {gameState.showHint && gameState.currentLevel && (
                    <>
                      {gameState.currentLevel.differences
                        .filter(diff => !gameState.foundDifferences.includes(diff.id))
                        .slice(0, 1)
                        .map(diff => (
                          <div
                            key={diff.id}
                            className="absolute border-4 border-yellow-400 rounded-full animate-bounce"
                            style={{
                              left: `${diff.x}%`,
                              top: `${diff.y}%`,
                              width: `${diff.radius * 2.5}%`,
                              height: `${diff.radius * 2.5}%`,
                              transform: 'translate(-50%, -50%)'
                            }}
                          />
                        ))}
                    </>
                  )}
                  
                  {/* Click feedback */}
                  {clickPosition && (
                    <div
                      className="absolute w-8 h-8 border-2 border-blue-500 rounded-full animate-ping"
                      style={{
                        left: `${clickPosition.x}%`,
                        top: `${clickPosition.y}%`,
                        transform: 'translate(-50%, -50%)'
                      }}
                    />
                  )}
                </div>
              </Card>
            </>
          )}
        </div>

        {/* Game Status Messages */}
        {!gameState.isPlaying && gameState.timeRemaining <= 0 && (
          <div className="mt-6 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg text-center">
            <p className="font-bold text-lg">Time's Up!</p>
            <p>You found {gameState.foundDifferences.length} out of {level.differences.length} differences.</p>
          </div>
        )}

        {gameState.isComplete && (
          <div className="mt-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg text-center">
            <p className="font-bold text-lg">🎉 Level Complete!</p>
            <p>Final Score: {gameState.score + gameState.timeRemaining}</p>
          </div>
        )}
      </div>
    </div>
  );
}