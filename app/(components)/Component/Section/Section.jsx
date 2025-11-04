const Section = ({ children, sectionClass = "", id = "" }) => {
  return (
    <section id={id} className={`${sectionClass}`}>
      {children}
    </section>
  );
};

export default Section;
