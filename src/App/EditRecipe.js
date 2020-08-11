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

    const [messageVisable, setMessageVisible] = useState(false);
    const [message, setMessage] = useState("");
    const dismisMessage = () =>setMessageVisible(false);
    const displayMessage = message => {
        setMessage(message);
        setMessageVisible(true);
    }

    const handleInputChange = e => setRecipe({
    ...recipe,
    [e.currentTarget.name]: e.currentTarget.value
  })

    useEffect(()=>{
        if(props.id > 0 ){
            fetch(`/Recipe/${props.id}`).then(async(res) => {
                if(!res.ok)
                    throw await res.json();

                let object = await res.json();
                object.items = object.items.join("\n");
                object.directions = object.directions.join("\n");
                object.ingredients = object.ingredients.join("\n");

                let input = document.querySelector(`#images${props.id}`);
                object.images.forEach(file => {
                    let pic = document.createElement("img");
                    pic.src = "./images/" + props.id + "/" + file;
                    input.appendChild(pic);
                })

                setRecipe(object);
            }).catch(e => {
                console.error(e);
                displayError(e.message);
            })
        }
    }, []);

    const submit = event => {
        event.preventDefault();
        let target = "/Recipe";
        if(props.id > 0)
            target += "/" + props.id;

        fetch(target, {
            method:"POST",
            headers: {'Content-Type': 'application/json; charset=UTF-8'},
            body: JSON.stringify({
                title: recipe.title,
                directions: recipe.directions.split("\n"),
                ingredients: recipe.ingredients.split("\n"),
                items: recipe.items.split("\n"),
                images: recipe.images
            })
        }).then(async(req) => {
            if(!req.ok)
                throw await req.json();

            displayMessage("Success");
        }).catch(e => {
            displayError(e.message);
            console.error(e);
        });


    }

    return (
        <TabPane tabId={props.tab}>
            <Alert  color="danger" isOpen={errorVisable} toggle={dismisError}>
                {error}
            </Alert >
            <Alert  color="success" isOpen={messageVisable} toggle={dismisMessage}>
                {message}
            </Alert >
            <h2>{props.title}</h2>
            <Form onSubmit={submit} className="recipe" style={{height:"40em"}} >
                <div className="title">
                    <FormGroup>
                        <Label for="title">Recipe Title:</Label>
                        <Input type="text" name="title" id="title" value={recipe.title} onChange={handleInputChange}/>
                        <Button color="primary">Submit</Button>
                    </FormGroup>
                    <ImageInput value={recipe.images} onChange={handleInputChange} name="images" recipe={props.id} id="images"/>
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
