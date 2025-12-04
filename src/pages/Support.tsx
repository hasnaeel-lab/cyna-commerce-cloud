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
    </div>
  );
};

export default Support;