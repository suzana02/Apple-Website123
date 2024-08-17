import React, { useEffect, useState } from "react";
import logo from "../../images/icons/logo-sm.png";
import search from "../../images/icons/search-icon-sm.png";
import cart from "../../images/icons/cart-sm.png";

const Header = () => {
	const [isExpanded, setIsExpanded] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			window.location.reload();
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	const handleClick = (event) => {
		if (window.innerWidth <= 768) {
			setIsExpanded((prevExpanded) => !prevExpanded);
		}
	};

	return (
		<div className="nav-wrapper fixed-top">
			<div className="container">
				<nav className="navbar navbar-toggleable-sm navbar-expand-md">
					<button
						className="navbar-toggler navbar-toggler-right"
						type="button"
						data-toggle="collapse"
						data-target=".navbar-collapse"
						onClick={handleClick}
					>
						☰
					</button>
					<a className="navbar-brand mx-auto" href="#">
						<img src={logo} alt="Logo" />
					</a>

					<div
						className={`navbar-collapse collapse ${isExpanded ? "show" : ""}`}
					>
						<ul className="navbar-nav nav-justified w-100 nav-fill">
							<li className="nav-item">
								<a className="nav-link js-scroll-trigger" href="/mac/">
									Mac
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link js-scroll-trigger" href="#">
									iPhone
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link js-scroll-trigger" href="#">
									iPad
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link js-scroll-trigger" href="#">
									Watch
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link js-scroll-trigger" href="#">
									TV
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link js-scroll-trigger" href="#">
									Music
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link js-scroll-trigger" href="#">
									Support
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link js-scroll-trigger" href="/search/">
									<img src={search} alt="Search" />
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link js-scroll-trigger" href="/cart/">
									<img src={cart} alt="Cart" />
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</div>
	);
};

export default Header;
