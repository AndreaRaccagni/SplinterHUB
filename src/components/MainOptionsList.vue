<template>
  <div class="flow-root z-10">
    <ul role="list" class="-mb-8">
      <li
        v-for="(functionality, functionalityIdx) in functionalities"
        :key="functionality.id"
      >
        <div class="relative pb-8 text-soft_springgreen">
          <span
            v-if="functionalityIdx !== functionalities.length - 1"
            class="absolute bottom-1 left-5 -ml-px h-6 w-0.5 bg-hunter_green"
            aria-hidden="true"
          />
          <div class="flex justify-center items-center relative space-x-3">
            <div>
              <span
                @click="functionality.method"
                :class="[
                  functionality.iconBackground,
                  'h-10 w-10 rounded-full flex items-center justify-center text-soft_springgreen hover:text-umber cursor-pointer hover:bg-key_lime',
                ]"
              >
                <component
                  :is="functionality.icon"
                  class="h-5 w-5"
                  aria-hidden="true"
                />
              </span>
            </div>
            <div class="flex min-w-0 flex-1 justify-between space-x-4">
              <div class="flex flex-col">
                <p class="text-base">
                  {{ functionality.content }}
                </p>
                <p class="text-xs">{{ functionality.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ShoppingCartIcon } from '@heroicons/vue/24/outline';

const getCards = async () => {
  try {
    const resolve = await fetch(
      'https://api.splinterlands.io/players/balances?username=yozen'
    );
    const result = await resolve.json();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

const functionalities = [
  {
    id: 1,
    content: 'Sell cards on market',
    description:
      'List your card on market by choosing the right price and the right fee',
    method: getCards,
    icon: ShoppingCartIcon,
    iconBackground: 'bg-hunter_green',
  },
  {
    id: 2,
    content: 'Get player info',
    description: '',
    method: '#',
    icon: ShoppingCartIcon,
    iconBackground: 'bg-umber',
  },
];
</script>
