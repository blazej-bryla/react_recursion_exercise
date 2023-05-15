import React from 'react';
import PropTypes from 'prop-types';

function RecursiveComponent(props) {
  const {
    components,
    index
  } = props;

  return (
    <div>
      {/* invoke recursive method here */}
    </div>
  );
}

RecursiveComponent.propTypes = {
  components: PropTypes.arrayOf(PropTypes.elementType).isRequired,
};

export default RecursiveComponent;
