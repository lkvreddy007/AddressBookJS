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
    set firstName(firstname){
        this._firstName=firstname;
    }

    get lastName(){
        return this._lastName;
    }
    set lastName(lastName){
        this._lastName=lastName;
    }

    get address(){
        return this._address;
    }
    set address(address){
        this._address=address;
    }

    get state(){
        return this._state;
    }
    set state(state){
        this._state=state;
    }

    get zip(){
        return this._zip;
    }
    set zip(zip){
        this._zip=zip;
    }

    get phone(){
        return this._phone;
    }
    set phone(phone){
        this._phone=phone
    }

    get email(){
        return this._email;
    }
    set email(email){
        this._email=email;
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
let contact = new Contact("Krishna Vamshi","Lankala","Srinivasa Colony","Mahabubnagar","Telangana",509001,9484949498,"abc@gmail.com");
console.log(contact.toString());