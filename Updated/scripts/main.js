//Create Vue app
let app = new Vue({
    el: '#root',
    data: {
        projects: [
            {
                screenshot: '../projects/projectpics/dna/hamburger.png',
                title: "Test Title",
                descrip: "Just a test description to fill space",
                link: "blah",
                tech: "insert tech here",
                tag: "test"
            },

            {
                screenshot: '../projects/projectpics/coin-counter/coincountercalc.png',
                title: "Coin Counter",
                descrip: "Another card to test",
                link: "blah",
                tech: "insert tech here",
                tag: "other"
            }

        ]

    },
    methods: {

    },
    beforeMount() {

    },
});
