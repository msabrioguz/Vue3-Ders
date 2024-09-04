<template>
  <div class="container">
    <h1 class="title">Youtube Uygulaması</h1>
    <SearchBar @search-change="onSearchChange" />
    <div class="main">
      <VideoDetail :video="selectedVideo" />
      <VideoList :videos="videos" @videoSelect="onVideoSelect" />
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import SearchBar from './components/SearchBar.vue'
import VideoList from './components/VideoList.vue'
import VideoDetail from './components/VideoDetail.vue';

export default {
  name: 'App',
  components: {
    SearchBar,
    VideoList,
    VideoDetail
  },

  data() {
    return {
      videos: [],
      selectedVideo: null
    }
  },
  methods: {
    onSearchChange(searchText) {
      axios
        .get(`https://www.googleapis.com/youtube/v3/search`, {
          params: {
            part: 'snippet',
            type: 'video',
            key: 'AIzaSyDlcrDqf-tmNVs5uhrmw94sCpQMLTjq5T8',
            q: searchText
          }
        })
        .then((response) => {
          // console.log(response)
          this.videos = response.data.items
        })
        .catch((err) => {
          console.log(err)
        })
    },
    onVideoSelect(video) {
      this.selectedVideo = video
    }
  }
}
</script>
<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.container {
  width: 100%;
  max-width: 1200px;
  margin: 50px auto;
}

.title {
  text-align: center;
}
.main{
  display: flex;
}
</style>
