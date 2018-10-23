//import jump library.
import jump from "../node_modules/jump.js/dist/jump.module.js";

//Initialize sideNavbar
const sideNav = document.querySelector(".sidenav");
M.Sidenav.init(sideNav, {
  inDuration: 500,
  outDuration: 300
});

//Initialize Slider
const slider = document.querySelector(".slider");
M.Slider.init(slider, {
  indicators: false,
  height: 500,
  transition: 500,
  interval: 6000
});

//Initialize Autocomplete functionality.
const ac = document.querySelector(".autocomplete");
M.Autocomplete.init(ac, {
  data: {
    "Bora Bora": null,
    London: null,
    "San Francisco": null,
    Tokyo: null,
    "New York": null,
    Paris: null,
    Dubai: null,
    Sydney: null,
    Venice: null
  }
});

//Initialize Material Boxes
const mb = document.querySelectorAll(".materialboxed");
M.Materialbox.init(mb, {});

//Initialize scrollspy
// const ss = document.querySelectorAll(".scrollspy");
// M.Scrollspy.init(ss, {});

//Code Below is to use jump.js library

const link1 = document.querySelector("#link1");
const link2 = document.querySelector("#link2");
const link3 = document.querySelector("#link3");
const link4 = document.querySelector("#link4");
const link5 = document.querySelector("#link5");

link1.addEventListener("click", () => {
  jump(".target1", {
    duration: 2000,
    offset: -100
  });
});

link2.addEventListener("click", () => {
  jump(".target2", {
    duration: 1500,
    offset: -60
  });
});

link3.addEventListener("click", () => {
  jump(".target3", {
    duration: 1500,
    offset: -35
  });
});

link4.addEventListener("click", () => {
  jump(".target4", {
    duration: 1500,
    offset: -100
  });
});

link5.addEventListener("click", () => {
  jump(".target5", {
    duration: 2000,
    offset: -90
  });
});
