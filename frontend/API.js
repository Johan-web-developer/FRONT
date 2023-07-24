const url = "";

export const creyentes = async () => {
    try {
        const data = await fetch (`${url}`);
        const result = data.json();
        return result;
    } catch (error) {
        console.log(error);
    }
}


export const creyente = async (id) => {
    try {
    const data = await fetch (`${url}/${id}`);
    const result = data.json();
    return result;
    }
    catch (error) {
        console.log(error);
    };
}


export const insertCreyente = async (ciclista) => {
try {
    await fetch(url,{
        method : 'POST',
        body : JSON.stringify(ciclista),
        headers:{
            'Content-Type': 'application/json'
        }
    })
    window.location.href = "index.html";
} catch (error) {
    console.log(error);
};
}


export const updateCreyente = async (ciclistaUp,id) => {
    try {
        await fetch(`${url}/${id}`,{
            method : 'PUT',
            body : JSON.stringify(ciclistaUp),
            headers :{
                'Content-Type': 'application/json'
            }
        })
        window.location.href = "index.html";
    } catch (error) {
        console.log(error);
    };
}

export const deleteCreyente = async (id) => {
    try {
        await fetch(`${url}/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        window.location.href = "index.html";
    } catch (error) {
        console.log(error);
    };
}
