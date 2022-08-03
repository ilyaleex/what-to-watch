export type Film = {
  id: number
  name: string
  previewImage: string
  previewVideoLink: string
  backgroundImage: string
  backgroundColor: string
  posterImage: string
  videoLink: string
  isFavorite: boolean
  scoresCount: number
  rating: number
  description: string
  runTime: number
  genre: string
  released: number
  director: string
  starring: string[]
}

export type FilmCardProps = {
  film: Film
}
