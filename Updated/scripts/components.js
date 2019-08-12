//Template for "About Me" cards
Vue.component('about-card', {
    props: ['title', 'icon', 'content'],
    template: `<div class="card-flip">
                <div class="front card">
                    <b-card title={{title}}>
                        <b-card-body>
                            <i class={{icon}}></i>
                        </b-card-body>
                    </b-card>
                </div>
                <div class="back card">
                    <b-card>
                        <b-card-text>{{content}}</b-card-text>
                    </b-card>
                </div>
            </div>`
});
