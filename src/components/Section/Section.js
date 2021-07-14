import PropTypes from "prop-types";
import styles from "./Section.module.css";

const Section = ({ title, children }) => {
  return (
    <div>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </div>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Section;
