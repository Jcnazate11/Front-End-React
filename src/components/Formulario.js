import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css'; // Ensure this is imported for the custom styles

const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!nombre) newErrors.nombre = 'El nombre es obligatorio.';
    if (!email) newErrors.email = 'El correo electrónico es obligatorio.';
    if (!mensaje) newErrors.mensaje = 'El mensaje es obligatorio.';

    if (Object.keys(newErrors).length === 0) {
      // Redirigir a la página principal
      navigate('/');
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-center mb-4 custom-gradient-text">Formulario de Contacto</h2>

        <div className="mb-4">
          <label className="block text-[#ff69b4] font-semibold">Nombre</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:border-blue-500 bg-pink-50"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          {errors.nombre && <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-[#ff69b4] font-semibold">Correo Electrónico</label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:border-blue-500 bg-pink-50"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-[#ff69b4] font-semibold">Mensaje</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:border-blue-500 bg-pink-50"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          />
          {errors.mensaje && <p className="text-red-500 text-sm mt-1">{errors.mensaje}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-pink-500 text-white p-2 rounded-lg mt-4 hover:bg-pink-600 transition duration-200"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Formulario;
