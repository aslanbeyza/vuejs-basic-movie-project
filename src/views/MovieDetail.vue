<template>
    <div class="movie-detail">
      <div v-if="movie" class="movie-content">
        <img :src="movie.Poster" :alt="movie.Title" class="movie-poster">
        <div class="movie-info">
          <h2>{{ movie.Title }}</h2>
          <p><strong>Year:</strong> {{ movie.Year }}</p>
          <p><strong>Genre:</strong> {{ movie.Genre }}</p>
          <p><strong>Director:</strong> {{ movie.Director }}</p>
          <p><strong>Actors:</strong> {{ movie.Actors }}</p>
          <p><strong>Plot:</strong> {{ movie.Plot }}</p>
          <p><strong>IMDB Rating:</strong> {{ movie.imdbRating }}</p>
          <p><strong>Box Office:</strong> {{ movie.BoxOffice }}</p>
        </div>
      </div>
      <router-link to="/" class="back-button">Back to Movies</router-link>
    </div>
  </template>
  
  <script>
  import sourceData from "@/data.json";
  
  export default {
    name: 'MovieDetail',
    data() {
      return {
        movie: null
      }
    },
    mounted() {
  const movieId = this.$route.params.id;
  console.log('Movie ID:', movieId); // Gelen ID'yi kontrol ediyoruz
  console.log('Tüm Filmler:', sourceData.movies); // Tüm filmler listesini kontrol ediyoruz

  this.movie = sourceData.movies.find(movie => movie.imdbID === movieId);

  if (this.movie) {
    console.log('Seçilen Film:', this.movie); // Eğer film bulunursa, konsolda göster
  } else {
    console.error('Film Bulunamadı!'); // Film bulunamazsa hata göster
  }
}

  }
  </script>
  
  <style scoped>
  .movie-detail {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    color: #fff;
  }
  
  .movie-content {
    display: flex;
    max-width: 800px;
    gap: 20px;
    color:black;
  }
  
  .movie-poster {
    width: 300px;
    height: auto;
    border-radius: 8px;
  }
  
  .movie-info {
    flex: 1;
  }
  
  .back-button {
    margin-top: 20px;
    color: #2196f3;
    text-decoration: underline;
  }
  </style>
  