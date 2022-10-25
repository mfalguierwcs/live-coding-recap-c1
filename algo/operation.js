/* la fonction soustraction prend 2 nombres en paramètre. 
Elle doit retourner le résultat de la soustraction si il est 
supérieur à 0 et si c'est bien un nombre sinon false */

const soustraction = (a, b) => {
    const result = a - b;
    if (result > 0) {
        return result
    } else {
        return false
    }
}

module.exports = soustraction
