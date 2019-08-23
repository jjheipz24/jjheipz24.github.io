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

//Template for project cards
Vue.component('project-card', {
    props: ['img', 'title', 'descrip', 'tech', 'link', 'tag'],
    template: `<div class="project-card">
                <div class="proj-cover col-lg-6" v-b-toggle="'{{tag}}'">
                    <div class="hovereffect">
                        <img class="card-img img-responsive" :src="img">
                        <div class="overlay">
                            <h2>{{title}}</h2>
                        </div>
                    </div>
                </div>
                <b-collapse id={{tag}} class="mt-2">
                    <b-card>
                        <b-card-text>
                            <p>{{descrip}}</p>
                            <span>Created with: {{tech}}</span>
                            <br /><br />
                            <span>Check it out: {{link}}</span>
                        </b-card-text>
                    </b-card>
                </b-collapse>
            </div>`
});
