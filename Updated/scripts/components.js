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

Vue.component('project-card', {
    props: ['img', 'title', 'descrip', 'link', 'tech'],
    template: `<div class="project-card">
                <b-card v-b-toggle.test img-src={{img}} img-top>
                    <h3 class="card-title" text-center>{{title}}</h2>
                </b-card>
                <b-collapse id="test" class="mt-2">
                    <b-card>
                        <b-card-text>
                            <p>{{descrip}}</p>
                            <span>Created with: {{tech}}</span>
                            <br/><br/>
                            <span>Check it out: {{link}}</span>
                        </b-card-text>
                    </b-card>
                </b-collapse>
            </div>`
});
