//Create Vue app
let app = new Vue({
    el: '#root',
    data: {
        projects: [
            {
                img: 'imgs/dna.png',
                title: "DNA Portal",
                descrip: "For my internship at MassMutual, I worked on the UI for their Finance Data and Analytics Portal. This portal allows for a more efficient way for use-case owners and businesses to access and report finance data.",
                link: "#",
                tech: "HTML, CSS, Angular.js",
                tag: "dna"
            },

            {
                img: 'imgs/CoinCounter.png',
                title: "Coin Counter",
                descrip: "A money visualizer web app created by myself and two others at RIT's BrickHackV. This app is geared towards students with special needs to assist with visualizing money and giving change. Fun fact: It won 'Best Multimedia Hack!'",
                link: "https://jjheipz24.github.io/CoinCounter",
                tech: "HTML, CSS, Javascript, Bootstrap, animate.js, Three.js, jQuery, Adobe Illustrator, Adobe Photoshop",
                tag: "coincounter"
            },

            {
                img: 'imgs/ocean.png',
                title: "Sea What You Did",
                descrip: "An interactive graphic made by myself and a partner that helps children learn about ocean pollution in a fun, easy way. It addresses the effects of trash, oil, and chemical spills on the plant and animal life of the ocean and on us as humans.",
                link: "https://jjheipz24.github.io/ocean-project/index.html",
                tech: "HTML, CSS, Javascript, hexi.js, Particle.js, Adobe Illustrator",
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
