//Template for showing the title and cover of each book
Vue.component('book-title', {
    props: ['title', 'imglink'],
    template: `<div class="text-center">
        <h2>{{title}}</h2>
        <img v-bind:src="imglink" class="rounded" id="bookCover" alt="Cover Image">
</div>`
});

//Template that shows the author for each book
Vue.component('book-info', {
    props: ['author', 'descrip'],
    template: `<div class="info text-center">
        <h3>{{author}}</h3>
        </div>`
});

//Template that shows all of the info for each movie suggestion
Vue.component('movie', {
    props: ['title', 'rating', 'descrip', 'score'],
    template: `<b-row class="movieSug">
<h2>{{ title }}</h2>
<p>{{ rating }}</p><p class="score">{{ score }}</p>
<p>{{ descrip }}</p>
</b-row>`
});
