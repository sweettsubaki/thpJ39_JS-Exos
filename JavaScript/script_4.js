const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];


// Les seventies ! -----------------------------------------------------------------------

  console.log("Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70");

  let seventies = []

  entrepreneurs.forEach(function (index) {
      if(index.year >= 1970 && index.year < 1980){
          seventies.push(index);
      }
  });
  console.log(seventies)

// Les prénoms et les noms !  ----------------------------------------------------------------

console.log("Sors une array qui contient le prénom et le nom des entrepreneurs")
let fullName = []

entrepreneurs.forEach(function (index){
    fullName.push([index.first, index.last]);
});

console.log(fullName);
  
// L'âge de ces entrepreneurs aujourd'hui ! 

console.log("Quel âge aurait chaque inventeur aujourd'hui ?")

let wasBorn = []

entrepreneurs.forEach(function (index){
    wasBorn.push([index.first, index.last, (2021 - index.year)]);
});
console.log(wasBorn);


// Trie les entrepreneurs par ordre alphabétique du nom de famille.

console.log("Trie les entrepreneurs par ordre alphabétique du nom de famille.");

entrepreneurs.sort(function (a, b){

    if (a.last > b.last) {
        return 1;
    } else if(a.last < b.last) {
        return -1;
    } else {
        return 0;
    }

});

console.log(entrepreneurs);

console.log("FIN !");

  /*
  Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70 ;
  Sors une array qui contient le prénom et le nom des entrepreneurs ;
  Quel âge aurait chaque inventeur aujourd'hui ?
  Trie les entrepreneurs par ordre alphabétique du nom de famille.*/
