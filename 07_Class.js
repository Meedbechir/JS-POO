// Class : Une Maquette (model) pour créer des objects

class user {
    // Constructor : une fonction qui implémente les propriétés d'un object
    constructor(noms, email, ...amis){
        this.noms = noms;
        this.email = email;
        this.amis = amis;
    }
    login(){
        console.log(`${this.email} est connecté(e)`);
    }
    logout(){
        console.log(`${this.email} est deconnecté(e)`);
    }
};

const user1 = new user('Karim', 'karim@gmail.com', 'Moha', 'Aicha');
const user2 = new user('Leila', 'leila@gmail.com', 'Jean', 'Paul');

console.log(user1);
console.log(user2);

user1.login();
user1.logout();

user2.login();
user2.logout();