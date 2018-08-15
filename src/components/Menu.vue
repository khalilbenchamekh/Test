<template>

    <nav class="navbar navbar-inverse navbar-fixed-top">

        <div class="container">
            <div class="navbar-header navbar-right">

                <!-- Collapsed Hamburger -->
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse">
                    <span class="sr-only">Toggle Navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>

                <!-- Branding Image -->

              <router-link :to="{ name: 'posts'}" class="navbar-brand">
                <img src="../assets/img/logo.png" class="img-responsive logo"/>
              </router-link>
            </div>

            <div class="collapse navbar-collapse navbar-right" id="app-navbar-collapse">
                <!-- Left Side Of Navbar -->
                <ul class="nav navbar-nav" v-for="out in output">
                    <li>
                        <router-link :to="{ name: 'categories', params: { title: out.label } }">
                            {{out.label}}
                        </router-link>

                    </li>

                </ul>

            </div>
        </div>
    </nav>

</template>

<script>
    import axios from 'axios';
    export default {
        data() {

            return {
                output:[]
            }
        }
        ,
        methods:{
            getMenus(){
                axios.get(`http://femme.nextmedia.ma/api/menus/get_menu/?menu_id=7`).then((response) => {

                    this.output=response.data.menu.output;


                }).catch(e => {
                    console.log(e);
                });
            }

        },mounted(){
            this.getMenus();

        }


    }

</script>
<style scoped>

    @import '../assets/css/mycss_lib.css';

</style>
