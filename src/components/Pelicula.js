import React from 'react';

const Pelicula = ({ pelicula }) => {
	return (
		<div>
			<h2>Peliculas</h2>
			<ul>
				{pelicula.map((item) => (
					<p>
						<span>{item.title}</span> - {item.overview}
					</p>
				))}
			</ul>
		</div>
	);
};

export default Pelicula;
