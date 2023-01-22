import QuoteBox from "@/components/QuoteBox";
import { useState } from "react";
import quotes from "../json/quotes.json";
import classes from "../styles/Home.module.css";

export default function Home() {
	const getQuoteRandom = (data) => {
		return Math.floor(Math.random() * data.length);
	};

	const getElementRandom = (response) => {
		const index = getQuoteRandom(response);
		return response[index];
	};

	const getRandomColor = () => {
		let randomColor = "#";
		let chars = "0123456789abcdef";
		for (let i = 0; i < 6; i++) {
			randomColor += chars[Math.floor(Math.random() * chars.length)];
		}
		return randomColor;
	};

	const [quoteRandom, setQuoteRandom] = useState(getElementRandom(quotes));
	const [colorRandom, setColorRandom] = useState(getRandomColor());

	const clickButtom = () => {
		setQuoteRandom(getElementRandom(quotes));
		setColorRandom(getRandomColor());
	};

	const styles = {
		backgroundColor: colorRandom,
	};
	return (
		<div style={styles} className={classes.home}>
			<QuoteBox
				quoteRandom={quoteRandom}
				colorRandom={colorRandom}
				clickButton={clickButtom}
			/>
		</div>
	);
}
