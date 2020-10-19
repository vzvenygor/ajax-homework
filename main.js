// 1. Створити сайт використовуючи swapi.dev. вибрати 1 з 6 проперті (films, characters etc..)
// і зробити запит по них, вибрати одну з перших проперті що отримаєте і витягнувши з неї "url" - отримати конкретну
// (планету,фільм, персонажа) з всією інформацією про нього. 
// Додати кнопку при натисканні на яку вивести всю наявну інформацію на екран красиво структуровано. 

let list = document.getElementById('nav-list');

fetch('https://swapi.dev/api/films/')
  .then(response => response.json())
  .then(data => {
    let films = data.results;
      for(i = 0; i < films.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = films[i].title;
        li.id = 'li' + [i];
        list.appendChild(li);
      }

      let infoList = document.getElementById('info');
      let navClick = document.getElementById('li0');
      navClick.onclick = function () {
        let btnChar = document.createElement('button');
        btnChar.innerText = 'Show Characters';
        
        infoList.appendChild(btnChar);

        let details = document.getElementById('details');

        btnChar.onclick = function () {
          fetch('https://swapi.dev/api/people/')
          .then(response => response.json())
          .then(people => {
            let char = people.results;
              for(j = 0; j < char.length; j++) {
                let li = document.createElement('li');
                li.innerHTML = char[j].name;
                let moreInfo = document.createElement('button');
                moreInfo.innerText = 'Show More';
                moreInfo.className = 'more-info-btn';
                li.appendChild(moreInfo);
                details.appendChild(li);

                moreInfo.onclick = function () {
                  for(key in char[0]) {
                    let showMore = document.createElement('li');
                    showMore.innerHTML = `${key} : ${char[0][key]}`;
                    li.appendChild(showMore);
                  }
                }
              }
          });
        }
      }
  });

// 2. Використовуючи параметр серч, розробити сайт який буде з допомогою інпута робити пошук 
// за конкретним параметром і виводити дані на сторінку. 
// (якщо 1 знахідка - вивести всю інфу про айтем, якщо більше 1 то вивести список по філду).

// let node = null;
// let input = document.getElementById('input');
// let mainUrl = 'https://swapi.dev/api/people/?search='+input;
// let info = document.getElementById('info');

// window.onload = function () {
//   node = fetch(mainUrl)
//     .then(response => response.json())
//     .then(result => node = result);
// };

// function showPeople() {
//   let result = node.results;
//   console.log(mainUrl)
//   console.log(input.value)
//   for(x = 0; x < result.length; x++) {
//     if(result[x] == input.value) {
//       console.log(result[x])
//       let li = document.createElement('li');
//       li.innerText = result.name;
//       info.appendChild(li)
//     }
//   }
// };

// На другому завданні я загруз((