import React, { Component } from 'react';
import './Main.css';

import Form from './Form';
import Tarefas from './Tarefas';

export default class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas: [],
    index: -1,
  };

  componentDidMount() {
    const tarefas = JSON.parse(localStorage.getItem('tarefas'));
    if (!tarefas) return;

    this.setState({ tarefas });
  }

  componentDidUpdate(prevProps, prevState) {
    const { tarefas } = this.state;

    if (tarefas === prevState.tarefas) return;
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }

  handleChange = (e) => {
    this.setState({ novaTarefa: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { tarefas, index } = this.state;
    let { novaTarefa } = this.state;

    novaTarefa = novaTarefa.trim();

    if (tarefas.indexOf(novaTarefa) !== -1 || !novaTarefa.length) {
      return;
    }

    if (index !== -1) {
      const novasTarefas = [...tarefas];
      novasTarefas[index] = novaTarefa;
      this.setState({
        tarefas: [...novasTarefas],
        novaTarefa: '',
        index: -1,
      });
      return;
    }

    const novasTarefas = [...tarefas];
    this.setState({
      tarefas: [...novasTarefas, novaTarefa],
      novaTarefa: '',
      index: -1,
    });
  };

  handleEdit = (index) => {
    const { tarefas } = this.state;
    this.setState({ index, novaTarefa: tarefas[index] });
  };

  handleDelete = (index) => {
    const { tarefas } = this.state;
    const novasTarefas = tarefas.filter((_, i) => i !== index);
    this.setState({
      tarefas: [...novasTarefas],
    });
  };

  render() {
    const { novaTarefa, tarefas } = this.state;
    return (
      <div className="main">
        <h1>Lista de tarefas</h1>
        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          novaTarefa={novaTarefa}
        />
        <Tarefas
          tarefas={tarefas}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
        />
      </div>
    );
  }
}
