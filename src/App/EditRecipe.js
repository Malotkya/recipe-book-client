import React, {useState, useEffect} from 'react';
import {TabPane, Alert, Form, Input, Button, Label, FormGroup } from 'reactstrap';
import ImageInput from './ImageInput.js';
import {recipe} from '../backend.js';

const EditRecipe = props => {
    const [form, setRecipe] = useState({
            title: "",
            items: "",
            ingredients: "",
            directions: "",
            images: []
        });
    let title = "Edit Recipe";

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
    ...form,
    [e.target.name]: e.target.value
    })

    const submit = event => {
        event.preventDefault();

        recipe.save(props.id, {
            title: form.title,
            items: form.items.split('\n'),
            ingredients: form.ingredients.split('\n'),
            directions: form.directions.split('\n'),
            images: form.images
        }).then(res => displayMessage("Success")).catch(e => {
            displayError(e.message);
            console.error(e);
        });
    };

    useEffect(()=>{
        if(props.id > 0 ){
            recipe.getById(props.id).then(res => {

                res.items = res.items.join("\n");
                res.directions = res.directions.join("\n");
                res.ingredients = res.ingredients.join("\n");

                setRecipe(res);
            }).catch(e => {
                console.error(e);
                displayError(e.message);
            })
        }
    }, [props.id]);

    useEffect(()=>{
        if(props.id <= 0)
            title = "New Recipe";
    }, [])

    return (
        <>
            <Alert  color="danger" isOpen={errorVisable} toggle={dismisError}>
                {error}
            </Alert >
            <Alert  color="success" isOpen={messageVisable} toggle={dismisMessage}>
                {message}
            </Alert >
            <h2>{title}</h2>
            <Form onSubmit={submit} className="recipe" style={{height:"40em"}} >
                <div className="title">
                    <FormGroup>
                        <Label for="title">Recipe Title:</Label>
                        <Input type="text" name="title" id="title" value={form.title} onChange={handleInputChange}/>
                        <Button color="primary">Submit</Button>
                    </FormGroup>
                    <ImageInput value={form.images} onChange={handleInputChange} name="images" recipe={props.id} id="images"/>
                </div>
                <Label for="items">Items:</Label>
                <Label for="ingredients">Ingredients:</Label>
                <Label for="directions">Directions</Label>

                <Input type="textarea" name="items" id="items" value={form.items}  onChange={handleInputChange}/>
                <Input type="textarea" name="ingredients" id="ingredients" value={form.ingredients}  onChange={handleInputChange}/>
                <Input type="textarea" name="directions" id="directions" value={form.directions}  onChange={handleInputChange}/>
            </Form>
        </>
    )
}

export default EditRecipe;
