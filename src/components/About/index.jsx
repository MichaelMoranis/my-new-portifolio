import "./styles.css";
import PropTypes  from "prop-types";

function About({ text, special }) {
  const className = special ? "projects" : "text"
  
  return (
    <div className={className}>
        {text}.
    </div>
  );
}

About.propTypes = {
  text: PropTypes.string.isRequired,
  special: PropTypes.string.isRequired,
}

export default About;
