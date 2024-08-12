/* eslint-disable react/prop-types */
function Typography({ type, style, content }) {
  const styles = {
    header_primary_lg: `uppercase  tracking-widest font-semibold md:text-3xl text-xl transition-all duration-300  ${style}`,
    header_primary_md: `uppercase   tracking-widest font-semibold md:text-lg text-sm transition-all duration-300  ${style}`,
    header_primary_sm: `uppercase   tracking-widest font-semibold md:text-sm text-sm transition-all duration-300  ${style}`,
    header_primary_xs: `uppercase   tracking-widest font-semibold md:text-xs text-xs transition-all duration-300  ${style}`,
    text_secondary_lg: `uppercase   tracking-widest text-stone-500 font-semibold md:text-2xl text-xl transition-all duration-300  ${style}`,
    text_secondary_md: `uppercase   tracking-widest text-stone-500 font-semibold md:text-md text-sm transition-all duration-300  ${style}`,
    text_secondary_sm: `uppercase    tracking-widest text-stone-500 font-semibold md:text-sm text-sm transition-all duration-300  ${style}`,
    text_primary_lg: `uppercase   tracking-widest  font-semibold text-2xl transition-all duration-300  ${style}`,
    nav: "hover:border-b-2    uppercase tracking-widest cursor-pointer font-medium transition-all duration-200 text-xs md:text-lg  border-stone-800 hover:skew-x-3 hover:skew-y-1",
    side_nav:
      "hover:border-b-2    uppercase tracking-widest cursor-pointer font-medium transition-all duration-200 text-xl md:text-2xl  border-stone-800 hover:skew-x-3 hover:skew-y-1",
  };
  return <div className={styles[type]}>{content}</div>;
}

export default Typography;
