import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavMenu>
				<NavLink to="/" activeStyle>
					Home
				</NavLink>
				<NavLink to="/about" activeStyle>
					About
				</NavLink>
				<NavLink to="/leagues" activeStyle>
					Leagues
				</NavLink>
				<NavLink to="/teams" activeStyle>
					Teams
				</NavLink>
				<NavLink to="/players" activeStyle>
					Players
				</NavLink>
				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;
