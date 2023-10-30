// Création de User1
const nomsUtil1 = 'Meed Bechiir';
const emailUtil1 = 'meed@gmail.com';
const amisUtil1 = ['Iniesta', 'Deco'];
console.log(`Nom : ${nomsUtil1}`);
console.log(`Email : ${emailUtil1}`);
console.log(`Amis : ${amisUtil1}`);
console.log('');

// Création de User2
const nomsUtil2 = 'John Doe';
const emailUtil2 = 'John@gmail.com';
const amisUtil2 = ['Jane', 'Luck'];
console.log(`Nom : ${nomsUtil2}`);
console.log(`Email : ${emailUtil2}`);
console.log(`Amis : ${amisUtil2}`);
console.log('');

// Création de User3
const nomsUtil3 = 'Alice Doe';
const emailUtil3 = 'alice@gmail.com';
const amisUtil3 = ['mounty', 'aicha'];
console.log(`Nom : ${nomsUtil3}`);
console.log(`Email : ${emailUtil3}`);
console.log(`Amis : ${amisUtil3}`);
console.log('');

// function
function login(email){
    console.log(`${email} est connecté(e)`);
}

function logout(email){
    console.log(`${email} est deconnecté(e)`);
}

login(emailUtil1);
logout(emailUtil1);
login(emailUtil2);
login(emailUtil3);