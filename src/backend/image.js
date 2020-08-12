let image = {};

image.upload = async(recipe, files) => {
    let body = new FormData();
    body.append('image', files[0]);

    let responce = await fetch(`/Image/${recipe}`, {
        method: 'POST',
        body: body
    });

    if( !responce.ok )
        throw await responce.json();

    return await responce.json();
}

export default image;
