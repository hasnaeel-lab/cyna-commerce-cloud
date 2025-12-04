"use client";

import { Card, CardContent } from "@/components/ui/card";

const Tarifs = () => {
  const plans = [
    {
      title: "Basique",
      price: "19€ / mois",
      features: ["Support par e-mail", "Accès limité", "1 utilisateur"],
    },
    {
      title: "Standard",
      price: "49€ / mois",
      features: ["Support prioritaire", "Accès complet", "5 utilisateurs"],
    },
    {
      title: "Premium",
      price: "99€ / mois",
      features: ["Support 24/7", "Accès illimité", "Utilisateurs illimités"],
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <section className="py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Nos Tarifs</h1>
          <p className="text-lg text-gray-600">
            Choisissez un plan adapté à vos besoins.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className="text-center p-6">
              <h2 className="text-2xl font-bold mb-2">{plan.title}</h2>
              <p className="text-3xl font-semibold text-blue-600 mb-4">{plan.price}</p>
              <ul className="text-gray-700 mb-6 space-y-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>• {feature}</li>
                ))}
              </ul>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                Choisir ce plan
              </button>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Tarifs;
