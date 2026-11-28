import styles from './App.module.scss'

const movies = [
  {
    id: 1,
    title: 'Interstellar',
    genre: 'Sci-Fi · Adventure',
    symbol: 'I',
  },
  {
    id: 2,
    title: 'The Grand Budapest Hotel',
    genre: 'Comedy · Drama',
    symbol: 'G',
  },
  {
    id: 3,
    title: 'Dune',
    genre: 'Sci-Fi · Adventure',
    symbol: 'D',
  },
]

function App() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.logo}>
            CINE<span>MA</span>
          </div>

          <nav className={styles.navigation}>
            <a href="#home">Home</a>
            <a href="#movies">Movies</a>
            <a href="#about">About</a>
          </nav>
        </header>

        <section className={styles.hero} id="home">
          <p className={styles.eyebrow}>Your cinema starts here</p>

          <h1 className={styles.title}>
            Discover your next favorite movie
          </h1>

          <p className={styles.description}>
            Explore movies, discover new stories and find something
            worth watching tonight.
          </p>

          <a href="#movies" className={styles.button}>
            Explore movies
          </a>
        </section>

        <section id="movies">
          <h2 className={styles.sectionTitle}>Popular movies</h2>

          <div className={styles.movieGrid}>
            {movies.map((movie) => (
              <article className={styles.movieCard} key={movie.id}>
                <div
                  className={`${styles.moviePoster} ${
                    movie.id === 2
                      ? styles.moviePosterHotel
                      : movie.id === 3
                        ? styles.moviePosterDune
                        : ''
                  }`}
                >
                  <span>{movie.symbol}</span>
                </div>

                <div className={styles.movieInfo}>
                  <h3>{movie.title}</h3>
                  <p>{movie.genre}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <footer className={styles.footer} id="about">
          <p>© 2026 Cinema. Demo interface.</p>
        </footer>
      </div>
    </main>
  )
}

export default App
