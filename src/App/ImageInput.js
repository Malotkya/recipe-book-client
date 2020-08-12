import React, {useState, useEffect} from 'react';
import {FormGroup} from 'reactstrap'
import {image} from '../backend.js';

const ImageInput = props => {
    const [list, setList] = useState([])

    const remove = event => {
        let index = event.target.attributes.file.nodeValue;
        props.value.splice(index, 1)
        props.onChange({target:{
            name:props.name,
            value:props.value
        }})
    }

    useEffect(()=>{
        let newList = [];
        if(typeof props.value !== "undefined") {
            props.value.forEach( (file,index) => {
                newList.push( <img src={"./images/" + props.recipe + "/" + file} alt=""
                            onClick={remove} file={index} key={index}/> );
            })
        }
        setList(newList);
    }, [props.value]);

    const handleChange = e => {
        image.upload(props.recipe, e.target.files).then(res => {
            props.onChange({target:{
                name:props.name,
                value:props.value.concat(res.file)
            }});
        }).catch(error => {
            console.error(error)
         })
    }

    return (
        <FormGroup>
            <input type="file" onChange={handleChange}/>
            <figure id={props.id+props.recipe}>
                {list}
            </figure>
        </FormGroup>
    );
}

export default ImageInput;
