<template>
  <h1>A very strange bug</h1>
  <p>
    This is a reproduction of a very interesting bug that arises when using
    PrimeVue with Nuxt3. The Toast component duplicates elements in very
    specific circumstances. The FOOOOO title on the broken page is the thing
    being duplicated here.
  </p>

  <h3>
    Warning: Navigation on this version of Nuxt seems odd. You will need to
    refresh on each page after navigating, including navigating back to here via
    back button.
  </h3>

  <h2>Examples:</h2>
  <ul>
    <li>
      <NuxtLink to="/broken">Broken</NuxtLink>
      <pre><code>
        {{`
        <template>
          <Toast />
          <div>
            <h1>FOOOOO</h1>
          </div>
        </template>
        `}}
      </code></pre>
    </li>
    <li>
      <NuxtLink to="/working">Working</NuxtLink>

      <pre><code>
        {{`
        <template>
          <h1>FOOOOO</h1>
          <Toast />
        </template>
        `}}
      </code></pre>
    </li>
    <li>
      <NuxtLink to="/working-2">Working 2</NuxtLink>

      <pre><code>
        {{`
        <template>
          <div>
            <Toast />
            <h1>FOOOOO</h1>
          </div>
        </template>
        `}}
      </code></pre>
    </li>
  </ul>
</template>

<style>
* {
  max-width: 400px;
  margin: 0 auto;
}

p {
  margin-bottom: 8px;
}

h1,
h2,
h3 {
  margin: 16px auto;
}
</style>
