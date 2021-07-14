import PropTypes from "prop-types";
import styles from "./Wrapper.module.css";

const Wrapper = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
