<template>
  <p>
    This is a reproduction of a very interesting bug that arises when using
    PrimeVue with Nuxt3. The Toast component duplicates elements in very
    specific circumstances.
  </p>

  Examples:
  <ul>
    <li><NuxtLink to="broken">Broken</NuxtLink></li>
    <li><NuxtLink to="working">Working</NuxtLink></li>
    <li><NuxtLink to="working-2">Working 2</NuxtLink></li>
  </ul>
</template>
