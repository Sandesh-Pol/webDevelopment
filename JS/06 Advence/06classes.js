class User{
    constructor(name,email)
    {
        this.name = name;
        this.email = email;
    }
    courrseList = [];
    getInfo(){
        return {name:this.name, email : this.email}
    }
    elrollCourse(name){
        this.courrseList.push(name)
    }
    getCourseList(){
        return this.courrseList;
    }

 login(){
        return "You are logged in";
    }
}

class SubAdmin extends User{
    constructor(name,email)
    {
        super(name,email)
    }
    getAdminInfo(){
        return "I am sub admin";
    }
    login(){
        return "You are logged in admin";
    }
}
module.exports = User;

const tom = new SubAdmin("Sandesh","sandeshpol@gmail.com");

console.log(tom.getAdminInfo());

console.log(tom.getInfo());

console.log(tom.login());