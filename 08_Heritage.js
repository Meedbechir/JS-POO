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
}

// Heritage des propriétés et des fonctions
class Admin extends user {
    // Methode accessible uniquement aux admins
    supprimerUtilisateurs(user){
        users= users.filter(x => {
            return x.email != user.email
        });
    }
}

const user1 = new user('Karim', 'karim@gmail.com', 'Moha', 'Aicha');
const user2 = new user('Leila', 'leila@gmail.com', 'Jean', 'Paul');
const admin = new Admin('Paul', 'paul@gmail.com', 'Lingard', 'Matuidi');

let users = [user1, user2, admin];
console.log(users);

admin.supprimerUtilisateurs(user1);
console.log(users);