import PropTypes from "prop-types";
import styles from "./OptionsFeedback.module.css";

const OptionsFeedback = ({ options, clickFeedback }) => {
  return options.map((option) => (
    <button
      key={option}
      className={styles.btn}
      onClick={() => clickFeedback(option)}
    >
      {option}
    </button>
  ));
};

OptionsFeedback.propTypes = {
  option: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func,
};

export default OptionsFeedback;
