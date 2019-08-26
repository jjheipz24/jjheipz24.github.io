//Create Vue app
let app = new Vue({
    el: '#root',
    data: {
        projects: [

            {
                img: 'imgs/CoinCounter.png',
                title: "Coin Counter",
                descrip: "A money visualizer web app created by myself and two others at RIT's BrickHackV. This app is geared towards students with special needs to assist with visualizing money and giving change. Fun fact: It won 'Best Multimedia Hack!'",
                link: "https://jjheipz24.github.io/CoinCounter",
                tech: "HTML, CSS, Javascript, Bootstrap, animate.js, Three.js, jQuery, Adobe Illustrator, Adobe Photoshop",
                tag: "coincounter"
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
