import React, {useEffect, useState} from 'react';
import {TabPane, Alert, Form, Input, Button, Label, FormGroup } from 'reactstrap';
import ImageInput from './ImageInput.js';

const EditRecipe = props => {
    const [recipe, setRecipe] = useState({});

    const [errorVisable, setErrorVisible] = useState(false);
    const [error, setError] = useState("");
    const dismisError = () => setErrorVisible(false);

    const displayError = message => {
        setError(message);
        setErrorVisible(true);
    }

    const handleInputChange = e => setRecipe({
    ...recipe,
    [e.currentTarget.name]: e.currentTarget.value
  })

    useEffect(()=>{
        if(props.id > 0){
            fetch(`/Recipe/${props.id}`).then(async(res) => {
                if(!res.ok)
                    throw await res.json();

                let object = await res.json();
                object.items = object.items.join("\n");
                object.directions = object.directions.join("\n");
                object.ingredients = object.ingredients.join("\n");

                setRecipe(object);
            }).catch(e => {
                console.error(e);
                displayError(e.message);
            })
        }
    }, []);

    const submit = event => {
        let target = "/Recipe"
        if(props.id > 0)
            target += "/" + props.id;


    }

    return (
        <TabPane tabId={props.tab} id={props.tab}>
            <Alert  color="danger" isOpen={errorVisable} toggle={dismisError}>
                {error}
            </Alert >
            <h2>{props.title}</h2>
            <Form onsubmit="submit" className="recipe" style={{height:"40em"}}>
                <div className="title">
                    <FormGroup>
                        <Label for="title">Recipe Title:</Label>
                        <Input type="text" name="title" id="title" value={recipe.title} onChange={handleInputChange}/>
                        <Button color="primary">Submit</Button>
                    </FormGroup>
                    <ImageInput value={recipe.images} onChange={handleInputChange} name="images" />
                </div>
                <Label for="items">Items:</Label>
                <Label for="ingredients">Ingredients:</Label>
                <Label for="directions">Directions</Label>

                <Input type="textarea" name="items" id="items" value={recipe.items}  onChange={handleInputChange}/>
                <Input type="textarea" name="ingredients" id="ingredients" value={recipe.ingredients}  onChange={handleInputChange}/>
                <Input type="textarea" name="directions" id="directions" value={recipe.directions}  onChange={handleInputChange}/>
            </Form>
        </TabPane>
    )
}

export default EditRecipe;
