import React from 'react';
import '../index.css'; 

const Galeria = () => {
  const imagenes = [
    '/images/Imagen1.jpeg',
    '/images/Imagen2.jpeg',
    '/images/Imagen3.jpeg',
    '/images/Imagen4.jpeg',
    '/images/Imagen5.jpeg',
    '/images/Imagen6.jpeg'
  ];

  return (
    <div className="min-h-screen bg-pink-100 p-8">
      <h2 className="text-center mb-12 custom-gradient-text">Pasteles de Temporada</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {imagenes.map((imagen, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={imagen} alt={`Imagen ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Galeria;
