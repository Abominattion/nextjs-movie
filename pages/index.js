import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Header } from '../components/Header'

// Importando token do .env
import { token, urlBase } from './../api/api'

// Função para pegar os dados da API
export async function getStaticProps() {
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${token}&language=pt-BR&with_genres=27`)
  const data = await res.json()

  return {
    props: {
      data
    }
  }
}

export default function Home({ data }) {
  console.log(data)
  // Mostrando os dados da API com o foreach
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Top Filmes
        </h1>

        <div className={styles.grid}>
          {data.results.map((item) => (
            <div key={item.id} className={styles.card}>
              <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={item.title}
                width={300}
                height={450}
              />
              <h3>{item.title}</h3>
              <p>{item.overview.substring(0, 50) + '...'}</p>
              <small style={{ marginTop: '10px' }}><strong>Data de lançamento: </strong> {item.release_date}</small>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}