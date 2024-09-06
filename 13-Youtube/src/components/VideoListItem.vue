<template>
  <li class="videoItem" @click="onVideoSelect">
    <img class="videoImage" :src="imageUrl" />
    <div class="videoTitle">
      <p style="font-size: 18px; font-weight: bold">Video Adı: {{ video.snippet.title }}</p>
      <p>Açıklama: {{ video.snippet.description }}</p>
      <p style="margin-top: 10px; font-size: 12px">Tarih: {{ dateFormat }}</p>
      <p style="font-weight: bold; font-size: 12px">Kanal Adı: {{ video.snippet.channelTitle }}</p>
    </div>
  </li>
</template>
<script>
import moment from 'moment'
export default {
  props: ['video'],
  computed: {
    dateFormat() {
      return moment(this.video.snippet.publishedAt).startOf('day').fromNow()
    },
    imageUrl() {
      return this.video.snippet.thumbnails.medium.url
    }
  },
  methods: {
    onVideoSelect() {
      this.$emit('videoSelect', this.video)
    }
  }
}
</script>
<style lang="css" scoped>
.videoItem {
  border: 1 solid gray;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
}
.videoImage {
  border-radius: 30px 0 0 30px;
}
.videoTitle {
  margin-left: 30px;
}
</style>
