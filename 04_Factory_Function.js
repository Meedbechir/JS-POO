// Factory Function : c'est une maquette (model) pour créer des objets en JS

const user = (noms, email, ...amis) => {
    return {
        noms, email, amis,
        login(){
            console.log(`${email} est connecté(e)`);
        },
        logout(){
            console.log(`${email} est deconnecté(e)`);
        }
    }
}

const user1 = user('Meed', 'meed@gmail.com', 'Cheikh', 'Totti');
const user2 = user('Karim', 'karim@gmail.com', 'Moha', 'Aicha');
const user3 = user('Leila', 'leila@gmail.com', 'Jean', 'Paul');

console.log(user1);
console.log(user2);
console.log(user3);

user1.login();
user1.logout();

user2.login();
user2.logout();