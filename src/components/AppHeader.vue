<template>
  <header class="bg-black bg-opacity-50 text-emerald-500">
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
              class="text-sm font-medium hover:text-emerald-50"
              >{{ link.name }}</a
            >
          </div>
        </div>
        <div class="ml-10 space-x-4">
          <a
            href="#"
            class="inline-block rounded-md border border-transparent bg-emerald-600 py-1 px-3 text-sm font-medium text-white hover:bg-opacity-75"
            >Log in</a
          >
          <a
            href="#"
            class="inline-block rounded-md border border-transparent bg-white py-1 px-3 text-sm font-medium text-emerald-600 hover:bg-emerald-100"
            >Sign up</a
          >
        </div>
      </div>
      <div class="flex flex-wrap justify-center space-x-6 py-4 lg:hidden">
        <a
          v-for="link in navigation"
          :key="link.name"
          :href="link.href"
          class="text-sm font-medium hover:text-emerald-50"
          >{{ link.name }}</a
        >
      </div>
    </nav>
  </header>
</template>

<script setup>
const navigation = [
  { name: 'Solutions', href: '#' },
  { name: 'Pricing', href: '#' },
  { name: 'Docs', href: '#' },
  { name: 'Company', href: '#' },
];
</script>
s
