//Template for "About Me" cards
Vue.component('about-card', {
    props: ['title', 'icon', 'content'],
    template: `<div class="card-flip text-center">
                <b-card class="front card">
                    <section class="card-body">
                        <h2 class="card-title">{{title}}</h2>
                        <i v-bind:class="icon"></i>
                    </section>
                </b-card>
                <b-card class="back card">
                    <section class="card-body">
                        <p class="card-text">{{content}}</p>
                    </section>
                </b-card>
            </div>`
});

//Vue.component('test', {
//    props: ['title'],
//    template: `<div>
//<h1>{{title}}</h1>
//</div>`
//})
