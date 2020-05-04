function registerUser(name, surname, email, password, callback) {
    String.validate.alphabetic(name);

    String.validate.alphabetic(surname);

    Email.validate(email);

    call('POST',
        'https://skylabcoders.herokuapp.com/api/v2/users',
        `{ "name": "${name}", "surname": "${surname}", "username": "${email}", "password": "${password}" }`,
        { 'Content-type': 'application/json' },
        (error, status, body) => {
             //Comprueba error de conexion
            if (error) {
                return callback(error);
            }
            //Comprueba que no ha habido un error llamando a la API
            if (status === 201) {
                callback();

            } else {
                callback(new Error(JSON.parse(body).error));
                
            }
        }
    )
}