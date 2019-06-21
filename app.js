function main() {
    const navMenu = document.querySelector(".nav-menu");

    const toggleNav = _ => {
        const hamburgerEl = document.querySelector(".nav-toggler");
        const contentEl = document.querySelector(".content");

        hamburgerEl.addEventListener("click", _ => {
            navMenu.classList.toggle("nav-open");
            contentEl.classList.toggle("content-shift");
        })
    }

    const hiddenShopLink = document.querySelector(".md-hidden");
    let visibleEmptyDiv = document.querySelector(".md-visible");

    let visibleShopLinkHTML = `
            <a href="./shop.html" class="md-nav-shop">Shop</a>
            `;

    const w = window.matchMedia("(min-width: 600px)");

    const checkMediaQueries = (w) => {
        if (w.matches) {
            hiddenShopLink.style.display = "none";
            visibleEmptyDiv.innerHTML += visibleShopLinkHTML;
        } else {
            hiddenShopLink.style.display = "block";
            visibleEmptyDiv.innerHTML = "";
        }
    }

    toggleNav();
    w.addEventListener("change", checkMediaQueries);
    document.addEventListener("onload", checkMediaQueries);
}

main();


// function myFunction(x) {
//   if (x.matches) { // If media query matches
//     document.body.style.backgroundColor = "yellow";
//   } else {
//     document.body.style.backgroundColor = "pink";
//   }
// }

// var x = window.matchMedia("(max-width: 700px)")
// myFunction(x) // Call listener function at run time
// x.addListener(myFunction) // Attach listener function on state changes