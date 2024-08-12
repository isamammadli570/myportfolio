/* eslint-disable react/prop-types */
function ImageUi({ type, src, style }) {
    const styles = {
      primary: `rounded-full w-56 md:w-96 ${style}`,
      secondary: `rounded-md w-56 md:w-96 ${style}`,
      triatry: `rounded-3xl w-56 md:w-96 ${style}`,
    };

    return <img src={src} alt="" className={styles[type]} />;
  
  }
  
  export default ImageUi;