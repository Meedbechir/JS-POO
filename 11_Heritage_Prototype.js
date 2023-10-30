// Prototype (_proto_) : c'est un object qui regroupe l'ensemble des methodes d'un object 

function user(noms, email, ...amis){
    this.noms = noms;
    this.email = email;
    this.amis = amis;
}

function Admin(...params){
    // Héritage des proprietés
    user.apply(this, params);
}


// Liaison d'une méthode au prototype
user.prototype.login = function() {
        console.log(`${email} est connecté(e)`);
 }

user.prototype.logout = function(){    
        console.log(`${email} est deconnecté(e)`);
}

// Heritage des prototypes (methodes)
Admin.prototype = Object.create(user.prototype);

// fonction accessible uniquement par l'admin
Admin.prototype.supprimerUtilisateur = function(x){
    users = users.filter(user => {
        return user.email != x.email;
    });
}

const user1 = new user('Karim', 'karim@gmail.com', 'Moha', 'Aicha');
const user2 = new user('Leila', 'leila@gmail.com', 'Jean', 'Paul');
const user3 = new user('Aicha', 'aicha@gmail.com', 'Mady', 'Paul');
const admin = new Admin('Paul', 'paul@gmail.com', 'Lingard', 'Matuidi');

let users = [user1, user2, user3, admin];

console.log(users);

admin.supprimerUtilisateur(user1)
console.log(users);


