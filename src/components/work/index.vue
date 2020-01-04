<template>
  <div class="work">
    <article class="work__item work__item--right">
      <img class="work__img" src="/img/work/01.png" alt="">
      <div class="work__inner">
        <h1 class="work__title">
          ＯＳＳ
          <span class="work__sub-title">オープンソースソフトウェア</span>
        </h1>
        <div class="work__body">
          <p>
            余裕があるときに作りたいものを気ままに作成しています。現在は別のことに注力しているため活動していません。
          </p>
          <p>
            <a href="https://github.com/EC-CUBE/ec-cube" target="_blank" rel="noopener">EC-CUBE</a>の開発に参加したりもしてます。業務の一貫ですが・・・
          </p>
          <footer>
            イラスト： <small><a href="https://www.pixiv.net/member.php?id=15845619" target="_blank" rel="noopener">香川悠作</a></small>
          </footer>
        </div>
      </div>
    </article>

    <article class="work__item work__item--left">
      <img class="work__img" src="/img/work/02.png" alt="">
      <div class="work__inner">
        <h1 class="work__title">
          デザイン
          <span class="work__sub-title">Ｗｅｂデザイン・ＤＴＰ</span>
        </h1>
        <div class="work__body">
          <p>
            デザインはＷｅｂがメインですが、紙媒体もたまにやります。
          </p>
          <p>
            Ａｍａｚｏｎ Ｋｉｎｄｌｅ本の作成もできます。画像は小説・イラストをもとに表紙、奥付を制作したものです。
          </p>
          <footer>
            著者： <small><a href="https://www.amazon.co.jp/%E7%B6%BE%E5%8A%A0%E5%A5%88/e/B07MR4ZJ8B/ref=dp_byline_cont_ebooks_1" target="_blank" rel="noopener">綾加奈</a></small>
          </footer>
        </div>
      </div>
    </article>
  </div>
</template>



<script>
</script>



<style lang="scss">
.work {
  $e: &;

  &__heading {
  }

  &__item {
    position: relative;
    width: 45rem;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 14rem;
    &--left {
      transform: translateX(-1rem);
      padding-left: 16rem;
      #{$e}__img {
        left: 11rem;
        transform: translate(-100%, -50%);
      }
    }
    &--right {
      transform: translateX(-1rem);
      padding-right: 16rem;
      #{$e}__img {
        right: 8rem;
        transform: translate(100%, -50%);
      }
    }
  }

  &__img {
    display: block;
    position: absolute;
    top: 50%;
    width: 24rem;
  }

  &__inner {
    display: flex;
    flex-direction: row-reverse;
  }

  &__title {
    -webkit-writing-mode: vertical-rl;
        -ms-writing-mode: tb-rl;
            writing-mode: vertical-rl;
    font-family: $font-family-serif;
    font-weight: 300;
    line-height: 1;
    line-height: 1;
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 1.25rem;
  }

  &__sub-title {
    display: block;
    font-size: 0.6875rem;
    font-weight: 300;
    margin-right: 0.5rem;
  }

  &__body {
    -webkit-writing-mode: vertical-rl;
        -ms-writing-mode: tb-rl;
            writing-mode: vertical-rl;
    font-weight: 200;
    line-height: 2;
    letter-spacing: 0.1875em;
    text-align: justify;
    height: 16rem;
  }
}
</style>
