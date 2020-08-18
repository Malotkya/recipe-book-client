import React from 'react';
import {ListGroupItem} from 'reactstrap';

const RecipeListItem = props => {
    let preview = (<img src={`./images/0.png`} alt=""/>);
    if(props.recipe.images.length > 0)
        preview = (<img src={`./images/${props.recipe.id}/${props.recipe.images[0]}`} alt=""/>);


    const click = event => {
        event.preventDefault();
        while(event.target.localName !== "a") {
            event.target = event.target.parentNode;
        }

        props.toggle("edit", event.target.id);
    }

    return (
        <ListGroupItem>
            <a className="row recipeListItem" href="#edit" onClick={click} id={props.recipe.id}>
            <figure className="col-1">
                {preview}
            </figure>
            <section className="col-11">
                <h3>{props.recipe.title}</h3>
            </section>
            </a>
        </ListGroupItem>
    )
}

export default RecipeListItem;
