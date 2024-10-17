import React, { useEffect, useState } from 'react';
import '../styles/App.css';
import AnimalItem from './animalItem';


function App() {
  const [animales, setAnimales] = useState([]);

  useEffect(() => {
    fetch('https://huachitos.cl/api/animales')
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data.data)) {
          setAnimales(data.data);
        } else {
          console.error('Error al obtener los datos de la API');
        }
      })
      .catch(error => console.error('Error en la solicitud:', error));
  }, []);

  const [selectedAnimal, setSelectedAnimal] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleAdopt = () => {
    console.log('Animal:', selectedAnimal);
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Address:', address);
  };

  return (
    <div className="App">
      <h1>Adopción de animales</h1>
      <section className="varios">
        {animales.map(animal => (
          <AnimalItem className="animal-item"
            key={animal.id} 
            nombre={animal.nombre} 
            imagen={animal.imagen} 
          />
        ))}
      </section>

      <aside className="formulario"> 
        <h2>¿Has elegido ya a tu animal?</h2>
        <input 
          type="text" 
          placeholder="Que animal quieres adoptar?" 
          value={selectedAnimal}
          onChange={(e) => setSelectedAnimal(e.target.value)}
        />
        <input 
          type="text" 
          placeholder="Nombre" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <h2>Información de contacto</h2>
        <input 
          type="text" 
          placeholder="Correo" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          type="text" 
          placeholder="Telefono" 
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input 
          type="text" 
          placeholder="Dirección" 
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button onClick={handleAdopt}>Adoptar</button>  
        
      </aside>
    </div>
  );
}

export default App;