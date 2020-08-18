import React, {useEffect, useState} from 'react';
import {Alert, ListGroup } from 'reactstrap';
import RecipeListItem from './RecipeListItem.js';
import {recipe} from "../backend.js";

const AllRecipes = props => {
    const [list, setList] = useState([]);

    const [visible, setVisible] = useState(false);
    const [alert, setAlert] = useState("");
    const onDismiss = () => setVisible(false);
    const displayAlert = message => {
        setAlert(message);
        setVisible(true);
    }

    useEffect(()=>{
        recipe.getAll().then(res => {
            setList(res);
        }).catch(e => {
            console.error(e);
            displayAlert(e.message);
        });

    }, []);

    return (
        <>
            <h2>All Recipes</h2>
            <Alert  color="danger" isOpen={visible} toggle={onDismiss}>
                {alert}
            </Alert >
            <ListGroup className="p-4">
                {list.map(recipe => <RecipeListItem toggle={props.toggle} recipe={recipe} key={recipe.id}/>)}
            </ListGroup>
        </>
    )
}

export default AllRecipes;
