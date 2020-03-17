import React, { useEffect } from "react";

const SASIcon = ({ data }) => {
const {icon, color} = data
console.log('this is icon:', data, color)
  const URL =
    "https://www.sas.se/v2/de-design-library/assets/js/partials/icons/build.js";
  useEffect(() => {
    const script = document.createElement("script");
    script.src = URL;
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  return (
    <div>
      <svg className={`sas-icon sas-icon-${icon}`} role="presentation">
        <use xlinkHref={`#${icon}`} href={`#${icon}`}></use>
      </svg>
      <svg className="sas-icon sas-icon-cl--user-round" role="presentation" style={{height:121,width:121, color: 'green'}}>
       <use xlinkHref="#cl--user-round" href="#cl--user-round"></use>
     </svg>
    </div>
  );
};

export default SASIcon
