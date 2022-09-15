import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

import styles from './App.module.css'

import './global.css'

export function App () {
  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: 'https://github.com/FeelipePM.png',
        name: 'Felipe Machado',
        role: 'Full stack developer'
      },
      content: [
        { type: 'paragraph', content: 'Fala galeraa 👋' },
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
        { type: 'link', content: 'https://github.com/FeelipePM' },
      ],
      publishedAt: new Date('2022-09-09 20:00:00')
    },
    {
      id: 2,
      author: {
        avatarUrl: 'https://github.com/GusMartins499.png',
        name: 'Gustavo Martins',
        role: 'Full stack developer'
      },
      content: [
        { type: 'paragraph', content: 'Fala galeraa 👋' },
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
        { type: 'link', content: 'https://github.com/GusMartins499' },
      ],
      publishedAt: new Date('2022-09-07 20:00:00')
    },
  ];

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(({ id, author, content, publishedAt }) => {
            return (
              <Post
                key={id}
                author={author}
                content={content}
                publishedAt={publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}