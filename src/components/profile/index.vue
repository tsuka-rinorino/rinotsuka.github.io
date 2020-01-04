<template>
  <article class="profile">
    <v-heading class="profile__heading">
      自己紹介
      <template #sub>
        じこしょうかい
      </template>
    </v-heading>
    <div class="profile__inner">
      <header class="profile__header">
        <div class="profile__icon">
          <img class="profile__img" src="/img/profile/me.jpg" alt="">
        </div>
        <h2 class="profile__name">
          <small class="profile__kana">なかやま かつのり</small>
          <span class="profile__kanji">中山 勝則</span>
        </h2>
      </header>
      <div class="profile__body">
        <p>
          神奈川県出身、海の近くで育ちましたが泳げません。<br>
          １９８９年１２月２６日生まれ。『そらまる』が愛称の声優さんと同じ生年月日なのでサイト名をそらまるにしました。
        </p>
        <p>
          中学の入学祝いで買ってもらったPCが楽しく、その頃からWeb制作をはじめてはや{{ experienceYears }}年。メインはCSS、Vue.jsやデザインをやっています。
        </p>
        <p>
          アニメオタクです。某同人ショップのデザイナーやコミケのスタッフをしていたこともあります。<br>
          好きなものはパステル色のカワイイもの。デザインもカワイイ系が得意です。
        </p>
      </div>
    </div>
  </article>
</template>



<script>
export default {
  computed: {
    experienceYears() {
      const birthday = new Date(2002)
      const current = new Date().getFullYear()
      let date = String(current - birthday)

      date = date.replace(/[A-Za-z0-9]/g, (s) => {
        return String.fromCharCode(s.charCodeAt(0) + 65248);
      })

      return date
    }
  },
}
</script>



<style lang="scss">
.profile {

  &__heading {
  }

  &__inner {
    display: flex;
    flex-direction: row-reverse;
    width: 640px;
    margin-left: auto;
    margin-right: auto;
  }

  &__header {
    display: flex;
    flex-direction: column;
    margin-left: 1.5rem;
  }

  &__icon {
    margin-bottom: 0.5rem;
  }

  &__img {
    display: block;
    border-radius: 1.875rem;
    width: 5rem;
    height: 5rem;
  }

  &__name {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    font-family: $font-family-serif;
    font-weight: 300;
    line-height: 1;
    margin-right: -1.25rem;
  }

  &__kana {
    -webkit-writing-mode: vertical-rl;
        -ms-writing-mode: tb-rl;
            writing-mode: vertical-rl;
    font-family: $font-family-base;
    font-size: 0.625rem;
    font-weight: 300;
    letter-spacing: 0.4em;
    margin-left: 0.5rem;
  }

  &__kanji {
    font-size: 1.375rem;
    -webkit-writing-mode: vertical-rl;
        -ms-writing-mode: tb-rl;
            writing-mode: vertical-rl;
    letter-spacing: 0.5em;
  }

  &__body {
    -webkit-writing-mode: vertical-rl;
        -ms-writing-mode: tb-rl;
            writing-mode: vertical-rl;
    font-weight: 200;
    line-height: 2;
    letter-spacing: 0.1875em;
    text-align: justify;
    height: 21rem;
  }
}
</style>
