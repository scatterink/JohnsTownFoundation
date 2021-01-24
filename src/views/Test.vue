<template>
  <div class="test">


    <h1>This is an TEST page</h1>
    <a href="#sec-1" v-smooth-scroll>Section 1</a> |
    <a href="#sec-2" v-smooth-scroll>Section 2</a> |
    <a href="#sec-3" v-smooth-scroll>Section 3</a>
<section1 id="sec-1"/>
<sectionNext id="sec-2"/>
<section3 id="sec-3"/>


      </div>
</template>
<script>
// @ is an alias to /src
import Section1 from "@/components/Section1.vue";
import Section3 from "@/components/Section3.vue";
import SectionNext from "@/components/SectionNext.vue";

export default {
  name: "Sections", 
  components: {
    Section1,Section3, SectionNext
  }
};
</script>