import styles from './Sidebar.module.css'
import {PencilLine} from 'phosphor-react'
import {Avatar} from "./Avatar";


export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1462332420958-a05d1e002413?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
        alt="Foto de capa que o usuário escolheu"
      />
      <div className={styles.profile}>
        <Avatar
          src="https://github.com/under-sin.png"
          title="Image do usuário"
        />
        <strong>Anderson Vieira</strong>
        <span>Frontend Develop</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}