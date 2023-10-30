// Constructor Function : maquette (model) pour la création des objects

function user(noms, email, ...amis){
    this.noms = noms;
    this.email = email;
    this.amis = amis;
    this.login = function(){
        console.log(`${email} est connecté(e)`);
    },
    this.logout = function(){
        console.log(`${email} est deconnecté(e)`);
    }
};

// Une instance

const user1 = new user('Mama', 'mama@gmail.com', 'Loum', 'Yacine');
const user2 = new user('Rimka', 'rimka@gmail.com', 'Moha', 'Aicha');
const user3 = new user('Lola', 'lola@gmail.com', 'Jane', 'Paul');
const user4 = new user('Leila', 'baba@gmail.com', 'Makha', 'Mama');

console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);

// Accés aux methodes
user1.login();
user2.logout();