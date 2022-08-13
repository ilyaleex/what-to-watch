type User = {
  id: number
  name: string
}

export type Comment = {
  comment: string
  date: string
  id: number
  rating: number
  user: User
}

export type NewComment = {
  filmId: number
  rating: number
  comment: string
}

export type CommentProps = {
  comment: Comment
}
