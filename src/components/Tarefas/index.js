import React from 'react';
import PropTypes from 'prop-types';
import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './Index.css';

export default function Tarefas({ tarefas, handleDelete, handleEdit }) {
  return (
    <div>
      <ul className="tarefas">
        {tarefas.map((tarefa, index) => (
          <li key={tarefa}>
            {tarefa}
            <div>
              <FaEdit className="edit" onClick={() => handleEdit(index)} />
              <FaWindowClose
                className="delete"
                onClick={() => handleDelete(index)}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

Tarefas.propTypes = {
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  tarefas: PropTypes.array.isRequired,
};
