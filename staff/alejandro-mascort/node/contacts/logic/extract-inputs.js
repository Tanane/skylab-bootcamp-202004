module.exports = data =>  {
    let contact = {}

    let [,formInputs] = data.split('?')
    formInputs = formInputs.split('&')
    // formInputs = formInputs.map(input => input.substring(input.indexOf('=')+1))
    // contact.name = formInputs[0]
    // contact.surname = formInputs[1]
    // contact.email= formInputs[2].replace('%40', '@')
    // contact.phone = formInputs[3]
    formInputs = formInputs.map(input => input.split('='))
    formInputs.forEach(input => contact[input[0].trim()]=input[1].trim().replace('%40', '@'))

    
    return contact
}

