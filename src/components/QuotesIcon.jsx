import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fas);

const QuotesIcon = () => {
	return <FontAwesomeIcon icon="fa-solid fa-quote-left" size="4x" />;
};

export default QuotesIcon;
