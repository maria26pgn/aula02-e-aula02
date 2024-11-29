import React, { Component } from 'react';
import './App.css'; // Importa o CSS para estilização

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalClicks: 0,
      horarios: [],
    };
  }

  handleButtonClick = () => {
    const horarioAtual = new Date().toLocaleTimeString();
    this.setState((prevState) => ({
      totalClicks: prevState.totalClicks + 1,
      horarios: [...prevState.horarios, horarioAtual],
    }));
  };

  render() {
    return (
      <div className="App">
        <h1>Registro de Horário de Cliques</h1>
        <button onClick={this.handleButtonClick}>Clique Aqui!</button>
        <p>Total de Cliques: {this.state.totalClicks}</p>
        <ul>
          {this.state.horarios.map((horario, index) => (
            <li key={index}>{horario}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
