import React from 'react';

function AnimalItem({ nombre, imagen, isAdopted, onAdopt }) {
    

    return (
        <div className="animal-item">
            <img src={imagen} alt={nombre} className="animal-image" />
            <h2>{nombre}</h2>
            <button >Adoptar</button>
        </div>
    );
}

export default AnimalItem;