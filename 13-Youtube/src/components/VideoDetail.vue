<template>
  <div v-if="video" class="video-card">
    <div class="video" >
      <iframe
        :src="videoUrl"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <div class="details">
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
iframe{
    width: 100%;
    height: 300px;
}
.video{
    width: 100%;
}
.video-card{
    width: 100%;
    margin-right: 30px;
}
.details{
  margin-top: 10px;
  border: 1px solid grey;
  border-radius: 4px;
  padding: 10px;
}
</style>
