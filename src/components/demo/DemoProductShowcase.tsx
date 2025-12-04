
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play, CheckCircle, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { mockProducts } from '@/data/mockProducts';
import { useCart } from '@/context/CartContext';

const DemoProductShowcase = () => {
  const [selectedProduct, setSelectedProduct] = useState(mockProducts[0]);
  const { addItem } = useCart();

  const handleAddToCart = (product: typeof mockProducts[0]) => {
    addItem(product);
  };

  return (
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
  );
};

export default DemoProductShowcase;
