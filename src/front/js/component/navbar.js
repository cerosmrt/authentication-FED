import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {

	const navigate = useNavigate();

	const onLogout = () => {
		localStorage.removeItem('jwt-token')
		navigate('/login')
	};

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
						<button className="btn btn-primary" onClick={onLogout}>Logout</button>
				</div>
			</div>
		</nav>
	);
};
