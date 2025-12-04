<<<<<<< HEAD
import React from "react";

const Support = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 bg-white rounded-lg shadow-lg mt-12">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
        Support
      </h1>
      <p className="text-gray-700 text-lg mb-10 text-center">
        Vous avez une question, un souci technique ou besoin d'aide ? Notre équipe est là pour vous accompagner.
      </p>
      <div className="space-y-8">
        <div className="flex items-center space-x-4 bg-blue-50 p-6 rounded-md shadow-sm hover:shadow-md transition-shadow cursor-default">
          <span className="text-3xl">📧</span>
          <div>
            <h2 className="text-xl font-semibold text-blue-700">Email</h2>
            <p className="text-gray-700 mt-1">support@cyna.fr</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 bg-green-50 p-6 rounded-md shadow-sm hover:shadow-md transition-shadow cursor-default">
          <span className="text-3xl">📞</span>
          <div>
            <h2 className="text-xl font-semibold text-green-700">Téléphone</h2>
            <p className="text-gray-700 mt-1">+33 1 23 45 67 89</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 bg-yellow-50 p-6 rounded-md shadow-sm hover:shadow-md transition-shadow cursor-default">
          <span className="text-3xl">💬</span>
          <div>
            <h2 className="text-xl font-semibold text-yellow-700">Chat en direct</h2>
            <p className="text-gray-700 mt-1">Disponible du lundi au vendredi, de 9h à 17h</p>
          </div>
        </div>
      </div>
=======

import { useState } from 'react';
import { Search, MessageCircle, Book, Video, Phone, Mail, Clock, CheckCircle, ArrowRight, HelpCircle, FileText, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Support = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const supportOptions = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Chat en Direct",
      description: "Obtenez une aide immédiate via notre chat",
      availability: "24/7",
      color: "blue"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Support Téléphonique",
      description: "Parlez directement à nos experts",
      availability: "Lun-Ven 9h-18h",
      color: "green"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Support Email",
      description: "Envoyez-nous vos questions détaillées",
      availability: "Réponse sous 2h",
      color: "purple"
    }
  ];

  const faqItems = [
    {
      question: "Comment puis-je commencer mon essai gratuit ?",
      answer: "Créez un compte gratuit et choisissez le produit qui vous intéresse. Vous aurez accès à toutes les fonctionnalités pendant 14 jours."
    },
    {
      question: "Puis-je changer de plan à tout moment ?",
      answer: "Oui, vous pouvez upgrader ou downgrader votre plan à tout moment depuis votre espace client."
    },
    {
      question: "Vos solutions sont-elles sécurisées ?",
      answer: "Absolument. Nous utilisons un chiffrement AES-256 et respectons les normes de sécurité les plus strictes."
    },
    {
      question: "Proposez-vous une formation pour nos équipes ?",
      answer: "Oui, nous offrons des sessions de formation personnalisées pour faciliter l'adoption par vos équipes."
    }
  ];

  const resources = [
    {
      icon: <Book className="w-6 h-6" />,
      title: "Documentation",
      description: "Guides complets et tutoriels détaillés",
      link: "#"
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Tutoriels Vidéo",
      description: "Apprenez étape par étape avec nos vidéos",
      link: "#"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Articles de Blog",
      description: "Conseils et bonnes pratiques",
      link: "#"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Communauté",
      description: "Échangez avec d'autres utilisateurs",
      link: "#"
    }
  ];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactForm);
    // Ici vous pourriez envoyer les données à votre API
    alert('Votre message a été envoyé ! Nous vous répondrons rapidement.');
    setContactForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Centre de Support CYNA
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Nous sommes là pour vous aider à tirer le meilleur parti de nos solutions
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <Input
                type="text"
                placeholder="Rechercher dans notre base de connaissances..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-3 text-lg bg-white text-gray-900"
              />
              <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comment pouvons-nous vous aider ?
            </h2>
            <p className="text-xl text-gray-600">
              Choisissez le canal de support qui vous convient le mieux
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {supportOptions.map((option, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 bg-${option.color}-100 rounded-full flex items-center justify-center mx-auto mb-4 text-${option.color}-600`}>
                    {option.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                  <p className="text-gray-600 mb-4">{option.description}</p>
                  <div className="flex items-center justify-center text-sm text-gray-500 mb-4">
                    <Clock className="w-4 h-4 mr-1" />
                    {option.availability}
                  </div>
                  <Button className={`bg-${option.color}-600 hover:bg-${option.color}-700`}>
                    Contacter
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Questions Fréquentes
            </h2>
            <p className="text-xl text-gray-600">
              Trouvez rapidement les réponses à vos questions
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqItems.map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <HelpCircle className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
                      <p className="text-gray-600">{item.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ressources Utiles
            </h2>
            <p className="text-xl text-gray-600">
              Explorez nos ressources pour maîtriser nos solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {resources.map((resource, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4 text-gray-600">
                    {resource.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{resource.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                  <div className="flex items-center text-blue-600 text-sm font-medium">
                    Explorer
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Contactez Notre Équipe
              </h2>
              <p className="text-xl text-gray-600">
                Une question spécifique ? Envoyez-nous un message
              </p>
            </div>

            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nom complet
                      </label>
                      <Input
                        type="text"
                        required
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <Input
                        type="email"
                        required
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Sujet
                    </label>
                    <Input
                      type="text"
                      required
                      value={contactForm.subject}
                      onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                      placeholder="Sujet de votre message"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      required
                      rows={5}
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      placeholder="Décrivez votre question ou problème..."
                      className="resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    Envoyer le Message
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
>>>>>>> 0a9517b7038758ffe6fa309d9e871b5fc5a88975
    </div>
  );
};

<<<<<<< HEAD
export default Support;
=======
export default Support;
>>>>>>> 0a9517b7038758ffe6fa309d9e871b5fc5a88975
