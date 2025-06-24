
import { Play, CheckCircle, Star, ArrowRight, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const DemoVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
    // Simulate video playing
    setTimeout(() => setIsPlaying(false), 3000);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Découvrez CYNA en 3 minutes
          </h2>
          <p className="text-xl text-gray-600">
            Une présentation complète de nos solutions SaaS
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-xl overflow-hidden shadow-2xl mb-8">
            <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
              <div className="text-center text-white">
                <Video className={`w-20 h-20 mx-auto mb-4 ${isPlaying ? 'animate-pulse' : 'opacity-50'}`} />
                <h3 className="text-2xl font-bold mb-2">Présentation CYNA</h3>
                <p className="text-gray-300 mb-6">
                  {isPlaying ? 'Lecture en cours...' : 'Découvrez comment nos solutions peuvent transformer votre entreprise'}
                </p>
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                  onClick={handlePlayClick}
                  disabled={isPlaying}
                >
                  <Play className="w-6 h-6 mr-2" />
                  {isPlaying ? 'Lecture...' : 'Regarder la vidéo'}
                </Button>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold mb-2">Installation Simple</h4>
              <p className="text-gray-600">Configuration en moins de 5 minutes</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Star className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-semibold mb-2">Interface Intuitive</h4>
              <p className="text-gray-600">Facile à utiliser pour tous vos équipes</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <ArrowRight className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-semibold mb-2">Résultats Immédiats</h4>
              <p className="text-gray-600">Gains de productivité dès le premier jour</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoVideo;
