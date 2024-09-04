<template>
  <ul class="video-list">
    <VideoListItem v-for="video in videos" :key="video.etag" :video="video" @videoSelect="onVideoSelect" />
  </ul>
</template>
<script>
import VideoListItem from './VideoListItem.vue'

export default {
  components: {
    VideoListItem
  },
  props: ['videos'],
  methods: {
    onVideoSelect(video) {
      this.$emit('videoSelect', video)
    }
  }
}
</script>
<style scoped>
    .video-list{
        list-style-type: none;
        width: 100%;
    }
</style>
