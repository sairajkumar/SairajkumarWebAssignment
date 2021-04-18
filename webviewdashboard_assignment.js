let dashboardEl = document.getElementById("dashboard");
let mobiledashboardMenuEl = document.getElementById("mobileDashboardMenu");
let dropButton = document.getElementById("dropButton");
let dropContent = document.getElementById("myDropdown");
let closeAlert = document.getElementById("alertClose");
let alertCard = document.getElementById("alertCard");
let buyInputEl = document.getElementById("buyInput");
let buyCoinsEl = document.getElementById("buyCoins");
let sellInputEl = document.getElementById("sellInput");
let sellCoinsEl = document.getElementById("sellCoins");
let menuCloseEl = document.getElementById("mobilemenuClose");
let walletIconEl = document.getElementById("walletIcon");
let mobileDashboardEl = document.getElementById("mobileDashboard");
let webViewEl = document.getElementById("webView");
let mobileViewEl = document.getElementById("mobileView");
let profileImgEl = document.getElementById("profileImage");
let mobileProfileEl = document.getElementById("mobileProfileSection");
let closeProfileEl = document.getElementById("closeProfile");
let mobileBuyInput = document.getElementById("mobileBuyInput");
let mobileBuyCoins = document.getElementById("mobileBuyCoins");
let mobileSellInput = document.getElementById("mobileSellInput");
let mobileSellCoins = document.getElementById("mobileSellCoins");

let buyClick = false;
let sellClick = false;
let mobileBuyClick = false;
let mobileSellClick = false;

function changeView() {
    webViewEl.classList.add("close")


    mobileViewEl.classList.remove("mobile-view")

}

function myFunction() {
    dropContent.classList.toggle("show");
    dropButton.classList.toggle("rotate");
}

closeAlert.onclick = function() {
    alertCard.classList.add("close");
}


menuCloseEl.onclick = function() {
    mobiledashboardMenuEl.classList.add("close");
    mobileDashboardEl.classList.remove("close");
}
walletIconEl.onclick = function() {
    mobiledashboardMenuEl.classList.remove("close");
    mobileDashboardEl.classList.add("close");
}
profileImgEl.onclick = function() {
    mobileProfileEl.classList.remove("close");
    mobileViewEl.classList.add("close");
}
closeProfileEl.onclick = function() {
    mobileProfileEl.classList.add("close");
    mobileViewEl.classList.remove("close");
}

buyInputEl.onclick = function() {
    if (buyCoinsEl.textContent == "0") {
        buyCoinsEl.textContent = "100000";
    } else {
        buyCoinsEl.textContent = "0";
    }

}
sellInputEl.onclick = function() {
    if (sellCoinsEl.textContent == "0") {
        sellCoinsEl.textContent = "100000";
    } else {
        sellCoinsEl.textContent = "0";
    }

}





mobileBuyInput.onclick = function() {
    let buyCoinsValue = mobileBuyCoins.textContent
    if (buyCoinsValue == "0") {
        mobileBuyCoins.textContent = "100000";
    } else {
        mobileBuyCoins.textContent = "0";
    }

}
mobileSellInput.onclick = function() {
    let sellCoinsValue = mobileSellCoins.textContent
    if (sellCoinsValue == "0") {
        mobileSellCoins.textContent = "100000";
    } else {
        mobileSellCoins.textContent = "0";
    }

}