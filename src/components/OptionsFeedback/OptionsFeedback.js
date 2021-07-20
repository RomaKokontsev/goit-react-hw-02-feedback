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
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  clickFeedback: PropTypes.func.isRequired,
};

export default OptionsFeedback;
