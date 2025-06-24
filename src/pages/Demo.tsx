
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, CheckCircle, Star, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { mockProducts } from '@/data/mockProducts';
import { useCart } from '@/context/CartContext';

const Demo = () => {
  const [selectedProduct, setSelectedProduct] = useState(mockProducts[0]);
  const { addItem } = useCart();

  const handleAddToCart = (product: typeof mockProducts[0]) => {
    addItem(product);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
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

      {/* Video Demo Section */}
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
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <div className="text-center text-white">
                  <Video className="w-20 h-20 mx-auto mb-4 opacity-50" />
                  <h3 className="text-2xl font-bold mb-2">Présentation CYNA</h3>
                  <p className="text-gray-300 mb-6">
                    Découvrez comment nos solutions peuvent transformer votre entreprise
                  </p>
                  <Button 
                    size="lg" 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                  >
                    <Play className="w-6 h-6 mr-2" />
                    Regarder la vidéo
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
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

      {/* Product Showcase */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nos Solutions Phares
            </h2>
            <p className="text-xl text-gray-600">
              Testez nos produits les plus populaires
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Product List */}
            <div className="space-y-4">
              {mockProducts.slice(0, 4).map((product) => (
                <Card 
                  key={product.id}
                  className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                    selectedProduct.id === product.id ? 'ring-2 ring-blue-500 shadow-lg' : ''
                  }`}
                  onClick={() => setSelectedProduct(product)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{product.name}</h3>
                        <p className="text-gray-600 text-sm">{product.description}</p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-2xl font-bold text-blue-600">
                            {product.price}€/mois
                          </span>
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                            ))}
                            <span className="ml-1 text-sm text-gray-500">(4.9)</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Product Demo */}
            <div className="lg:sticky lg:top-8">
              <Card className="h-fit">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-2xl">{selectedProduct.name}</CardTitle>
                      <CardDescription className="text-lg mt-2">
                        {selectedProduct.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Product Image */}
                    <div className="relative">
                      <img 
                        src={selectedProduct.image}
                        alt={selectedProduct.name}
                        className="w-full h-48 rounded-lg object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg flex items-center justify-center">
                        <Button 
                          size="lg"
                          className="bg-white text-gray-900 hover:bg-gray-100"
                        >
                          <Play className="w-5 h-5 mr-2" />
                          Voir la démo
                        </Button>
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="font-semibold mb-3">Fonctionnalités clés :</h4>
                      <ul className="space-y-2">
                        {selectedProduct.features.map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pricing & CTA */}
                    <div className="border-t pt-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <span className="text-3xl font-bold text-gray-900">
                            {selectedProduct.price}€
                          </span>
                          <span className="text-gray-600">/mois</span>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-500">14 jours gratuits</div>
                          <div className="text-sm text-green-600 font-medium">Sans engagement</div>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <Button 
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                          onClick={() => handleAddToCart(selectedProduct)}
                        >
                          Commencer l'essai gratuit
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                        <Link to="/register" className="block">
                          <Button variant="outline" className="w-full">
                            Créer un compte
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
    </div>
  );
};

export default Demo;
