import React from 'react';
import {ListGroupItem} from 'reactstrap';

const RecipeListItem = props => {
    return (
        <ListGroupItem key={props.recipe.id} className=" recipeListItem row">
            <figure className="col-1">
                <img src={`./images/${props.recipe.id}/${props.recipe.images[0]}`} />
            </figure>
            <section className="col-11">
                <h3>{props.recipe.title}</h3>
            </section>
        </ListGroupItem>
    )
}

export default RecipeListItem;
