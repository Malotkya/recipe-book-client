import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    state = { recipes: [] };

    componentDidMount() {
        fetch('/Recipe')
            .then(res => res.json())
            .then(recipes => this.setState({ recipes }))
    }

    render() {
        return (
            <div className="App">
              <h1>Recipes</h1>
              <ul>
                {this.state.recipes.map(obj =>
                    <li key={obj.id}>{obj.title}</li>
                )}
              </ul>
            </div>
        );
    }
}

export default App;
