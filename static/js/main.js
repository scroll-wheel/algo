const mediaQuery = window.matchMedia("(max-width: 900px)");
if (mediaQuery.matches) {
    document.querySelector(".sidebar").style.display = "none";
}

const sidebarButton = document.getElementById("sidebar-button");
sidebarButton.addEventListener("click", (e) => {
    const display = document.querySelector(".sidebar").style.display;
    if (display === "none") {
        document.querySelector(".sidebar").style.display = "block";
        document.querySelector(".sidebar").style.position = "fixed";
    }
    else {
        document.querySelector(".sidebar").style.display = "none";
    }
});

