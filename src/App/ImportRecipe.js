import React, {useEffect, useState} from 'react';
import {TabPane, Alert, Form, Input, Button } from 'reactstrap';

const ImportRecipe = props => {
    const [list, setList] = useState([]);

    const [visible, setVisible] = useState(false);
    const [alert, setAlert] = useState("");
    const onDismiss = () => setVisible(false);

    const displayAlert = message => {
        setAlert(message);
        setVisible(true);
    }

    const submit = event => {

    }

    return (
        <TabPane tabId="import">
            <Alert  color="danger" isOpen={visible} toggle={onDismiss}>
                {alert}
            </Alert >
            <h2>Import Recipe</h2>
            <Form>
                
            </Form>
        </TabPane>
    )
}

export default ImportRecipe;
