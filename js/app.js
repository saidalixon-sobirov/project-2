/**
* @description Landing Page
* @constructor
* Author: SaidaliKhan
* Creating the Navigation bar
*/

function createNav() {

    const navItems = ['Home', 'About', 'Services', 'Portfolio', 'Prices'];

    const ul = document.querySelector('ul')

    for (let navItem of navItems) {
        let li = document.createElement("li");
        if (navItem == 'Home') {
            li.innerHTML += `<a href="#top"><p>${navItem}</p></a>`;
            li.id = navItem;
            li.className = "active box";
            ul.appendChild(li);
        }
        else {
            li.innerHTML += `<a href="#content-${navItem.toLowerCase()}"><p>${navItem}</p></a>`;
            li.id = navItem;
            li.className = "navbar-item box";
            ul.appendChild(li);
        }

    }

}

createNav();