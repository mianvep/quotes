import classes from "../styles/Home.module.css";
import QuotesIcon from "./QuotesIcon";

const QuoteBox = ({ quoteRandom, colorRandom, clickButton }) => {
	return (
		<article style={{ color: colorRandom }} className={classes.randomQuote}>
			<div className={classes.text}>
				<QuotesIcon />
				<h2>{quoteRandom.quote}</h2>
			</div>
			<p>{quoteRandom.author}</p>
			<button
				style={{ backgroundColor: colorRandom }}
				className={classes.quote__btn}
				onClick={clickButton}
			>
				&#62;
			</button>
		</article>
	);
};

export default QuoteBox;
