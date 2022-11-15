<template>
  <div class="flex items-center gap-4 text-emerald-500">
    <div
      class="hover:cursor-pointer border border-emerald-500 rounded-lg"
      @click="getCards"
    >
      <ShoppingCartIcon class="w-8 h-8 p-1"></ShoppingCartIcon>
    </div>
    <div>
      <div>Sell cards on market</div>
      <div class="flex gap-4 text-emerald-500 text-xs">
        List your card on market by choosing the right price and the right fee
      </div>
    </div>
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
</script>
