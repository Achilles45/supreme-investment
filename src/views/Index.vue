<template>
  <div class="home">
    <Topbar />
    <Navbar />
    <Banner />
    <Intro />
    <Features />
    <Process />
    <Gallery />
    <Counter />
    <Testimonial />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Topbar from '@/components/Topbar.vue'
import Navbar from '@/components/Navbar.vue'
import Banner from '@/components/Banner.vue'
import Intro from '@/components/Intro.vue'
import Features from '@/components/Features.vue'
import Process from '@/components/Process.vue'
import Gallery from '@/components/Gallery.vue'
import Counter from '@/components/Counter.vue'
import Testimonial from '@/components/Testimonial.vue'
import AppBanner from '@/components/AppBanner.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'Index',
  components:{
    Topbar,
    Navbar,
    Banner,
    Intro,
    Features,
    Process,
    // Gallery,
    Counter,
    Testimonial,
    AppBanner,
    Footer
  }
}
</script>
