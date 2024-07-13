import React, { useState } from 'react';
import '../styles/Header.css'; // Adjust this file for custom styles if needed

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl text-center mb-8 custom-gradient-text">Bienvenidos a Nuestra Pastelería</h1>
        {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-md shadow-md max-w-sm w-full">
            <h2 className="text-2xl mb-4">Horario de Atención</h2>
            <p className="mb-4">De Lunes a Viernes - 9AM a 9PM</p>
            <p className="mb-4">Fines de Semana - 9AM a 6PM</p>
            <button 
              onClick={handleCloseModal}
              className="bg-pink-600 text-white px-6 py-3 rounded-md hover:bg-pink-700 transition duration-200"
            >
              Close
            </button>
          </div>
        </div>
      )}
        <div className="mb-6 flex justify-center space-x-4">
          <img src="/images/ImagenPrincipal1.jpeg" alt="Pastelería" className="w-1/3 h-auto rounded-lg shadow-lg" />
          <img src="/images/ImagenPrincipal6.jpeg" alt="Pastelería" className="w-1/3 h-auto rounded-lg shadow-lg" />
          <img src="/images/ImagenPrincipal2.jpeg" alt="Pastelería" className="w-1/3 h-auto rounded-lg shadow-lg" />
        </div>
        <button 
          onClick={handleButtonClick}
          className="bg-pink-400 text-white px-6 py-3 rounded-md mb-8 hover:bg-pink-400 transition duration-200"
        >
          Show Info
        </button>
        <p className="text-lg text-center mb-12">
          En nuestra pastelería, nos dedicamos a crear los postres más deliciosos y hermosos para tus momentos especiales. Utilizamos ingredientes de la más alta calidad para asegurarnos de que cada bocado sea una experiencia única y deliciosa.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold mb-4">Contacto</h3>
            <p className="text-gray-700">Puedes contactarnos a través de nuestro número de teléfono, correo electrónico o redes sociales.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold mb-4">Forma de Envío</h3>
            <p className="text-gray-700">Ofrecemos servicio de entrega a domicilio para que disfrutes de nuestros productos sin salir de casa.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold mb-4">Métodos de Pago</h3>
            <p className="text-gray-700">Aceptamos diferentes métodos de pago, incluyendo tarjetas de crédito, débito y pagos en efectivo.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-semibold mb-4">Compra por WhatsApp</h3>
            <p className="text-gray-700">Haz tu pedido de manera rápida y sencilla a través de WhatsApp. ¡Estamos listos para atenderte!</p>
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default Home;
