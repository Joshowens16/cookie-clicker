//Main Menu
const mainMenu = $("#main-menu");
const game = $("#game");
const playBtn = $("#menu-button");
game.hide();
mainMenu.show();

playBtn.click(function () {
  mainMenu.hide();
  game.show();
});

//Global Variables for game
let cookieCount = 0;
const htmlCookies = $("#html-counter");
const cookie = $("#cookie-img");
const granny = $("#granny");
const oven = $("#oven");
const factory = $("#factory");
const granCost = $("#gran-cost-text");
const ovenCost = $("#oven-cost-text");
const factoryCost = $("#factory-cost-text");
const cookiesPerSec = $("#cookies-per-sec");
const granStats = $("#granny-stats");
const ovenStats = $("#oven-stats");
const factStats = $("#factory-stats");
const menuBtn = $("#menu-btn");
let granIncre = 0; //how many cookies per sec produced
let granCount = 0; //# of these
let granPrice = 15;
let ovenIncre = 0; //how many cookies per sec produced
let ovenCount = 0; //# of these
let ovenPrice = 500;
let factIncre = 0; //how many cookies per sec produced
let factCount = 0; //# of these
let factPrice = 5000;

let cookieIncre = 0;
//---------------------------------------------//
//Purchases
granny.click(function () {
  if (cookieCount >= granPrice) {
    cookieIncre += 1;
    cookieCount -= granPrice;
    granPrice *= 2;
    granCount += 1;
    granCost.text(`Cost: ${granPrice} cookies, Output: 1 cookie/second`);
    granStats.text(`Grannies hired: ${granCount}`);
  } else alert("Not enough cookies!");
});
oven.click(function () {
  if (cookieCount >= ovenPrice) {
    cookieIncre += 10;
    cookieCount -= ovenPrice;
    ovenPrice *= 2;
    ovenCount += 1;
    cookieCount += ovenIncre;
    ovenCost.text(`Cost: ${ovenPrice} cookies, Output: 10 cookie/second`);
    ovenStats.text(`Ovens purchased: ${ovenCount}`);
  } else alert("Not enough cookies!");
});
factory.click(function () {
  if (cookieCount >= factPrice) {
    Incre += 50;
    cookieCount -= factPrice;
    factPrice *= 2;
    factCount += 1;
    cookieCount += factIncre;
    granCost.text(`Cost: ${factPrice} cookies, Output: 50 cookie/second`);
    factoryStats.text(`Factories purchased: ${factCount}`);
  } else alert("Not enough cookies!");
});
cookie.click(function () {
  htmlCookies.text(`Cookie count: ${(cookieCount += 1)}`);
});
setInterval(() => {
  cookieCount += cookieIncre;
  htmlCookies.text(`Cookie count: ${cookieCount}`);
  console.log(cookieIncre);
  cookiesPerSec.text(`Cookies/second: ${cookieIncre}`);
}, 1000);

menuBtn.click(function () {
  game.hide();
  mainMenu.show();
});
