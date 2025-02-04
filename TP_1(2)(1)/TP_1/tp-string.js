const email = "test.test@email.com";

module.exports = {
  // 1) Séparer l'email en deux parties au niveau du caractère '@', renvoyer le tableau correspondant
  Q1() {
    // Implémentation ici
    array = email;
    return array.split('@');
  },

  // 2) Vérifier qu'il n'y a qu'un seul caractère '@' dans email. Renvoyer un booléen
  Q2() {
    // Implémentation ici
    
    array = email.split('');
      var count = 0;
      var result = true;
      for(var i = 0;i<array.length;i++){
        if(array[i] == '@'){
          count++;
        }
    }
if(count != 1){return false;}
return true;

  },

  // 3) Renvoyer l'index du caractère '@'
  Q3() {
    // Implémentation ici
    array = email;
   var index = array.indexOf('@');
   return index;

  },

  // 4) Renvoyer la sous-chaîne se situant après le caractère '@'
  Q4() {
    // Implémentation ici
  

  
  array = email.split('@');
  return array[1];

  },

  // 5) Renvoyer la variable en majuscule
  Q5() {
    // Implémentation ici
    array = email;
    return array.toUpperCase();

  },

  // 6) Renvoyer le type de la variable email
  Q6() {
    // Implémentation ici
    array = email;

    return (typeof array);
  },

  // 7) Changez email.com par gmail.com, renvoyez la chaine modifiée
  Q7() {
    // Implémentation ici
    var g = 'gmail.com';
    array = email.split('@');
    array.pop();
  
    array[1] = g;
    return array.join('@');
  }
};