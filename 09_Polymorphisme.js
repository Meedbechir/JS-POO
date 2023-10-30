// Capacité d'un object à prendre plusieurs formes

class User {
    constructor(noms){
        this.noms = noms;
    }
    login(){
        console.log(`${this.noms} est connecté en tant qu'utilisateur`);
    }
}

class Admin extends User {
    login(){
        super.login();
        console.log(`${this.noms} est connecté en tant qu'admin`);
    }
}

const user1 = new User('kalika Ba');
const admin = new Admin('Mountagha Diop');

user1.login();
admin.login();
console.log(user1);
