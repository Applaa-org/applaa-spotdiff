import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Medal, Award } from 'lucide-react';

interface LeaderboardEntry {
  rank: number;
  name: string;
  score: number;
  level: string;
  time: string;
  accuracy: string;
}

const mockLeaderboard: LeaderboardEntry[] = [
  { rank: 1, name: "Player One", score: 2850, level: "Mountain View", time: "0:45", accuracy: "100%" },
  { rank: 2, name: "SpotMaster", score: 2720, level: "Desert Landscape", time: "0:52", accuracy: "95%" },
  { rank: 3, name: "EyeSharp", score: 2680, level: "City Street", time: "1:02", accuracy: "92%" },
  { rank: 4, name: "QuickFinder", score: 2550, level: "Forest Path", time: "1:15", accuracy: "88%" },
  { rank: 5, name: "DifferencePro", score: 2420, level: "Beach Scene", time: "1:28", accuracy: "85%" },
  { rank: 6, name: "PixelHunter", score: 2380, level: "Ocean Sunset", time: "1:35", accuracy: "82%" },
  { rank: 7, name: "SharpEye", score: 2250, level: "Mountain View", time: "1:42", accuracy: "78%" },
  { rank: 8, name: "DetailDetector", score: 2120, level: "City Street", time: "1:55", accuracy: "75%" },
];

export default function Leaderboard() {
  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1: return <Trophy className="w-6 h-6 text-yellow-500" />;
      case 2: return <Medal className="w-6 h-6 text-gray-400" />;
      case 3: return <Award className="w-6 h-6 text-orange-600" />;
      default: return <span className="w-6 h-6 flex items-center justify-center text-sm font-bold text-gray-600">{rank}</span>;
    }
  };

  const getRankBadgeColor = (rank: number) => {
    switch (rank) {
      case 1: return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case 2: return "bg-gray-100 text-gray-800 border-gray-200";
      case 3: return "bg-orange-100 text-orange-800 border-orange-200";
      default: return "bg-gray-50 text-gray-700 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Leaderboard</h1>
          <p className="text-lg text-gray-600">Top players and their amazing achievements!</p>
        </div>

        <div className="space-y-4">
          {mockLeaderboard.map((entry) => (
            <Card key={entry.rank} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {getRankIcon(entry.rank)}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{entry.name}</h3>
                      <p className="text-sm text-gray-600">Completed: {entry.level}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">{entry.score}</div>
                      <div className="text-xs text-gray-500">Score</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="text-lg font-semibold text-gray-700">{entry.time}</div>
                      <div className="text-xs text-gray-500">Time</div>
                    </div>
                    
                    <Badge className={getRankBadgeColor(entry.rank)}>
                      {entry.accuracy} Accuracy
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="bg-white/80 backdrop-blur max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-xl text-gray-800">How Scores are Calculated</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-left text-gray-600">
              <div className="flex items-center justify-between">
                <span>Base Points (per difference)</span>
                <span className="font-semibold">100 points</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Time Bonus</span>
                <span className="font-semibold">+1 point per second remaining</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Hint Penalty</span>
                <span className="font-semibold">-50 points per hint used</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Accuracy Bonus</span>
                <span className="font-semibold">+10% accuracy = +100 points</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}