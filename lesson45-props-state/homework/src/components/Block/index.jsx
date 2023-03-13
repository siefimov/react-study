import React from "react";
import PropTypes from "prop-types";

import "./index.scss";

const Block = (props) => {
  const { title, blockQty, blockColor, text } = props;

  // Create an array of null values with length equal to blockQty
  const divs = Array.from({ length: blockQty }, (_, i) => i);
  const modifiedTitle = [...title][0].toUpperCase() + [...title].slice(1).join("");

  return (
    <>
      <div className={title}>
        <h2 className={`${title}__title title-h2`}>{modifiedTitle}</h2>

        {divs.map((_, index) => (
          <div
            key={index}
            className={`${title}__item`}
            style={{ backgroundColor: `${blockColor}` }}
          >
            {title} {++index}
            <p>{text}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Block;

Block.propTypes = {
  title: PropTypes.string.isRequired,
  blockQty: PropTypes.string,
};

Block.defaultProps = {};
