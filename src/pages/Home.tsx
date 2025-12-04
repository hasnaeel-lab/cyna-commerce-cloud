
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Zap, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Home = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6 text-blue-600" />,
      title: "Performance Optimale",
      description: "Solutions SaaS ultra-rapides et fiables pour votre entreprise"
    },
    {
      icon: <Shield className="w-6 h-6 text-green-600" />,
      title: "Sécurité Avancée",
      description: "Protection maximale de vos données avec chiffrement de bout en bout"
    },
    {
      icon: <Clock className="w-6 h-6 text-purple-600" />,
      title: "Support 24/7",
      description: "Assistance technique disponible à tout moment pour vous accompagner"
    }
  ];

  const solutions = [
    {
      title: "CRM Avancé",
      description: "Gérez vos relations clients avec intelligence",
      price: "29€/mois",
      features: ["Gestion des contacts", "Suivi des ventes", "Automatisation", "Rapports détaillés"],
      popular: false
    },
    {
      title: "Suite Productivité",
      description: "Optimisez la collaboration de vos équipes",
      price: "49€/mois",
      features: ["Gestion de projets", "Chat d'équipe", "Partage de fichiers", "Calendrier partagé"],
      popular: true
    },
    {
      title: "Analytics Pro",
      description: "Analysez vos performances en temps réel",
      price: "79€/mois",
      features: ["Tableaux de bord", "IA prédictive", "Alertes intelligentes", "API complète"],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Marie Dubois",
      company: "TechStart",
      content: "CYNA a transformé notre façon de travailler. L'efficacité de nos équipes a augmenté de 40%.",
      rating: 5
    },
    {
      name: "Pierre Martin",
      company: "Innovation Corp",
      content: "Un support client exceptionnel et des outils vraiment adaptés à nos besoins.",
      rating: 5
    },
    {
      name: "Sophie Laurent",
      company: "Digital Plus",
      content: "La migration vers CYNA s'est faite en douceur. Nous recommandons vivement !",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Transformez votre entreprise avec 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> CYNA</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Découvrez notre suite complète de solutions SaaS conçues pour accélérer votre croissance 
              et optimiser vos performances business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/register">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg">
                  Commencer gratuitement
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/demo">
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                  Voir la démo
                </Button>
              </Link>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              ✅ 14 jours d'essai gratuit • ✅ Sans engagement • ✅ Support inclus
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pourquoi choisir CYNA ?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nos solutions sont conçues pour répondre aux défis modernes de votre entreprise
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gray-50 rounded-full">
                      {feature.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Solutions SaaS
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choisissez la solution qui correspond le mieux à vos besoins
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {solutions.map((solution, index) => (
              <Card key={index} className={`relative hover:shadow-xl transition-all duration-300 ${solution.popular ? 'ring-2 ring-blue-500 scale-105' : ''}`}>
                {solution.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Plus populaire
                    </span>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{solution.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {solution.description}
                  </CardDescription>
                  <div className="text-3xl font-bold text-gray-900 mt-4">
                    {solution.price}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${solution.popular ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' : ''}`}
                    variant={solution.popular ? 'default' : 'outline'}
                  >
                    Commencer l'essai
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ce que disent nos clients
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Découvrez pourquoi plus de 10,000 entreprises nous font confiance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Prêt à transformer votre entreprise ?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Rejoignez des milliers d'entreprises qui ont déjà fait le choix de CYNA pour leur croissance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
                  Commencer maintenant
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
                  Nous contacter
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
