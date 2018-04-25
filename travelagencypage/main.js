 //Initialize Sidenavbar
    const sideNav = document.querySelector(".sidenav");
M.Sidenav.init(sideNav, {
    inDuration: 500,
    outDuration: 300,
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
        "London": null,
        "San Francisco": null,
        "Tokyo": null,
        "New York": null,
        "Paris": null,
        "Dubai": null,
        "Sydney": null,
        "Venice": null,
    }
});

//Initialize Material Boxes
const mb = document.querySelectorAll(".materialboxed");
M.Materialbox.init(mb, {});

//Initialize scrollspy
const ss = document.querySelectorAll(".scrollspy");
M.Scrollspy.init(ss, {});