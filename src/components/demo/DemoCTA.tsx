
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DemoCTA = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Convaincu ? Lancez-vous dès maintenant !
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Rejoignez plus de 10,000 entreprises qui utilisent déjà nos solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8">
                Commencer gratuitement
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/panier">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 px-8">
                Voir mon panier
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoCTA;
