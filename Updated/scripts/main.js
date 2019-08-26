//Create Vue app
let app = new Vue({
    el: '#root',
    data: {
        projects: [
            {
                img: '../projects/projectpics/dna/hamburger.png',
                title: "Test Title",
                descrip: "Just a test description to fill space",
                link: "blah",
                tech: "insert tech here",
                tag: "test"
            },

            {
                img: 'imgs/CoinCounter.png',
                title: "Coin Counter",
                descrip: "Another card to test",
                link: "blah",
                tech: "insert tech here",
                tag: "other"
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
