

export const data = (password, email)  => {
    

    fetch("https://dev.naosti.com/kenara/api/login", {
        method : "POST",
        credentials: 'same-origin',
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body : JSON.stringify ({
            email: email,
            password :password,
            
        }),
    })
        .then((res) =>  res.json())
        .then((data) =>console.log(data)) 
        .catch((error) => console.log(error));

}
