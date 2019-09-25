//figure out how to make array of objects that consist of the key and the value
let app = new Vue({
    el: '#admin',
    data: {
        //-------------TABLE DATA--------------------
        allQueries: [], //array to hold all searches
        counts: {}, //object to add searches and counter
        filteredSearches: [], //array of search results without repeats
        numSearches: [], //array to hold the amount each search appeared
        finalArray: [], //array to hold the final formatted search results
        // Initialize Firebase
        config: {
            apiKey: "AIzaSyB9rzeXc4ZlRJDIAXSJfxYp4ObIPRLawa8",
            authDomain: "bookwatch-c8fbb.firebaseapp.com",
            databaseURL: "https://bookwatch-c8fbb.firebaseio.com",
            projectId: "bookwatch-c8fbb",
            storageBucket: "bookwatch-c8fbb.appspot.com",
            messagingSenderId: "894052480603"
        },
        database: '',
        ref: '',
        obj: '',
        row: '',
        line: '',

        //----------------------WORD CLOUD--------------------
        canvas: ' ',
        ctx: '',
        fSize: ' '
    },
    mounted() {
        this.startUp();

    },
    methods: {
        //Initializes firebase
        startUp() {
            firebase.initializeApp(this.config);
            this.database = firebase.database();
            this.ref = this.database.ref('searchQuery');
            this.ref.on("value", this.dataChanged);
        },
        dataChanged(data) {
            this.obj = data.val();

            for (let key in this.obj) { // use for..in to interate through object keys
                this.row = this.obj[key];
                this.row = this.row.toLowerCase(); //makes all searches look uniform
                this.allQueries.push(`${this.row}`); //adds each search to an array
            }

            this.getCount(this.allQueries);

        },
        //iterates through searches and adds a counter to all of the searches to find which ones appear multiple times
        getCount(original) {
            for (let search of original) {
                if (this.counts[search] == undefined) {
                    this.counts[search] = 1;
                } else {
                    this.counts[search]++;
                }
            }

            this.filteredSearches = Object.keys(this.counts); //array of all of the searches (no repeats)
            for (let k of this.filteredSearches) {
                this.numSearches.push(this.counts[k]); //pushes every number associated with each search to its own array
            }
            this.formatArray();
        },
        //Takes the two arrays and formats the data together to get added to a final array
        formatArray() {
            for (let i = 0; i < this.filteredSearches.length; i++) {
                this.line = `${this.filteredSearches[i]}: ${this.numSearches[i]}`;
                this.finalArray.push(this.line);
            }

            this.wordCloudFormat();
        },
        //----------------------WORD CLOUD------------------------
        wordCloudFormat() {
            this.canvas = document.querySelector("canvas");
            this.ctx = this.canvas.getContext("2d");
            this.filteredSearches.sort(this.sortNumber); //sorts each number in ascending order

            //changes font size based on the counts value
            //writes each word in a random location on canvas
            for (let i = 0; i < this.numSearches.length; i++) {
                if (this.counts[this.filteredSearches[i]] < 5) {
                    this.fSize = 10;
                } else {
                    this.fSize = this.counts[this.filteredSearches[i]] * 2.5;
                }
                //-----------------------Styling for each word in word cloud------
                this.ctx.font = `${this.fSize}pt Questrial`;
                this.ctx.fillStyle = this.getRandomColor();
                this.ctx.textAlign = 'center';
                this.ctx.testBaseline = 'middle';
                this.ctx.fillText(this.filteredSearches[i], this.getRandom(0, 900), this.getRandom(0, 700));
            }


        },
        sortNumber(a, b) {
            return a - b;
        },
        getRandom(min, max) {
            let range = (max - min) + 1
            let randNum = Math.random() * range;
            return randNum;
        },
        getRandomColor() {
            let red = this.getRandom(0, 255);
            let blue = this.getRandom(0, 255);
            let green = this.getRandom(0, 255);
            red = Math.round(red);
            blue = Math.round(blue);
            green = Math.round(green);
            let clr = 'rgb(' + red + ',' + green + ',' + blue + ')';
            return clr;

        }
    }

});
