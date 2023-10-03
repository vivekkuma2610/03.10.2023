class Persondetails{
    constructor(name, age, address, phoneNumber, email, pannumber) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.pannumber = pannumber
    }
    getName()
     {return this.name; }
    getAge()
     {return this.age;}
    getAddress()
     { return this.address;}
    getPhoneNumber() 
    {return this.phoneNumber;}
    getEmail() 
    {return this.email;}
    getpannumber() 
    {return this.pannumber;}
    setName(name) 
    {this.name = name;}
    setAge(age) 
    {this.age = age;}
    setAddress(address) 
    {this.address = address;}
    setPhoneNumber(phoneNumber) 
    {this.phoneNumber = phoneNumber;}
    setEmail(email) 
    { this.email = email; }
    setpannumber() 
    { return this.pannumber;}
}
let persondetails1 = new Persondetails("vivek kumar ", 30, "10 Malayathamman koil street ,chennai, tamilnadu", "9003159788", "vivekpanneer2610@gmail.com", "ehbf374");
console.log("Name:", persondetails1.getName());
console.log("Age:", persondetails1.getAge());
console.log("Address:", persondetails1.getAddress());
console.log("Phone Number:", persondetails1.getPhoneNumber());
console.log("Email:", persondetails1.getEmail());
console.log("pannumber:", persondetails1.getpannumber());
