<template>
  <li class="videoItem" @click="onVideoSelect">
    <img class="videoImage" :src="imageUrl" />
    <div class="videoTitle">{{ video.snippet.title }}</div>
  </li>
</template>
<script>
export default {
  props: ['video'],
  computed: {
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
