<template>
  <footer class="footer">
    <div class="footer__inner">
      <v-sns/>
      I <i class="fas fa-heart"></i> Code, Design
    </div>
  </footer>
</template>



<script>
</script>



<style lang="scss">
.footer {
  $e: &;
  background-color: #000;
  background: #2f4459 url(/img/footer/background.png) 44% top no-repeat;
  position: relative;
  padding-top: 106px;

  &__inner {
    background-color: #212830;
    text-align: center;
    font-size: 0.75rem;
    color: mix(#fff, #212830, 65%);
    padding-top: 2rem;
    padding-bottom: 2rem;
    .fa-heart {
      color: #f783ac;
      margin-left: 0.25rem;
      margin-right: 0.25rem;
    }
  }

  &__sns {
    font-size: 32px;
  }

  .sns {
    margin-bottom: 1.5rem;
  }
}
</style>
