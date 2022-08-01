import {format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import {Comment} from "./Comment.js";
import {Avatar} from "./Avatar.js";

import styles from './Post.module.css'
import {ChangeEvent, FormEvent, InvalidEvent, useState} from "react";

interface Content {
  type: 'paragraph' | 'link'
  content: string
}

interface PostProps {
  author: {
    name: string,
    role: string,
    avatarUrl: string,
  },
  content: Content[],
  publishedAt: Date,
}

export function Post({author, content, publishedAt}: PostProps) {
  const [comments, setComments] = useState(['Comentário legal'])
  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR, addSuffix: true,
  })

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório')
  }

  function deleteComment(commentToDelete: string) {
    const commentWithoutDeleteOne = comments.filter(comment => {
      return comment !== commentToDelete
    })

    setComments(commentWithoutDeleteOne)
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (<article className={styles.post}>
    <header>
      <div className={styles.author}>
        <Avatar src={author.avatarUrl}/>
        <div className={styles.authorInfo}>
          <strong>{author.name}</strong>
          <span>{author.role}</span>
        </div>
      </div>

      <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
        {publishedDateRelativeToNow}
      </time>
    </header>

    <div className={styles.content}>
      {content.map(line => {
        if (line.type === 'paragraph') {
          return <p key={line.content}>{line.content}</p>
        } else if (line.type === 'link') {
          return <p key={line.content}><a href="#">{line.content}</a></p>
        }
      })}
    </div>

    <form onSubmit={handleCreateNewTask} className={styles.commentForm}>
      <strong>Deixe o seu feedback</strong>
      <textarea
        name="comment"
        value={newCommentText}
        onChange={handleNewCommentChange}
        onInvalid={handleNewCommentInvalid}
        placeholder="Deixe o seu comentário"
        required
      />

      <footer>
        <button type="submit" disabled={isNewCommentEmpty}>
          Publicar
        </button>
      </footer>
    </form>

    <div className={styles.commentList}>
      {comments.map(comment => {
        return (<Comment
          key={comment}
          content={comment}
          onDeleteComment={deleteComment}
        />)
      })}
    </div>
  </article>)
}