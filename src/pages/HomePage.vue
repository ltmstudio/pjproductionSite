<template>
  <div>
    <HeroSection />
    <GeneralTextSection />
    <TripleSection />
    <VideoSection />
    <About />
    <Galery />
    <CardsSection :include-ids="[1, 4, 5]" />
    <Contact/>
  </div>
</template>
  
  <script>
  
  import HeroSection from '../components/HeroSection.vue'
  import GeneralTextSection from '../components/GeneralTextSection.vue';
  import TripleSection from '../components/TripleSection.vue';
  import VideoSection from '../components/VideoSection.vue';
import About from '@/components/About.vue';
import Galery from '@/components/Galery.vue';
import CardsSection from '@/components/CardsSection.vue';
import Contact from '@/components/Contact.vue';




  export default {
  components: {
   HeroSection,
   GeneralTextSection,
   TripleSection,
   VideoSection,
   About,
   Galery,
   CardsSection,
   Contact,

  }

}
  </script>
  
  <style scoped>
  /* При необходимости */
  </style>
  