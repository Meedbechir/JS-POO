// Prototype (_proto_) : c'est un object qui regroupe l'ensemble des methodes d'un object 

function user(noms, email, ...amis){
    this.noms = noms;
    this.email = email;
    this.amis = amis;
}
// Liaison d'une méthode au prototype
user.prototype.login = function() {
        console.log(`${email} est connecté(e)`);
    }

user.prototype.logout = function(){    
        console.log(`${email} est deconnecté(e)`);
 }

    const user1 = new user('Mahmoud Barry', 'mahmoud@email.com', 'Abou', 'Rama');
    console.log(user1);
