import { useState } from 'react';
import Toggle from './Toggle';

export default function OffcanvasMenu() {
	const [menuOpen, setMenuOpen] = useState(false);

	const handleCloseMenu = () => {
		setMenuOpen(false);
	};

	return (
		<>
			<Toggle
				menuOpen={menuOpen}
				setMenuOpen={setMenuOpen}
				handleCloseMenu={handleCloseMenu}
				className="animate animateSlow bounceInRight "
			/>
		</>
	);
}
