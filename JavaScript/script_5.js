const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];

  console.log(books)

  //Est-ce que tous les livres ont été au moins empruntés une fois ?
  
  console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");

  var count = 0;
  books.forEach(function (index){
      if (index.rented >= 1){
          count++;
      }
      return count;
  });
  
  if (count === books.length){
    console.log("Tout les livres on été empruntés !");
  } else {
      console.log("Tout les livres n'ont pas été empruntés !"); // Change a rented value to see if it works properly !
  }
  
  //Quel est livre le plus emprunté ?
  console.log("Quel est livre le plus emprunté ?");

  books.sort(function (b, a){
      if (a.rented > b.rented){
          return 1;
      } else if(a.rented < b.rented){
          return -1;
      } else {
          return 0;
      }
  });
  console.log(`Le livre le plus empruntés est :  ${books[0].title} avec ${books[0].rented} emprunt !`);
  
  //Quel est le livre le moins emprunté ?
  console.log("Quel est le livre le moins emprunté ?");

  books.sort(function(a, b){
      if (a.rented > b.rented){
          return 1;
      } else if (a.rented < b.rented){
          return -1;
      } else {
          return 0;
      }
  });
  console.log(`Le livre le mois empruntés est : ${books[0].title} avec ${books[0].rented} emprunt !`);
  
  //Trouve le livre avec l'ID: 873495 ;
  console.log("Trouve le livre avec l'ID: 873495 ");

  books.find(function (index){
      if (index.id === 873495){
          console.log(`Le livre qui a l'id n˚873495 est : ${index.title}`);
      }
  });
  
  //Supprime le livre avec l'ID: 133712 ;
  console.log("Supprime le livre avec l'ID: 133712");

  books.forEach(function (index){
      index.id === 133712 ? books.splice(books.indexOf(index), 1) : "";
  });

  console.log(books);
  
  //Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).
  console.log("Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).")

  books.sort(function (a, b){
      if (a.title > b.title){
          return 1;
      } else if (a.title < b.title){
          return -1;
      } else {
          return 0;
      }
  });
  console.log(books);