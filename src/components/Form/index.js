import React from 'react';
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';

import './Index.css';

export default function Form({ handleChange, handleSubmit, novaTarefa }) {
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={novaTarefa} />
        <button type="submit">
          <FaPlus />
        </button>
      </form>
    </div>
  );
}

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,
};
