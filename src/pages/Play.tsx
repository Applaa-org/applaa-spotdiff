import { useState } from 'react';
import { levels, Level } from '@/data/levels';
import LevelSelect from '@/components/LevelSelect';
import GameBoard from '@/components/GameBoard';

export default function Play() {
  const [selectedLevel, setSelectedLevel] = useState<Level | null>(null);
  const [completedLevels, setCompletedLevels] = useState<number[]>([]);

  const handleLevelSelect = (level: Level) => {
    setSelectedLevel(level);
  };

  const handleLevelComplete = (score: number) => {
    if (selectedLevel && !completedLevels.includes(selectedLevel.id)) {
      setCompletedLevels([...completedLevels, selectedLevel.id]);
    }
    setSelectedLevel(null);
  };

  const handleBackToLevels = () => {
    setSelectedLevel(null);
  };

  if (selectedLevel) {
    return (
      <GameBoard 
        level={selectedLevel} 
        onLevelComplete={handleLevelComplete}
        onBack={handleBackToLevels}
      />
    );
  }

  return (
    <LevelSelect 
      onLevelSelect={handleLevelSelect}
    />
  );
}