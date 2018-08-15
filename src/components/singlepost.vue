<template>
  <div class="container">



    <div v-for="c in count">

      <div class="col-md-12 col-lg-12 pull-center">


        <div class="row" v-if="all.posts[c].id===$route.params.id">

          <div class="col-md-12">
            <img v-if="all.posts[c].attachments[0]!=null" :src="all.posts[c].thumbnail_images.large.url" alt="" class="img-responsive col-md-12" style="display: block;max-width: 100%;height: auto;">
            <div class="btn pull-right titre">
              <div  v-html="all.posts[c].categories[0].title" class="video">

              </div>


            </div>

            <div class="form-group">
              <p><strong></strong></p>
              <h2>
                  {{all.posts[c].title}}

              </h2>
              <p class="by-author"><small>{{all.posts[c].date}}</small></p>
              <div  v-html="all.posts[c].content" class="col-md-12 col-lg-12 pull-center video">

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
