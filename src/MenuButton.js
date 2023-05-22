import React, { useState } from 'react';
import Toggle from './Toggle';

export default function OffcanvasMenu({ tagline, links }) {
	const [menuOpen, setMenuOpen] = useState(false);

	const handleCloseMenu = () => {
		setMenuOpen(false);
	};

	// Extract to seperate css fille?
	const taglineClasses = [
		'animate__animated',
		'animate__bounceInDown',
		'animate__slower',
	];

	return (
		<>
			{menuOpen && (
				<>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							height: '100%',
						}}
					>
						<h2 style={{ flex: '1 0 auto' }}>{tagline}</h2>
						<ul style={{ flex: '0 1 auto' }}>
							{links.map((link, index) => (
								<li key={index}>{link}</li>
							))}
						</ul>
					</div>
				</>
			)}
			<Toggle
				menuOpen={menuOpen}
				setMenuOpen={setMenuOpen}
				handleCloseMenu={handleCloseMenu}
			/>
		</>
	);
}
