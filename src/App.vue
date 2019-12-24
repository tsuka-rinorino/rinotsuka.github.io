<template>
  <div id="app" class="app">
    <v-hero/>
    
  </div>
</template>

<script>
export default {
  components: {
    'v-hero': require('@/components/hero/index').default,
  },
}
</script>

<style>
@font-face {
  font-family: "Original Yu Gothic";
  src: local("Yu Gothic Medium");
  font-weight: 100;
}
@font-face {
  font-family: "Original Yu Gothic";
  src: local("Yu Gothic Medium");
  font-weight: 200;
}
@font-face {
  font-family: "Original Yu Gothic";
  src: local("Yu Gothic Medium");
  font-weight: 300;
}
@font-face {
  font-family: "Original Yu Gothic";
  src: local("Yu Gothic Medium");
  font-weight: 400;
}
@font-face {
  font-family: "Original Yu Gothic";
  src: local("Yu Gothic Bold");
  font-weight: bold;
}

html {
}

body {
  background: #2d4159 url(/img/common/background.png) center center / 100px 100px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Hiragino Sans", "Noto Sans CJK JP", "Original Yu Gothic", "Yu Gothic", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Sans Emoji";
  font-size: 0.875rem;
}

.app {
  height: 100%;
}
</style>
