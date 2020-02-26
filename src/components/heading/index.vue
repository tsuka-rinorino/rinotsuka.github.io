<template>
  <h1 class="heading">
    <small class="heading__sub"><slot name="sub"/></small>
    <slot/>
  </h1>
</template>



<script>
</script>



<style lang="scss">
.heading {
  font-family: $font-family-serif;
  font-size: 1.5rem;
  font-weight: 300;
  text-align: center;
  line-height: 1;
  letter-spacing: 0.75rem;
  margin-top: 0;
  margin-bottom: 4rem;

  &__sub {
    display: block;
    font-family: $font-family-base;
    font-size: 0.6875rem;
    font-weight: 300;
    letter-spacing: 0.075rem;
    margin-bottom: 0.5rem;
  }
}
</style>
