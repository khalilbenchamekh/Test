<template>

    <div class="container">
        <div v-for="c in count">

                    <div class="col-md-12 col-lg-12 pull-center">


                      <div class="row">

                        <div class="col-md-12">
                              <img v-if="all.posts[c].attachments[0]!=null" :src="all.posts[c].thumbnail_images.large.url" alt="" class="img-responsive col-md-12" style="display: block;max-width: 100%;height: auto;">
                              <button class="btn pull-right titre">
                                <div  v-html="all.posts[c].categories[0].title">

                                </div>

                              </button>

                              <div class="form-group">
                          <p><strong></strong></p>
                              <h2>
                                <router-link :to="{ name: 'singlepost', params: { id: all.posts[c].id } }">


                                  {{all.posts[c].title}}
                                </router-link>



                              </h2>
                              <p class="by-author"><small>{{all.posts[c].date}}</small></p>
                              </div>


                      </div>

                      </div>

        </div>
        </div>
      <div class="row">
        <div class="col-md-12 col-lg-12">
          <div class="form-group" v-if="visible">
            <button class="button button5" @click="nextPost">
              <i class="fas fa-plus"></i>

            </button>
          </div>



        </div>
        <div v-for="c in c1">

          <div class="col-md-12 col-lg-12 pull-center">


            <div class="row">

              <div class="col-md-12">
                <img v-if="next.posts[c].attachments[0]!=null" :src="next.posts[c].thumbnail_images.large.url" alt="" class="img-responsive col-md-12" style="display: block;max-width: 100%;height: auto;">
                <button class="btn pull-right titre">
                  <div  v-html="next.posts[c].categories[0].title">

                  </div>

                </button>

                <div class="form-group">
                  <p><strong></strong></p>
                  <h2>
                    <router-link :to="{ name: 'singlepost', params: { id: next.posts[c].id } }">


                      {{next.posts[c].title}}
                    </router-link>



                  </h2>
                  <p class="by-author"><small>{{next.posts[c].date}}</small></p>
                </div>


              </div>

            </div>

          </div>
        </div>


      </div>

    </div>



</template>

<script>
    import axios from 'axios';
    export default {
        data() {

            return {

                all:[],
                next:[],
              count:[],
              c1:[],
              visible:true,
            }
        }
        ,
        methods:{
            getposts(){
                axios.get('http://femme.nextmedia.ma/api/get_recent_posts').then((response) => {
                    this.all= response.data;
                        for (var i=0; i<response.data.count; i++) {


                           this.count.push(i);
                    }
                }).catch(e => {
                    console.log(e);
                });

            }  ,
          nextPost(){

              axios.get('http://femme.nextmedia.ma/api/get_recent_posts/?page=2').then((response) => {
this.next=response.data;
                for (var i=0; i<response.data.count; i++) {


                  this.c1.push(i);
                }
                this.visible=false;

              }).catch(e => {
                console.log(e);
              });



          }
        },mounted(){
            this.getposts();


        }


    }

</script>
<style scoped>


  @import '../assets/css/mycss_lib.css';
</style>
