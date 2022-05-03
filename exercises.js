const data = (event)  => {
    event.preventDefault();

    fetch("https://dev.naosti.com/kenara/api/login", {
        method : "POST",
        credentials: 'same-origin',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body : JSON.stringify ({
            email: document.querySelector("#iMail").value,
            password : "b249b54f129179d97757e67d506fe23d3486e851bb217a311206ab695ba0a7a0",
            
        }),
    })
        .then((res) =>  res.json())
        .then((data) =>console.log(data)) 
        .catch((error) => console.log(error));
};


/* 
const url = "https://dev.naosti.com/kenara/api/login";
const emailInpt = document.querySelector("#iMail").value
const passwordInpt = document.querySelector("#iPassword").value

const findPostById = async (emailInpt, password) => {
    try {
        const res = await fetch(url + emailInpt, password);
        const post = await res.json();

        console.log(post); 

    } catch(error){
        console.log(error);
    }
}

findPostById(); */



/* const url = "https://dev.naosti.com/kenara/api/login";

const infoData = async (value) => {
    try {
        const result = await fetch(url + value);
        const post = await result.json();
        console.log(post);
    } catch (error) {
        console.log(error);
    }
}
infoData(value.data); */




/* 
const data = (event)  => {
    event.preventDefault();

    const postData = {
        idUsuario: "",
        nombres: "",
        apellidoPaterno:"",
        apellidoMaterno:"",
        idTipoUsiario: "",
        email: document.querySelector("#iMail").value,
    };
    try {
        const response = await fetch("https://dev.naosti.com/kenara/api/login", {
            method : "POST",
            body : JSON.stringify (,
        })
    }

    
        .then((res) =>  res.json())
        .then((data) =>console.log(data)) 
        .catch((error) => console.log(error));
}; */
