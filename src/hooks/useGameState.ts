import { useState, useEffect, useCallback } from 'react';
import { Level, Difference } from '@/data/levels';

export interface GameState {
  currentLevel: Level | null;
  foundDifferences: number[];
  score: number;
  timeRemaining: number;
  isPlaying: boolean;
  isComplete: boolean;
  showHint: boolean;
  hintsUsed: number;
}

export function useGameState() {
  const [gameState, setGameState] = useState<GameState>({
    currentLevel: null,
    foundDifferences: [],
    score: 0,
    timeRemaining: 0,
    isPlaying: false,
    isComplete: false,
    showHint: false,
    hintsUsed: 0
  });

  const startLevel = useCallback((level: Level) => {
    setGameState({
      currentLevel: level,
      foundDifferences: [],
      score: 0,
      timeRemaining: level.timeLimit || 120,
      isPlaying: true,
      isComplete: false,
      showHint: false,
      hintsUsed: 0
    });
  }, []);

  const checkDifference = useCallback((x: number, y: number) => {
    if (!gameState.currentLevel || !gameState.isPlaying) return null;

    const level = gameState.currentLevel;
    
    for (const diff of level.differences) {
      if (gameState.foundDifferences.includes(diff.id)) continue;
      
      const distance = Math.sqrt(
        Math.pow((x - diff.x), 2) + Math.pow((y - diff.y), 2)
      );
      
      if (distance <= diff.radius) {
        return diff;
      }
    }
    
    return null;
  }, [gameState.currentLevel, gameState.foundDifferences, gameState.isPlaying]);

  const markDifferenceFound = useCallback((differenceId: number) => {
    setGameState(prev => {
      if (!prev.currentLevel) return prev;
      
      const newFoundDifferences = [...prev.foundDifferences, differenceId];
      const totalDifferences = prev.currentLevel.differences.length;
      const isComplete = newFoundDifferences.length === totalDifferences;
      
      return {
        ...prev,
        foundDifferences: newFoundDifferences,
        score: prev.score + 100,
        isComplete,
        isPlaying: !isComplete
      };
    });
  }, []);

  const useHint = useCallback(() => {
    if (!gameState.currentLevel || !gameState.isPlaying) return;
    
    const unfoundDifferences = gameState.currentLevel.differences.filter(
      diff => !gameState.foundDifferences.includes(diff.id)
    );
    
    if (unfoundDifferences.length > 0) {
      const randomDiff = unfoundDifferences[Math.floor(Math.random() * unfoundDifferences.length)];
      setGameState(prev => ({
        ...prev,
        showHint: true,
        hintsUsed: prev.hintsUsed + 1,
        score: Math.max(0, prev.score - 50)
      }));
      
      setTimeout(() => {
        setGameState(prev => ({ ...prev, showHint: false }));
      }, 2000);
    }
  }, [gameState.currentLevel, gameState.foundDifferences, gameState.isPlaying]);

  const resetGame = useCallback(() => {
    setGameState({
      currentLevel: null,
      foundDifferences: [],
      score: 0,
      timeRemaining: 0,
      isPlaying: false,
      isComplete: false,
      showHint: false,
      hintsUsed: 0
    });
  }, []);

  // Timer effect
  useEffect(() => {
    if (!gameState.isPlaying || gameState.timeRemaining <= 0) {
      if (gameState.timeRemaining <= 0 && gameState.isPlaying) {
        setGameState(prev => ({ ...prev, isPlaying: false }));
      }
      return;
    }

    const timer = setInterval(() => {
      setGameState(prev => ({
        ...prev,
        timeRemaining: prev.timeRemaining - 1
      }));
    }, 1000);

    return () => clearInterval(timer);
  }, [gameState.isPlaying, gameState.timeRemaining]);

  return {
    gameState,
    startLevel,
    checkDifference,
    markDifferenceFound,
    useHint,
    resetGame
  };
}