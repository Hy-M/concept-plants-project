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

    const appendShopLink = _ => {
        const mdHiddenShopLink = document.querySelector(".md-hidden");
        let mdVisibleEmptyDiv = document.querySelector(".md-visible");

        mdVisibleShopLinkHTML = `
            <a href="./shop.html" class="md-nav-shop">Shop</a>
            `;

        if (window.innerWidth >= 600) {
            mdHiddenShopLink.style.display = "none";
            mdVisibleEmptyDiv.innerHTML += mdVisibleShopLinkHTML;
        } else {
            mdHiddenShopLink.style.display="block";
        }
    }


    toggleNav();
    appendShopLink();
}

main();
