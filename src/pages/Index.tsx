import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Gamepad2, Trophy, Clock, Eye, Zap, Star } from 'lucide-react';
import { MadeWithApplaa } from '@/components/made-with-applaa';

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Gamepad2 className="text-white" size={40} />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              SpotDiff
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Challenge your eyes and mind with our engaging spot-the-difference game!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 text-lg font-semibold"
                asChild
              >
                <Link to="/play">Start Playing</Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-3 text-lg font-semibold"
                asChild
              >
                <Link to="/leaderboard">View Leaderboard</Link>
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="secondary" className="text-sm">Free to Play</Badge>
              <Badge variant="secondary" className="text-sm">No Downloads</Badge>
              <Badge variant="secondary" className="text-sm">Zoom Friendly</Badge>
              <Badge variant="secondary" className="text-sm">Multiple Levels</Badge>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Play SpotDiff?</h2>
            <p className="text-lg text-gray-600">Fun, challenging, and perfect for all ages!</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Eye className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                <CardTitle>Train Your Eyes</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Improve your attention to detail and visual perception skills
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Clock className="w-12 h-12 text-pink-500 mx-auto mb-4" />
                <CardTitle>Time Challenges</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Race against the clock to find all differences and earn bonus points
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <CardTitle>Multiple Levels</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  From easy to hard, there's a perfect challenge waiting for you
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Game Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Game Features</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">6+</div>
                <div className="text-sm text-gray-600">Unique Levels</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-600 mb-2">3</div>
                <div className="text-sm text-gray-600">Difficulty Modes</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">∞</div>
                <div className="text-sm text-gray-600">Replay Value</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                <div className="text-sm text-gray-600">Free to Play</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Challenge Yourself?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Jump in and start spotting those differences. It's fun, it's free, and it's addictive!
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 text-lg font-semibold"
              asChild
            >
              <Link to="/play">Play Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer with Disclaimer */}
      <footer className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <Star className="text-yellow-500" size={20} />
              <span className="text-lg font-semibold text-gray-800">SpotDiff</span>
            </div>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
              <strong className="text-gray-800">Disclaimer:</strong> This game is created for entertainment purposes only. 
              Images are randomly generated and any similarities to real persons, places, or objects are purely coincidental. 
              Play responsibly and have fun!
            </p>
            <div className="border-t border-gray-200 pt-4">
              <MadeWithApplaa />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}