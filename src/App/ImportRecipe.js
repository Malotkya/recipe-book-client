import React, {useState} from 'react';
import {TabPane, Alert, Form, Input, Button } from 'reactstrap';

const ImportRecipe = props => {
    const [visible, setVisible] = useState(false);
    const [alert, setAlert] = useState("");
    const onDismiss = () => setVisible(false);

    const displayAlert = message => {
        setAlert(message);
        setVisible(true);
    }

    const submit = event => {
        displayAlert("Not Yet Working!");
    }

    return (
        <TabPane tabId="import">
            <Alert  color="danger" isOpen={visible} toggle={onDismiss}>
                {alert}
            </Alert >
            <h2>Import Recipe</h2>
            <Form onSubmit={submit}>
                <Input type="text" />
                <Button>Submit</Button>
            </Form>
        </TabPane>
    )
}

export default ImportRecipe;
