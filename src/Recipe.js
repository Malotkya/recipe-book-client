import React, {Component} from 'react';

class Recipe extends Component {
    state = { recipe: {
            items: [],
            ingredients: [],
            directions: []
        }
    };

    componentDidMount() {
        fetch('/Recipe')
            .then(res => res.json())
            .then(recipe => {
                recipe.images = [
                    "1.jpeg",
                    "2.jpeg",
                    "3.jpeg"
                ]
                this.setState({ recipe });
            })
    }

    render() {
        return (
            <main className="recipe" id={this.state.recipe.id}>
                <div className="title">
                    <h2>{this.state.recipe.title}</h2>
                    <span>
                        <img src="./images/1/1.jpeg" />
                    </span>
                </div>
                <h3>Items:</h3>
                <h3>Ingredients:</h3>
                <h3>Directions:</h3>
                    <ul>
                        {this.state.recipe.items.map(item =>
                            <li>{item}</li>
                        )}
                    </ul>
                    <ul>
                        {this.state.recipe.ingredients.map(ingredient =>
                            <li>{ingredient}</li>
                        )}
                    </ul>
                    <ol>
                        {this.state.recipe.directions.map(direction =>
                            <li>{direction}</li>
                        )}
                    </ol>
            </main>
        )
    };
}

export default Recipe;
