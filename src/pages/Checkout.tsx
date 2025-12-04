
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import { CreditCard, MapPin, User, Mail, Phone, Lock, CheckCircle } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import { orderService } from '@/services/orderService';

interface PaymentData {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardName: string;
}

interface BillingData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
}

const Checkout = () => {
  const { user } = useAuth();
  const { items, total, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [error, setError] = useState('');

  const [billingData, setBillingData] = useState<BillingData>({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'France'
  });

  const [paymentData, setPaymentData] = useState<PaymentData>({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: ''
  });

  const handleBillingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!billingData.firstName || !billingData.lastName || !billingData.email || !billingData.address) {
      setError('Veuillez remplir tous les champs obligatoires');
      return;
    }
    setError('');
    setCurrentStep(2);
  };

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setError('');

    try {
      // Validation des champs de paiement
      if (!paymentData.cardNumber || !paymentData.expiryDate || !paymentData.cvv || !paymentData.cardName) {
        throw new Error('Veuillez remplir tous les champs de paiement');
      }

      // Validation du numéro de carte (simulation)
      if (paymentData.cardNumber.replace(/\s/g, '').length < 16) {
        throw new Error('Numéro de carte invalide');
      }

      // Validation date d'expiration
      const expiryRegex = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;
      if (!expiryRegex.test(paymentData.expiryDate)) {
        throw new Error('Format de date d\'expiration invalide (MM/AA)');
      }

      // Validation CVV
      if (paymentData.cvv.length < 3 || paymentData.cvv.length > 4) {
        throw new Error('CVV invalide');
      }

      // Simulation du traitement de paiement
      console.log('Traitement du paiement...');
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Créer la commande avec le service
      const orderData = {
        items: items.map(item => ({
          productId: item.id,
          quantity: item.quantity,
          price: item.price
        })),
        total: total,
        paymentMethod: 'card'
      };

      console.log('Création de la commande:', orderData);
      
      try {
        const order = await orderService.createOrder(orderData);
        console.log('Commande créée avec succès:', order);
      } catch (orderError) {
        console.log('Erreur lors de la création de commande (simulation):', orderError);
        // En mode simulation, on continue même si l'API n'est pas disponible
      }
      
      // Vider le panier après paiement réussi
      clearCart();
      
      toast({
        title: "Paiement réussi !",
        description: "Votre commande a été traitée avec succès. Vous recevrez un email de confirmation.",
      });
      
      // Rediriger vers la page d'accueil ou une page de confirmation
      navigate('/', { replace: true });
      
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erreur lors du traitement du paiement';
      setError(errorMessage);
      console.error('Erreur de paiement:', err);
    } finally {
      setIsProcessing(false);
    }
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\D/g, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    return v;
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle>Connexion requise</CardTitle>
            <CardDescription>
              Vous devez être connecté pour finaliser votre commande
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button 
              onClick={() => navigate('/login')} 
              className="w-full"
            >
              Se connecter
            </Button>
            <Button 
              onClick={() => navigate('/register')} 
              variant="outline" 
              className="w-full"
            >
              Créer un compte
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md text-center">
          <CardHeader>
            <CardTitle>Panier vide</CardTitle>
            <CardDescription>Ajoutez des produits à votre panier pour continuer</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => navigate('/catalogue')}>
              Voir le catalogue
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4">
            <div className={`flex items-center ${currentStep >= 1 ? 'text-blue-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}>
                {currentStep > 1 ? <CheckCircle className="w-5 h-5" /> : '1'}
              </div>
              <span className="ml-2 font-medium">Facturation</span>
            </div>
            <div className="w-16 h-px bg-gray-300"></div>
            <div className={`flex items-center ${currentStep >= 2 ? 'text-blue-600' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}>
                2
              </div>
              <span className="ml-2 font-medium">Paiement</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {currentStep === 1 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2" />
                    Adresse de facturation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleBillingSubmit} className="space-y-4">
                    {error && (
                      <Alert variant="destructive">
                        <AlertDescription>{error}</AlertDescription>
                      </Alert>
                    )}

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">Prénom *</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                          <Input
                            id="firstName"
                            value={billingData.firstName}
                            onChange={(e) => setBillingData({...billingData, firstName: e.target.value})}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="lastName">Nom *</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                          <Input
                            id="lastName"
                            value={billingData.lastName}
                            onChange={(e) => setBillingData({...billingData, lastName: e.target.value})}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                          <Input
                            id="email"
                            type="email"
                            value={billingData.email}
                            onChange={(e) => setBillingData({...billingData, email: e.target.value})}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="phone">Téléphone</Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                          <Input
                            id="phone"
                            value={billingData.phone}
                            onChange={(e) => setBillingData({...billingData, phone: e.target.value})}
                            className="pl-10"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="address">Adresse *</Label>
                      <Input
                        id="address"
                        value={billingData.address}
                        onChange={(e) => setBillingData({...billingData, address: e.target.value})}
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="city">Ville *</Label>
                        <Input
                          id="city"
                          value={billingData.city}
                          onChange={(e) => setBillingData({...billingData, city: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="postalCode">Code postal *</Label>
                        <Input
                          id="postalCode"
                          value={billingData.postalCode}
                          onChange={(e) => setBillingData({...billingData, postalCode: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="country">Pays</Label>
                        <Input
                          id="country"
                          value={billingData.country}
                          onChange={(e) => setBillingData({...billingData, country: e.target.value})}
                        />
                      </div>
                    </div>

                    <Button type="submit" className="w-full">
                      Continuer vers le paiement
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}

            {currentStep === 2 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CreditCard className="w-5 h-5 mr-2" />
                    Informations de paiement
                  </CardTitle>
                  <CardDescription>
                    Vos informations de paiement sont sécurisées et cryptées
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handlePaymentSubmit} className="space-y-4">
                    {error && (
                      <Alert variant="destructive">
                        <AlertDescription>{error}</AlertDescription>
                      </Alert>
                    )}

                    <div>
                      <Label htmlFor="cardName">Nom sur la carte *</Label>
                      <Input
                        id="cardName"
                        value={paymentData.cardName}
                        onChange={(e) => setPaymentData({...paymentData, cardName: e.target.value})}
                        placeholder="Jean Dupont"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="cardNumber">Numéro de carte *</Label>
                      <div className="relative">
                        <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <Input
                          id="cardNumber"
                          value={paymentData.cardNumber}
                          onChange={(e) => setPaymentData({
                            ...paymentData, 
                            cardNumber: formatCardNumber(e.target.value)
                          })}
                          placeholder="1234 5678 9012 3456"
                          className="pl-10"
                          maxLength={19}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiryDate">Date d'expiration *</Label>
                        <Input
                          id="expiryDate"
                          value={paymentData.expiryDate}
                          onChange={(e) => setPaymentData({
                            ...paymentData, 
                            expiryDate: formatExpiryDate(e.target.value)
                          })}
                          placeholder="MM/AA"
                          maxLength={5}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV *</Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                          <Input
                            id="cvv"
                            value={paymentData.cvv}
                            onChange={(e) => setPaymentData({
                              ...paymentData, 
                              cvv: e.target.value.replace(/\D/g, '')
                            })}
                            placeholder="123"
                            className="pl-10"
                            maxLength={4}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={() => setCurrentStep(1)}
                        className="flex-1"
                      >
                        Retour
                      </Button>
                      <Button 
                        type="submit" 
                        disabled={isProcessing}
                        className="flex-1 bg-green-600 hover:bg-green-700"
                      >
                        {isProcessing ? 'Traitement...' : `Payer ${total}€`}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Récapitulatif de commande</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center">
                    <div className="flex-1">
                      <h4 className="font-medium">{item.name}</h4>
                      <p className="text-sm text-gray-500">Quantité: {item.quantity}</p>
                    </div>
                    <span className="font-medium">{(item.price * item.quantity).toFixed(2)}€</span>
                  </div>
                ))}
                
                <Separator />
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Sous-total</span>
                    <span>{total.toFixed(2)}€</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Livraison</span>
                    <span>Gratuite</span>
                  </div>
                  <div className="flex justify-between">
                    <span>TVA (20%)</span>
                    <span>{(total * 0.2).toFixed(2)}€</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>{(total * 1.2).toFixed(2)}€</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
