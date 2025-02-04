// Toutes les questions doivent faire appel à cette fonction
// Chaque question est indépendante, et se base sur ce tableau initial
function getEmployees() {
  return [
    { name: "Thomas", age: "30" },
    { name: "Theo", age: "25" },
    { name: "Philippe", age: "45" },
    { name: "Jeremy", age: "28" },
    { name: "Minnie", age: "50" },
  ];
}

module.exports = {
  // 1) Renvoyer un nouveau tableau qui ne garde que les personnes dont le nom se termine par un "e"
  B1() {
    // Implémentation ici
    var emp = getEmployees();
    return emp.filter(e => e.name.endsWith("e"));
  },

  // 2) Trouver la première personne dont l'âge est inférieur à 30
  B2() {
    // Implémentation ici
    var emp = getEmployees();
    return emp.find(e => parseInt(e.age) < 30);
  },

  // 3) Renvoyer l'index où se trouve "Jeremy"
  B3() {
    // Implémentation ici
    var emp = getEmployees();
    return emp.findIndex(e => e.name === "Jeremy");
  },

  // 4) Trier le tableau par âge des personnes
  B4() {
    // Implémentation ici
    var emp = getEmployees();
    return emp.sort((a, b) => parseInt(a.age) - parseInt(b.age));
  },

  // 5) Ajouter Kasimu à la fin du tableau, il a 38 ans, et renvoyer le tableau modifié
  B5() {
    // Implémentation ici
    var emp = getEmployees();
    emp.push({ name: "Kasimu", age: "38"} );
    return emp;
  },

  // 6) Renvoyer la longueur du tableau
  B6() {
    // Implémentation ici
    var emp = getEmployees();
    return emp.length;
  },

  // 7) Remplacer le "o" de Theo par un "a", et renvoyer le tableau modifié
  B7() {
    // Implémentation ici
    var emp = getEmployees();
    var index = emp.findIndex(e => e.name === "Theo");
    if (index !== -1) {
      emp[index].name = emp[index].name.replace("o", "a");
    }
    return emp;
  },

  // 8) Renvoyer un tableau qui ne contient que les personnes ayant au moins un "e" dans leur nom
  B8() {
    // Implémentation ici
    var emp = getEmployees();
    return emp.filter(e => e.name.includes("e"));
  },
};