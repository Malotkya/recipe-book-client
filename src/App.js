import React, {Component} from 'react';
import {Container} from 'reactstrap';
import Navigation from './Navigation.js';
import Recipe from './Recipe.js';

class App extends Component {
    render() {
        return (
            <Container className="App" fluid={true}>
                <Navigation />
                <Recipe />
            </Container>
        );
    }
}

export default App;
