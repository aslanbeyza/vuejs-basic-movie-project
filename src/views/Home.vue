<template>
    <div class="home">
      <h1 class="title">Tüm Filmler</h1>
      <div class="movies-grid">
        <div v-for="movie in movies" :key="movie.imdbID" class="movie-card">
          <router-link :to="'/movie/' + movie.imdbID">
            <div class="card">
              <img :src="movie.Poster" :alt="movie.Title" class="movie-img">
              <div class="movie-title">{{ movie.Title }}</div>
              <!-- IMDB Puanı ve Yıldızlar -->
              <div class="movie-rating">
                <span class="rating-text">IMDB: {{ movie.imdbRating }}</span>
                <div class="stars">
                  <span v-for="star in 5" :key="star" 
                        class="star" 
                        :class="{ filled: star <= Math.round(movie.imdbRating / 2) }">
                    ★
                  </span>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import sourceData from "@/data.json"
  
  export default {
    name: 'MovieGrid',
    data() {
      return {
        movies: sourceData.movies
      }
    }
  }
  </script>
  
  <style scoped>
  .home {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .title {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  
  .movies-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 2rem;
    padding: 0 1rem;
  }
  
  .movie-card {
    transition: transform 0.3s ease;
  }
  
  .movie-card:hover {
    transform: translateY(-5px);
  }
  
  .card {
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }
  
  .movie-img {
    width: 100%;
    height: 375px;
    object-fit: cover;
    display: block;
  }
  
  .movie-title {
    padding: 1rem;
    text-align: center;
    font-weight: 500;
    color: #333;
    min-height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  /* IMDB Puanı ve Yıldızlar */
  .movie-rating {
    text-align: center;
    padding: 0.5rem;
  }
  
  .rating-text {
    font-weight: bold;
    margin-right: 0.5rem;
  }
  
  .stars {
    display: inline-block;
    font-size: 1.2rem;
    color: #ffd700; /* Sarı renk */
  }
  
  .star {
    margin: 0 0.1rem;
  }
  
  .star.filled {
    color: #ffd700;
  }
  
  /* Responsive Tasarım */
  @media (max-width: 768px) {
    .movies-grid {
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 1rem;
    }
    
    .movie-img {
      height: 300px;
    }
  }
  
  @media (max-width: 480px) {
    .movies-grid {
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }
    
    .movie-img {
      height: 225px;
    }
    
    .movie-title {
      font-size: 0.9rem;
      min-height: 60px;
    }
  }
  </style>
  