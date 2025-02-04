
// Pour ce fichier, toutes les questions à partir de Q1 nécessitent d'appeler cette fonction pour récupérer sa valeur
function getArray() {
  return [12, 7, 6, 15, 41, 24, 13];
}

module.exports = {
  // Renvoyer la valeur true depuis la fonction
  Q0() {
    return true;
  },

  //1) Récupérer le tableau depuis getArray() et renvoyer un nouveau tableau ne contenant que les valeurs supérieures ou égales à 15 
  // en utilisant une méthode de tableau
  Q1() {
    //let sa porter est que dans block( les crochets {})
    //var classique
    //const equivalent d'une constante
    var liste = getArray();
    var liste_result = [];
    for(let i = 0;i<liste.length;i++){
     
      if(liste[i]>=15){
        liste_result.push(liste[i]);
      }

    }
    return liste_result;
    // Implémentation ici
  },

  //2) Renvoyer l'index de la première valeur strictement inférieure à 7
  Q2() {

    var liste = getArray();
    
    for(let i = 0;i<liste.length;i++){
     
      if(liste[i]<7){
        return i;
      }

    }
    return -1;
    // Implémentation ici
  },

  //3) Inverser le tableau en utilisant une méthode spécifiquement prévue à cet effet. Renvoyez ce tableau inversé
  Q3() {
    var liste = getArray();
    return liste.reverse();
    
    // Implémentation ici
  },

  //4) Trier le tableau dans l'ordre croissant, renvoyez le tableau trié
  Q4() {
    // Implémentation ici
    var liste = getArray();
    const compareFn = (a, b) => (a-b);
    return liste.sort(compareFn);

  },

  //5) Ajouter la valeur 0 en premier index du tableau, renvoyez le tableau modifié
  Q5() {
    // Implémentation ici
    var liste = getArray();
    var liste_result = [0];
    return liste_result.concat(liste);


  },

  //6) Faire la somme des éléments du tableau avec une boucle for. Renvoyez la somme
  Q6() {
    // Implémentation ici
    var liste = getArray();
    var somme = 0;
    for(let i = 0;i<liste.length;i++){
      somme = somme +liste[i];
    }
    return somme;
  },

  //7) Faire la somme des éléments du tableau avec une méthode spécifique de tableau (reduce), renvoyez la somme
  Q7() {
    // Implémentation ici
    var liste = getArray();
    // 0 + 1 + 2 + 3 + 4
    const initialValue = 0;
    const sumWithInitial = liste.reduce(
    (accumulator, currentValue) => accumulator + currentValue,initialValue,
    );
  return sumWithInitial;
  },

  //8) Remplacer la troisième valeur du tableau par "ici", renvoyez le tableau
  Q8() {
    // Implémentation ici
       
       var liste = getArray();
       var value = "ici";
       for(let i = 0;i<liste.length;i++){
         if(i==2){
          liste[i] = value;
         }
       }
       return liste;
  },

  //9) Retirer le dernier index, renvoyez le tableau
  Q9() {
    // Implémentation ici
    var liste = getArray();
   liste.pop();
    return liste;

  },

  //10) Renvoyez le type de la variable ARRAY
  Q10() {
    // Implémentation ici
    var liste = getArray();

    return (typeof liste);
  },

  //11) En utilisant une méthode spécifique aux tableaux, renvoyer un booléen vérifiant que le résultat de getArray() est bien un tableau
  Q11() {
    // Implémentation ici
    var liste = getArray();
    var isArray = Array.isArray(liste);
    return isArray;

  },

  //12) Renvoyer le tableau sous forme de chaîne de caractère où les éléments sont séparés par un tiret (-)
  Q12() {
    // Implémentation ici
    var liste = getArray();
 
    return  liste.join('-');
  },

  //13) Renvoyer le tableau en gardant uniquement les 2 derniers éléments
  Q13() {
    // Implémentation ici
    var liste = getArray();
    var value = [];
    for(let i = 0;i<liste.length;i++){
      
      if(i== liste.length - 1){
        value[1] = liste[i];
       }
       if(i== liste.length-2){
        value[0] = liste[i];
      }
    }
    return value;

  }
};
