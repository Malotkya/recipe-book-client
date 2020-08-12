let recipe = {};

recipe.getAll = async() => {
    let responce = await fetch('/Recipe')
    if( !responce.ok )
        throw await responce.json();

    return await responce.json();
}

recipe.getById = async(id) => {
    let responce = await fetch(`/Recipe/${id}`);
    if( !responce.ok )
        throw await responce.json();

    return await responce.json();
}

recipe.save = async(id, body) => {
    let target = "/Recipe";
    if(id > 0)
        target += "/" + id;

    let responce = await fetch(target, {
        method:"POST",
        headers: {'Content-Type': 'application/json; charset=UTF-8'},
        body: JSON.stringify(body)
    });

    if( !responce.ok )
        throw await responce.json();

    return await responce.json();
}

recipe.delete = async(id) => {
    let responce = await fetch(`/Recipe/${id}`, {method:"DELETE"});

    if( !responce.ok )
        throw await responce.json();

    return await responce.json();
}

export default recipe;
