<template>
  <section class="post">
    <v-heading>
      投稿記事
      <template #sub>
        とうこうきじ
      </template>
    </v-heading>
    <div class="post__list">
      <article
        v-for="post in postsLimit"
        :key="post.id"
        class="post__item">
        <a class="post__link" :href="post.url" target="_blank" rel="noopener">
          <img class="post__img" src="/img/post/qiita-logo.png" alt="">
        </a>
        <div class="post__inner">
          <header class="post__header">
            <h1 class="post__heading">
              <a class="post__link" :href="post.url">
                {{ post.title }}
              </a>
            </h1>
          </header>
          <footer class="post__footer">
            <div class="post__date">
              {{ post.created_at | moment }}
            </div>
            <div class="post__like">
              <i class="fas fa-heart"></i>{{ post.likes_count }}
            </div>
          </footer>
        </div>
      </article>
    </div>
  </section>
</template>



<script>
import axios from 'axios'
import moment from 'moment'

export default {
  data() {
    return {
      posts: {},
      postsLimit: {},
    }
  },
  watch: {
    posts: {
      handler: function (value) {
        this.postsLimit = value.slice(0, 4)

        localStorage.setItem('qiitaData', JSON.stringify(this.postsLimit))
      },
      deep: true
    }
  },
  created() {
    this.dataSet()
  },
  methods: {
    dataSet() {
      let storageData = localStorage.getItem('qiitaData')
      const date = new Date()
      let storageDate = new Date(localStorage.getItem('qiitaDate'))
      storageDate.setDate(storageDate.getDate() - 7)

      if (storageData && date >= storageDate) {
        this.postsLimit = JSON.parse(storageData)
      } else {
        this.dataGet()
      }
    },
    dataGet() {
      axios.get('https://qiita.com/api/v2/users/RinoTsuka/items')
        .then((response) => {
          this.posts = response.data

          const date = new Date()
          localStorage.setItem('qiitaDate', date)
        })
    },
  },
  filters: {
    moment: function (date) {
      return moment(date).format('YYYY-MM-DD');
    }
  }
}
</script>



<style lang="scss">
.post {

  &__list {
    width: 32rem;
    margin-left: auto;
    margin-right: auto;
  }

  &__item {
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    border-top: 1px dashed mix(#fff, $main-color, 25%);
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    &:last-of-type {
      border-bottom: 1px dashed mix(#fff, $main-color, 25%);
    }
  }

  &__link {
  }

  &__img {
    display: block;
    width: 128px;
  }

  &__inner {
    margin-right: 1.5rem;
  }

  &__header {
  }

  &__footer {
    display: flex;
    align-items: center;
    line-height: 1;
    margin-top: 1rem;
  }

  &__heading {
    font-family: $font-family-serif;
    font-size: 0.9375rem;
    font-weight: 300;
    line-height: 1.6;
    color: #2b2b2b;
    margin-top: 0;
    margin-bottom: 0;
  }

  &__date {
    font-size: 0.75rem;
    color: mix(#fff, $main-color, 40%);
    margin-right: 1.25rem;
  }

  &__like {
    font-size: 0.6875rem;
    color: mix(#fff, $main-color, 45%);
    .fa-heart {
      font-size: 0.625rem;
      color: mix(#fff, $main-color, 50%);
      margin-right: 0.25rem;
    }
  }
}
</style>
