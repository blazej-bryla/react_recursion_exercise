import React from "react";
import PropTypes from "prop-types";
function RecursiveComponent({ components, index }) {
  const ActualComponent = components[index];

  return (
    index < components.length && (
      <ActualComponent>
        <RecursiveComponent components={components} index={index + 1} />
      </ActualComponent>
    )
  );
}

RecursiveComponent.propTypes = {
  components: PropTypes.arrayOf(PropTypes.elementType).isRequired,
  index: PropTypes.number,
};

export default RecursiveComponent;
