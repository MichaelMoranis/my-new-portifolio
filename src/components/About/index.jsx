import "./styles.css";

function About({ text, special }) {
  const className = special ? "projects" : "text"
  return (
    <div className={className}>
        {text}.
    </div>
  );
}

export default About;
