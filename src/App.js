import React from "react";
import "../src/commonResource/css/styles.css";
import "../src/commonResource/css/bootstrap.css";

import Header from "../src/commonResource/Components/Header/Header";
import Alert from "./commonResource/Components/Alert";

import FirstHighlight from "./commonResource/Components/Main/FirstHighlight";
import SecondHighlight from "./commonResource/Components/Main/SecodHighlight";
import ThirdHighlight from "./commonResource/Components/Main/ThirdHighlight";
import FourthHighlight from "./commonResource/Components/Main/FourthHighlight";
import FifthHighlight from "./commonResource/Components/Main/FifthHighlight";
import SixthHighlight from "./commonResource/Components/Main/SixthHighlight";
import Footer from "./commonResource/Components/Footer/Footer";

function App() {
	return (
		<div>
			<Header />
			<Alert />
			<FirstHighlight />
			<SecondHighlight />
			<ThirdHighlight />
			<FourthHighlight />
			<FifthHighlight />
			<SixthHighlight />
			<Footer />
		</div>
	);
}

export default App;
