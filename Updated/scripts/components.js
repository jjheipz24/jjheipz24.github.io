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
    props: ['id', 'img', 'title', 'descrip', 'link-descrip', 'link', 'tech'],
    template: `<div>
                <b-card v-b-toggle.{{id}} img-src={{img}} img-top class="project-card">
                    <h2 class="card-title">{{title}}</h2>
                </b-card>
                <b-collapse id={{id}} class="mt-2">
                    <b-card>
                        <b-card-text><p>{{descrip}}</p>
                            <br/><br/>
                            <h5>Created with: {{tech}}</h5>
                            <br/><br/>
                            <h5>{{link-descrip}}: {{link}}</h5>
                        </b-card-text>
                    </b-card>
                </b-collapse>
            </div>`
});
