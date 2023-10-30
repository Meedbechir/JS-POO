// Abstraction : se baser sur l'essentiel et non sur le détail

function Employee(noms, age, sexe, salaire){
    this.noms = noms;
    this.age = age;
    this.sexe = sexe;
    this.salaire = salaire;

    // Details
    const allocation = 5000;
    const primeDeRisque = 800;
    const calculSalaire = function(){
        console.log(`Le Salaire final: ${salaire + allocation + primeDeRisque}`);
    }

    this.infoEmployee = function(){
        console.log(`Noms: ${this.noms}`);
        console.log(`Age: ${this.age}`);
        console.log(`Sexe: ${this.sexe}`);
        console.log(`Salaire: ${this.salaire}`);
        calculSalaire(); 
    }
};

// L'instance

const employee1 = new Employee('Michael Jordan', 38, 'M', 60000);
const employee2 = new Employee('Patricia Henderson', 48, 'F', 40000);

// L'essentiel
employee1.infoEmployee();
employee2.infoEmployee();