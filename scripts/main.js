//Create Vue app
let app = new Vue({
    el: '#root',
    data: {
        projects: [
            {
                img: 'imgs/shmood.png',
                title: "shmood",
                descrip: "A personalized mood board creation site. People can upload their own images to create their mood boards, and they can also see a public mood board on the home page, which is generated from images uploaded by other users.",
                link: "https://shmood.herokuapp.com/",
                tech: "HTML, CSS, React, Node.js, Redis, mongoDB, Handlebars, Bootstrap, Express",
                tag: "shmood"
            },
            {
                img: 'imgs/dna.png',
                title: "DNA Portal",
                descrip: "For my internship at MassMutual, I worked on the UI for their Finance Data and Analytics Portal. This portal allows for a more efficient way for use-case owners and businesses to access and report finance data.",
                link: "https://jjheipz24.github.io/mm.html",
                tech: "HTML, CSS, Angular.js",
                tag: "dna"
            },

            {
                img: 'imgs/CoinCounter.png',
                title: "Coin Counter",
                descrip: "A money visualizer web app created at RIT's BrickHackV. This app is geared towards students with special needs to assist with visualizing money and giving change. Fun fact: It won 'Best Multimedia Hack!'",
                link: "https://jjheipz24.github.io/CoinCounter",
                tech: "HTML, CSS, JavaScript, Bootstrap, animate.js, Three.js, jQuery, Adobe Illustrator, Adobe Photoshop",
                tag: "coincounter"
            },

            {
                img: 'imgs/bookWatch.png',
                title: "bookWatch",
                descrip: "A web application that allows a user to search for a book and get movie recommendations based on the book",
                link: "https://jjheipz24.github.io/IGME330-Project2/index.html",
                tech: "HTML, CSS, JavaScript, Vue.js, Bootstrap, OpenLibrary API, TasteDive API, OMDb API, Firebase",
                tag: "bookWatch"
            },

            {
                img: 'imgs/ocean.png',
                title: "Sea What You Did",
                descrip: "An interactive graphic that helps children learn about ocean pollution in a fun, easy way. It addresses the effects of trash, oil, and chemical spills on the plant and animal life of the ocean and on us as humans.",
                link: "https://jjheipz24.github.io/ocean-project/index.html",
                tech: "HTML, CSS, JavaScript, hexi.js, Particle.js, Adobe Illustrator",
                tag: "ocean"
            },

        ]
    },
    methods: {

    },
    beforeMount() {

    },
});

$(document).ready(function () {
    $(this).scrollTop(0);
});

/*Controls parallax*/
$(".paroller").paroller();
$(".jumbo-container").paroller({
    factor: 0.2,
    factorXs: 0.2,
    type: 'foreground',
    direction: 'vertical'
});

$(".mm-header").paroller({
    factor: 0.2,
    factorXs: 0.2,
    type: 'foreground',
    direction: 'vertical'
});

$(".mm-doc").paroller({
    factor: 0.2,
    factorXs: 0.2,
    type: 'foreground',
    direction: 'vertical'
});


/*Controls card flip*/
$("#goals").flip({
    trigger: 'hover'
});
$("#skills").flip({
    trigger: 'hover'
});
$("#facts").flip({
    trigger: 'hover'
});
