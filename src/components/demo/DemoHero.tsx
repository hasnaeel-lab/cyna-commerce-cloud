
import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DemoHero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Découvrez CYNA en Action
          </h1>
          <p className="text-xl mb-8 text-blue-100">
            Explorez nos solutions SaaS avec notre démo interactive
          </p>
          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 flex items-center gap-2"
            >
              <Play className="w-5 h-5" />
              Lancer la démo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoHero;
