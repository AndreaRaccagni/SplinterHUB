<template>
  <div class="w-screen h-screen flex flex-col">
    <div class="relative z-10">
      <AppHeader></AppHeader>
    </div>
    <div class="flex grow items-center">
      <div class="w-1/2 m-8 z-10"><Title></Title></div>

      <div class="w-1/2 m-8 z-10"><MainOptionsList></MainOptionsList></div>
      <video
        autoplay
        muted
        class="absolute z-0 w-screen min-w-full min-h-full max-w-none"
      >
        <source
          src="https://d36mxiodymuqjm.cloudfront.net/website/ui_elements/shop/cl/bg_gateway.mp4"
          type="video/mp4"
        />
      </video>
    </div>
    <div class="relative z-10">
      <AppFooter></AppFooter>
    </div>
  </div>
</template>

<script setup>
import Title from './components/Title.vue';
import MainOptionsList from './components/MainOptionsList.vue';
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
</script>
