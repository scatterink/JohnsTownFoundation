<template>
  <div class="home">
    <p></p>
    <!-------------
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    ---->
    <HomeCarousel/>
    <Section1 id="sec-1"/>
<SectionNext id="sec-2"/>
<Section3 id="sec-3"/>
  </div>
</template>

<script>
// @ is an alias to /src
//@ import HelloWorld from "@/components"HelloWorld.vue";
import HomeCarousel from "@/components/Carousel.vue";
import Section1 from "@/components/Section1.vue";
import Section3 from "@/components/Section3.vue";
import SectionNext from "@/components/SectionNext.vue";




export default {
  name: "Home",
  components: {
    //@ HelloWorld, 
    HomeCarousel, Section1, Section3, SectionNext
  }
};
</script>
