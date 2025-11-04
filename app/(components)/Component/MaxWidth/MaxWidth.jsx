const MaxWidth = ({ children, customClass = "" }) => {
  return <div className={` m-auto   ${customClass}`}>{children}</div>;
};

export default MaxWidth;
