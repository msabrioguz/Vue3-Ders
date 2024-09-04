<template>
  <div v-if="video">
    <div class="video">
      <iframe
        width="560"
        height="315"
        :src="videoUrl"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <div>
      <h4>{{ video.snippet.title }}</h4>
      <p>{{ video.snippet.description }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ['video'],
  computed: {
    videoUrl() {
      const { videoId } = this.video.id
      return 'https://www.youtube.com/embed/' + videoId
    }
  }
}
</script>
<style scoped>
.video{
    width: 100%;
    margin-right: 30px;
}
</style>
