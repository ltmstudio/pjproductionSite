<template>

  <CameraSection />
  <CardsSection />

</template>

<script>

import CardsSection from '@/components/CardsSection.vue';
import CameraSection from '@/components/CameraSection.vue';

export default {
  name: 'BlogPage',
  components: {
    CardsSection,
    CameraSection,

  }

}
</script>