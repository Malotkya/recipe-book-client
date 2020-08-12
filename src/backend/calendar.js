let calendar = {};

calendar.getWeek = async(date) => {
    let path = '/Week';
    if(typeof date !== "undefined")
        path += "/" + date;

    let responce = await fetch(path);
    if( !responce.ok )
        throw await responce.json();

    return await responce.json();
}

calendar.getThisWeek = async() => await calendar.getWeek();

calendar.updateWeek = async(date, body) => {
    let responce = await fetch(`/Week/${date}`, {
        method:"POST",
        headers: {'Content-Type': 'application/json; charset=UTF-8'},
        body: JSON.stringify(body)
    });

    if( !responce.ok )
        throw await responce.json();

    return await responce.json();
}

export default calendar;
