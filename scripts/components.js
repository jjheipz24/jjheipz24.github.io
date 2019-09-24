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
                        <div id="about-content">
                            <p class="card-text">{{content}}</p>
                        </div>
                    </section>
                </b-card>
            </div>`
});
