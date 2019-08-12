//Template for "About Me" cards
Vue.component('about-card', {
    props: [],
    template: `<div class="card-flip">
                <b-card class="front card">
                    <section class="card-body">
                        <h2 class="card-title">Test</h2>
                        <i class="fas fa-medal"></i>
                    </section>
                </b-card>
                <b-card class="back card">
                    <section class="card-body">
                        <p class="card-text">Test content</p>
                    </section>
                </b-card>
            </div>`
});
