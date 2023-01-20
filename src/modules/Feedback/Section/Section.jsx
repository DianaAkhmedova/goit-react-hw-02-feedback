const Section = ({ children, title }) => {
  return (
    <div>
      <h3>{title}</h3>
      {children}
    </div>
  );
};

export default Section;
