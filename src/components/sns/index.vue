<template>
  <div class="sns">
    <ul class="sns__list">
      <li class="sns__item">
        <a class="sns__link" href="https://github.com/RinoTsuka" target="_blank" rel="noopener"><i class="sns__icon fab fa-github"></i></a>
      </li>
      <li class="sns__item sns__item--twitter">
        <a class="sns__link" href="https://twitter.com/rino_tsuka" target="_blank" rel="noopener"><i class="sns__icon fab fa-twitter"></i></a>
      </li>
      <li class="sns__item">
        <a class="sns__link" href="https://qiita.com/RinoTsuka" target="_blank" rel="noopener"><i class="sns__icon icon-qiita"></i></a>
      </li>
    </ul>
  </div>
</template>



<script>
</script>



<style lang="scss">
.sns {
  $e: &;

  &__list {
    display: flex;
    justify-content: center;
    list-style: none;
    margin-bottom: 0;
    padding-left: 0;
  }

  &__item {
    font-size: 2rem;
    line-height: 1;
    margin-left: 0.375rem;
    margin-right: 0.375rem;
    &--twitter {
      #{$e}__link {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background-color: mix(#fff, #212830, 35%);
        width: 2rem;
        height: 2rem;
        &:hover {
          background-color: #fff;
        }
      }
      #{$e}__icon {
        font-size: 1.25rem;
        color: #212830;
        margin-top: 0.1875rem;
      }
    }
  }

  &__link {
    display: block;
    transition: $transition-base;
    color: mix(#fff, #212830, 35%);
    &:hover {
      text-decoration: none;
    }
  }

  &__icon {
  }
}
</style>
