<template>
    <div class="container">
        <h1>
        {{$route.params.title}}
    </h1>

  <div v-for="c in count">

    <div class="col-md-12 col-lg-12 pull-center">


      <div class="row" v-if="all.posts[c].categories[0].title===$route.params.title">

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


</div>








</template>

<script>
    import axios from 'axios';
    export default {

    watch:{
    '$route'(to,from){
        this.categories=to.params.title;

    }


},
        data() {

            return {

                all:[],
                count:[],categories:''
            }
        }
        ,
        methods:{
            getPostByCategories(){
                axios.get(`http://femme.nextmedia.ma/api/get_recent_posts`).then((response) => {
                    console.log();
                    var arr2 = [];
                    this.all= response.data;
                    for (var i=0; i<response.data.count; i++) {
                        this.count.push(i);
                    }

                }).catch(e => {
                    console.log(e);
                });
            }  ,

        },mounted(){
            this.getPostByCategories();


        }


    }
</script>


<style scoped>
  @import '../assets/css/mycss_lib.css';

</style>
