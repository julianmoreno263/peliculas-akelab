import React, { useState, Fragment } from 'react';
import Pelicula from './components/Pelicula';
function App() {
	//state
	const [pelicula, guardarPelicula] = useState([]);

	//funcion
	const consultarAPI = async () => {
		const api = await fetch('http://localhost:4000/results');
		const peliculas = await api.json();
		guardarPelicula(peliculas);
	};

	return (
		<Fragment>
			<button onClick={consultarAPI}>Consultar</button>
			<Pelicula pelicula={pelicula} />
		</Fragment>
	);
}

export default App;
