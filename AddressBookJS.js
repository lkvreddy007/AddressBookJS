{
    console.log("Welcome To AddressBook");
}

class Contact{

    constructor(...params){
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phone = params[6];
        this.email = params[7];
    }

    get firstName(){
        return this._firstName;
    }
    set firstName(firstName){
        const nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if(nameRegex.test(firstName)){
            this._firstName=firstName;
        }
        else{
            throw "Invalid First Name";
        }    
    }

    get lastName(){
        return this._lastName;
    }
    set lastName(lastName){
        const nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if(nameRegex.test(lastName)){
            this._lastName=lastName;
        }
        else{
            throw "Invalid Last Name";
        }
    }

    get address(){
        return this._address;
    }
    set address(address){
        const nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if(nameRegex.test(address)){
            this._address=address;
        }
        else{
            throw "Invalid Address";
        }
    }

    get city(){
        return this._city;
    }
    set city(city){
        const nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if(nameRegex.test(city)){
            this._city=city;
        }
        else{
            throw "Invalid City";
        }
    }

    get state(){
        return this._state;
    }
    set state(state){
        const nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if(nameRegex.test(state)){
            this._state=state;
        }
        else{
            throw "Invalid State";
        }
    }

    get zip(){
        return this._zip;
    }
    set zip(zip){
        const zipRegex = RegExp("^([1-9])(\\S){2}(\\s)?\\S{2}[0-9]$");
        if(zipRegex.test(zip)){
            this._zip=zip;
        }
        else{
            throw "Invalid Zip";
        }
    }

    get phone(){
        return this._phone;
    }
    set phone(phone){
        const phoneRegex = RegExp("^\\d{2} [1-9]\\d{9}$");
        if(phoneRegex .test(phone)){
            this._phone=phone;
        }
        else{
            throw "Invalid Phone Number";
        }
    }

    get email(){
        return this._email;
    }
    set email(email){
        const emailRegex = RegExp("^([a-z]){1,}[a-z0-9]*([.+_-]){0,1}[0-9a-z]+(@){1}([0-9a-z]+)(\\.([a-z]){2,}){1}(\\.[a-z]{2,})?$");
        if(emailRegex.test(email)){    
            this._email=email;
        }
        else{
            throw "Invalid Email";
        }
    }

    toString(){
        return "First Name: "+this.firstName+
               ", Last Name: "+this.lastName+ 
               ", Address: "+this.address+
               ", City: "+this.city+
               ", State: "+this.state+
               ", Zip: "+this.zip+
               ", Phone Number: "+this.phone+
               ", Email: "+this.email;
    }
}

let addressBook = new Array();

function contains(firstname,lastname){
    return addressBook.some(con => con.firstName==firstname && con.lastName==lastname);
}

function addContact(contact){
    if(!contains(contact.firstName,contact.lastName)){
        try{
            addressBook.push(contact);
            console.log("Contact Added.");
        }
        catch(e){
            console.error(e);
        }    
        console.log(addressBook);
    }
    else{
        console.log("Contact Already Exists.");
    }
}

function editContact(firstname,lastname,choice,value){
    if(contains(firstname,lastname)){
        switch(choice){
            case "firstName":
                addressBook.find(contact=>contact.firstName==firstname && contact.lastName==lastname).firstName=value;
                break;
            case "lastName":
                addressBook.find(contact=>contact.firstName==firstname && contact.lastName==lastname).lastName=value;
                break;
            case "address":
                addressBook.find(contact=>contact.firstName==firstname && contact.lastName==lastname).address=value;
                break;
            case "city":
                addressBook.find(contact=>contact.firstName==firstname && contact.lastName==lastname).city=value;
                break;  
            case "state":
                addressBook.find(contact=>contact.firstName==firstname && contact.lastName==lastname).state=value;  
                break;
            case "zip":
                addressBook.find(contact=>contact.firstName==firstname && contact.lastName==lastname).zip=value;
                break;
            case "phone":
                addressBook.find(contact=>contact.firstName==firstname && contact.lastName==lastname).phone=value;
                break;
            case "email":
                addressBook.find(contact=>contact.firstName==firstname && contact.lastName==lastname).email=value;
                break;
            default:
                console.log("Enter a valid choice name")
        }
        console.log(addressBook);
    }
    else{
        console.log("Contact Doesn't Exist.");
    }
}

function deleteContact(firstname,lastname){
    if(contains(firstname,lastname)){
        addressBook.pop(addressBook.find(contact=>contact.firstName==firstname && contact.lastName==lastname));
        console.log("Contact Deleted");
        console.log(addressBook);
    }
    else{
        console.log("Contact doesn't Exist.")
    }
}

function findContactsByCity(city){
    console.log("Contacts in "+city+" are:");
    return addressBook.filter(contact=>contact.city==city);
}

function incrementer(count) {
    count += 1;
    return count;
}

addContact(new Contact("Krishnavamshi","Lankala","Srinivasacolony","Mahabubnagar","Telangana",509001, "91 9484949498","abc@gmail.com"));
addContact(new Contact("Raghava","Mamidi","Srinivasacolony","Mahabubnagar","Telangana",509001, "91 9484949498","abc@gmail.com"))
editContact("Krishnavamshi","Lankala","firstName","Krishna");
deleteContact("Raghava","Mamidi");
console.log("No of contacts : "+ addressBook.reduce(incrementer, 0));
console.log(findContactsByCity("Mahabubnagar"));