import React from 'react';
import {ListGroupItem} from 'reactstrap';

const RecipeListItem = props => {
    let preview = (<img src={`./images/0.png`} alt=""/>);
    if(props.recipe.images.length > 0)
        preview = (<img src={`./images/${props.recipe.id}/${props.recipe.images[0]}`} alt=""/>);

    return (
        <ListGroupItem className="recipeListItem row">
            <figure className="col-1">
                {preview}
            </figure>
            <section className="col-11">
                <h3>{props.recipe.title}</h3>
            </section>
        </ListGroupItem>
    )
}

export default RecipeListItem;
