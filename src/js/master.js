let mainSection = document.getElementById("mainSection");
let mainSectionChild = document.getElementById("mainSectionChild");

let mqls = [
  window.matchMedia("screen and (min-width: 0px) and (max-width: 1023px"),
  window.matchMedia("screen and (min-width: 1024px)"),
];

function test(mql) {
  if (mqls[0].matches) {
    document.getElementsByTagName("main")[0].addEventListener("scroll", (e) => {
      scrollTopScreen = e.target.scrollTop;

      mainSectionChild.style.transform = null;
    });
  } else if (mqls[1].matches) {
    document.getElementsByTagName("main")[0].addEventListener("scroll", (e) => {
      scrollTopScreen = e.target.scrollTop;

      mainSectionChild.style.transform =
        "translateX(-" +
        scrollTopScreen +
        "px) translateY(" +
        scrollTopScreen +
        "px)";
    });
  } else if (!mqls[0].matches && !mqls[1].matches) {
    document.getElementsByTagName("main")[0].addEventListener("scroll", (e) => {
      scrollTopScreen = e.target.scrollTop;

      mainSectionChild.style.transform = null;
    });
  }
}

for (let i = 0; i < mqls.length; i++) {
  test(mqls[i]);
  mqls[i].addListener(test);
}

let hamMenu = document.querySelector("#HamburgerMenu");
let hamMenuDivs = hamMenu.querySelectorAll("div");
let HamburgerContent = document.querySelector("#HamburgerContent");

let ham = 1;

hamMenu.addEventListener("click", () => {
  if (ham) {
    hamMenuDivs[0].style.top = "20px";
    hamMenuDivs[1].style.bottom = "20px";
    HamburgerContent.classList.remove("opacity-0", "invisible");
    HamburgerContent.classList.add("opacity-1", "visible");
    ham = 0;
  } else {
    hamMenuDivs[0].style.top = "15px";
    hamMenuDivs[1].style.bottom = "15px";
    HamburgerContent.classList.add("opacity-0", "invisible");
    HamburgerContent.classList.remove("opacity-1", "visible");
    ham = 1;
  }
});
