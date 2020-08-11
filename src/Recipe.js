import React, {useEffect, useState} from 'react';
import {Alert} from 'reactstrap';

const Recipe = props => {
    const [recipe, setRecipe] = useState({
            items: [],
            ingredients: [],
            directions: [],
            images: []
    });

    const [visible, setVisible] = useState(false);
    const [alert, setAlert] = useState("");
    const onDismiss = () => setVisible(false);
    const displayAlert = message => {
        setAlert(message);
        setVisible(true);
    }

    useEffect(() => {
        fetch(`/Recipe/${props.id}`)
            .then(async(res) => {
                if(!res.ok)
                    throw await res.json();

                setRecipe(await res.json());
            }).catch(e =>{
                console.error(e);
                displayAlert(e.message);
            })
    }, []);

    return (
        <main className="recipe" id={recipe.id}>
            <Alert color="danger" isOpen={visible} toggle={onDismiss}>
                {alert}
            </Alert>
            <div className="title">
                <h2>{recipe.title}</h2>
                <figure>
                    {recipe.images.map(img =>
                        <img src={`./images/${recipe.id}/${img}`} />
                    )}
                </figure>
            </div>
            <h3>Items:</h3>
            <h3>Ingredients:</h3>
            <h3>Directions:</h3>
            <ul>
                {recipe.items.map(item =>
                    <li>{item}</li>
                )}
            </ul>
            <ul>
                {recipe.ingredients.map(ingredient =>
                    <li>{ingredient}</li>
                )}
            </ul>
            <ol>
                {recipe.directions.map(direction =>
                    <li>{direction}</li>
                )}
            </ol>
        </main>
    )
}

export default Recipe;
