import Logo from "./Logo";
import NavList from "./NavList";
import NavBarCss from "./NavBar.module.css";

const Navbar = () => {
	return (
		<div className={NavBarCss.navBarContainer}>
			<Logo />
			<NavList />
		</div>
	);
};

export default Navbar;
