/* eslint-disable react/prop-types */
function FlexUi({ type, style, children }) {
  const styles = {
    center: `flex justify-center items-center ${style}`,
    between: `flex justify-between items-center  ${style} `,
    around: `flex justify-around items-center  ${style} `,
    none: `flex   ${style} `,
  };
  if (type === "none") {
    return <div className={styles[type]}>{children}</div>;
  }
  if (type === "center") {
    return <div className={styles[type]}>{children}</div>;
  }
  if (type === "between") {
    return <div className={styles[type]}>{children}</div>;
  }
  if (type === "around") {
    return <div className={styles[type]}>{children}</div>;
  }
}

export default FlexUi;
