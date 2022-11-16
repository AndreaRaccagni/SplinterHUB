<template>
  <header class="bg-black bg-opacity-50 text-sage">
    <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
      <div
        class="flex w-full items-center justify-between border-b py-2 lg:border-none"
      >
        <div class="flex items-center">
          <div class="hidden space-x-8 lg:block">
            <a
              v-for="link in navigation"
              :key="link.name"
              :href="link.href"
              target="_blank"
              class="text-sm font-medium hover:text-soft_springgreen"
              >{{ link.name }}</a
            >
          </div>
        </div>
        <div class="ml-10 space-x-4">
          <a
            @click="toggleLoginModal"
            class="inline-block cursor-pointer rounded-md border border-transparent bg-sage py-1 px-3 text-sm font-medium text-umber hover:bg-soft_springgreen"
            >Log in</a
          >
        </div>
      </div>
      <div class="flex flex-wrap justify-center space-x-6 py-4 lg:hidden">
        <a
          v-for="link in navigation"
          :key="link.name"
          :href="link.href"
          class="text-sm font-medium hover:text-soft_springgreen"
          >{{ link.name }}</a
        >
      </div>
    </nav>
  </header>
  <TransitionRoot
    :as="LoginModal"
    :show="loginModalOpen"
    @close="toggleLoginModal(false)"
  ></TransitionRoot>
</template>

<script setup>
import { accountStore } from '../stores/accounts.js';
import { ref, Transition } from 'vue';
import LoginModal from './LogInModal.vue';

let loginModalOpen = ref(false);
const toggleLoginModal = (open = false) => {
  loginModalOpen.value = open;
};

const navigation = [
  { name: 'Splinterlands', href: 'https://splinterlands.com/' },
  { name: 'Pricing', href: '#' },
  { name: 'Docs', href: '#' },
  { name: 'Company', href: '#' },
];
</script>
