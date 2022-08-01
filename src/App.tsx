import {Post} from "./components/Post";
import {Header} from "./components/Header";
import {Sidebar} from "./components/Sidebar";

import styles from './App.module.css'
import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/under-sin.png',
      name: 'Anderson',
      role: 'Frontend Develop'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      {type: 'link', content: '👉 jane.design/doctorcare1'},
    ],
    publishedAt: new Date('2022-05-03 14:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Frontend Develop'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      {type: 'link', content: '👉 jane.design/doctorcare2'},
    ],
    publishedAt: new Date('2022-07-31 09:00:00'),
  },
]

export function App() {
  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {
            posts.map(post => {
              return (
                <Post
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })
          }
        </main>
      </div>
    </>
  );
}
