import React, {useEffect} from 'react';
import {FormGroup} from 'reactstrap'

const ImageInput = props => {

    useEffect(()=>{
        let input = document.querySelector(`#${props.id+props.recipe}`);
        if(typeof props.value !== "undefined") {
            props.value.forEach(file => {
                let pic = document.createElement("img");
                pic.src = "./images/" + props.recipe + "/" + file;
                input.appendChild(pic);
            });
        }
    }, []);

    const handleChange = e => {
        const files = e.target.files
        const formData = new FormData()
        formData.append('image', files[0])

        fetch(`/Image/${props.recipe}`, {
            method: 'POST',
            body: formData
        }).then(async(res) => {
            if(!res.ok)
                throw await res.json();

            let object = await res.json();
            console.log(object);
            let pic = document.createElement("img");
            pic.src = "./images/" + props.recipe + "/" + object.file;

            document.querySelector(`#${props.id+props.recipe}`).appendChild(pic);

            let update = props.value;
            update.push(object.file);

            props.onChange({currentTarget:{
                name:props.name,
                value:update
            }});

        }).catch(error => {
            console.error(error)
         })
    }

    return (
        <FormGroup>
            <input type="file" onChange={handleChange}/>
            <figure id={props.id+props.recipe}></figure>
        </FormGroup>
    );
}

export default ImageInput;
