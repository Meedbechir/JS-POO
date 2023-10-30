// Object Literal [Encapsulation]
const user = {
    noms: 'Meed Bechir',
    email: 'meed@gmail.com',
    amis: ['Iniesta', 'Xavi'],
    login(){
        console.log(`${this.email} est connecté(e)`);
    },
    logout(){
        console.log(`${this.email} est deconnecté(e)`);
    }
}

const user2 = {
    noms: 'Kalika Ba',
    email: 'kalika@gmail.com',
    amis: ['Mounty', 'Dieynaba'],
    login(){
        console.log(`${this.email} est connecté(e)`);
    },
    logout(){
        console.log(`${this.email} est deconnecté(e)`);
    }
}

console.log(user2);
console.log(user);

// Accés au propriètés d'un object
console.log(user.noms);
console.log(user.email);

console.log(user['noms']);
console.log(user['email']);

user.noms = 'Mohamed';
user['email'] = 'moha@email.fr',
console.log(user);