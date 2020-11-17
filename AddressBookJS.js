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
        const nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
        if(nameRegex.test(firstname)){
            this._firstName=firstname;
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
try{
    addressBook.push(new Contact("Krishnavamshi","Lankala","Srinivasacolony","Mahabubnagar","Telangana",509001, "91 9484949498","abc@gmail.com"));
    console.log(addressBook[0].toString());
}
catch(e){
    console.error(e);
}    
console.log(addressBook);