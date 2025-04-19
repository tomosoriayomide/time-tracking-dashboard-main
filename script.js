let weekvalue = document.getElementById("weak");
let day = document.getElementById("daily");
let month = document.getElementById("monthly");
let pg2 = document.getElementById("hrdaily");
let pg2a = document.getElementById("hrdailys");
let pg3 = document.getElementById("hrmonthly");
let pg3a = document.getElementById("hrmonthlys");
let pg4 = document.getElementById("hrweek");
let pg4a = document.getElementById("hrweeks");
let pg5 = document.getElementById("hrweek2");
let pg5a = document.getElementById("hrweeks2");
let pg6 = document.getElementById("hrdaily2");
let pg6a = document.getElementById("hrdailys2");
let daily1 = document.getElementById("hrdaily3");
let daily2 = document.getElementById("hrdailys3");
let daily1a = document.getElementById("hrdaily4");
let daily2a = document.getElementById("hrdailys4");
let week1 = document.getElementById("hrweek3");
let week2 = document.getElementById("hrweeks3");
let monthly1 = document.getElementById("hrmonthly2");
let monthly2 = document.getElementById("hrmonthlys2");
let monthly1a = document.getElementById("hrmonthly3");
let monthly2a = document.getElementById("hrmonthlys3");
let monthly1b = document.getElementById("hrmonthly4");
let monthly2b = document.getElementById("hrmonthlys4");
let week1a = document.getElementById("hrweek4");
let week2a = document.getElementById("hrweeks4");
let weekstudy = document.getElementById("hrweek5");
let daystudy = document.getElementById("hrdaily5");
let monthstudy = document.getElementById("hrmonthly5");
let numweek = document.getElementById("numweek");
let numday = document.getElementById("numday");
let nummonth = document.getElementById("nummonth");
let lastday = document.getElementById("finally");
let lastweek = document.getElementById("final");
let lastmonth = document.getElementById("done");
let weeklast = document.getElementById("weeklast");
let daylast = document.getElementById("daylast");
let monthlast = document.getElementById("monthlast");
// let trial = document.getElementsByClassName("hrs");

function daily() {
  weeklast.style.display = "none";
  daylast.style.display = "block";
  monthlast.style.display = "none";
  lastday.style.display = "block";
  lastweek.style.display = "none";
  lastmonth.style.display = "none";
  weekstudy.style.display = "none";
  monthstudy.style.display = "none";
  daystudy.style.display = "block";
  // let pg2b = document.getElementById("hrdailyprevious")
  pg2.style.display = "block";
  pg2a.style.display = "block";
  daily1.style.display = "block";
  daily2.style.display = "block";
  pg3.style.display = "none";
  pg3a.style.display = "none";
  week1.style.display = "none";
  week2.style.display = "none";
  pg4.style.display = "none";
  pg4a.style.display = "none";
  pg5.style.display = "none";
  pg5a.style.display = "none";
  monthly1.style.display = "none";
  monthly2.style.display = "none";
  monthly1a.style.display = "none";
  monthly2a.style.display = "none";
  monthly2b.style.display = "none";
  monthly1b.style.display = "none";
  week1a.style.display = "none";
  week2a.style.display = "none";
  daily1a.style.display = "block";
  daily2a.style.display = "block";
  numweek.style.display = "none";
  nummonth.style.display = "none";
  numday.style.display = "block";
  //   monthly1b.style.display = "none";
  //   monthly2b.style.display = "none";
  // monthly1b.style
  pg6.style.display = "block";
  pg6a.style.display = "block";

  day.style.color = "white";
  month.style.color = "hsl(235, 45%, 61%)";
  weekvalue.style.color = "hsl(235, 45%, 61%)";
  // `<p id="hrdaily">This is me</p>`;

  // "hsl(235, 45%, 61%)";
}

function week() {
  weeklast.style.display = "block";
  daylast.style.display = "none";
  monthlast.style.display = "none";
  lastday.style.display = "none";
  lastweek.style.display = "block";
  lastmonth.style.display = "none";
  weekstudy.style.display = "block";
  monthstudy.style.display = "none";
  daystudy.style.display = "none";
  numday.style.display = "none";
  nummonth.style.display = "none";
  numweek.style.display = "block";
  pg2.style.display = "none";
  pg2a.style.display = "none";
  pg3.style.display = "none";
  pg3a.style.display = "none";
  pg4.style.display = "block";
  pg4a.style.display = "block";
  pg5.style.display = "block";
  pg5a.style.display = "block";
  pg6.style.display = "none";
  pg6a.style.display = "none";
  daily1.style.display = "none";
  daily2.style.display = "none";
  monthly1.style.display = "none";
  monthly2.style.display = "none";
  monthly1a.style.display = "none";
  monthly2a.style.display = "none";
  week1.style.display = "block";
  week2.style.display = "block";
  monthly2a.style.display = "none";
  monthly2b.style.display = "none";
  monthly1b.style.display = "none";
  week1a.style.display = "block";
  week2a.style.display = "block";
  daily1a.style.display = "none";
  daily2a.style.display = "none";
  weekvalue.style.color = "white";
  day.style.color = "hsl(235, 45%, 61%)";
  month.style.color = "hsl(235, 45%, 61%)";

  // weeks.style.color = "red";
  // weeks.style.color = "red";
}

function monthly() {
  weeklast.style.display = "none";
  daylast.style.display = "none";
  monthlast.style.display = "block";
  lastday.style.display = "none";
  lastweek.style.display = "none";
  lastmonth.style.display = "block";
  weekstudy.style.display = "none";
  monthstudy.style.display = "block";
  daystudy.style.display = "none";
  numday.style.display = "none";
  numweek.style.display = "none";
  nummonth.style.display = "block";
  pg2.style.display = "none";
  pg2a.style.display = "none";
  pg3.style.display = "block";
  pg3a.style.display = "block";
  pg4.style.display = "none";
  pg4a.style.display = "none";
  daily1.style.display = "none";
  daily2.style.display = "none";
  week1.style.display = "none";
  week2.style.display = "none";
  pg5.style.display = "none";
  pg5a.style.display = "none";
  pg6.style.display = "none";
  pg6a.style.display = "none";
  monthly1.style.display = "block";
  monthly2.style.display = "block";
  monthly1a.style.display = "block";
  monthly2a.style.display = "block";
  monthly1b.style.display = "block";
  monthly2b.style.display = "block";
  week1a.style.display = "none";
  week2a.style.display = "none";
  daily1a.style.display = "none";
  daily2a.style.display = "none";
  month.style.color = "white";
  day.style.color = "hsl(235, 45%, 61%)";
  weekvalue.style.color = "hsl(235, 45%, 61%)";
}
let loaderfill = document.getElementById("loaderfill");
let fw = 100;
let cw = 0;
function load() {
  if (cw < fw) {
    cw += 0.5;
    loaderfill.style.width = cw + "%";
    setTimeout(load, 100);
    //   console.log("clg")
  }
}
window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  const page = document.getElementById("cont");
  setTimeout(() => {
    preloader.style.display = "none";
    page.style.display = "content";
  }, 22000);
});
onload = load;
