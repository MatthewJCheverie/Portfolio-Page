var sites = [
    "https://matthewjcheverie.github.io/Landing-Page/",
    "https://matthewjcheverie.github.io/Portfolio-Page/",
];

function randomSite() {
    var i = parseInt(Math.random() * sites.length)
    location.href = sites[i]
}