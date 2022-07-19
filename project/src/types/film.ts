// export type FilmOverview = {
//   scoresCount: number,
//   rating: number,
//   description: string,
// }
//
// export type FilmDetails = {
//   runTime: number,
//   genre: string,
//   released: number,
// }
//
// export type FilmReviews = {
//   text: string,
//   author: string,
//   date: string,
//   rating: number,
// }
//
// export type FilmPage = {
//   backgroundImage: string,
//   backgroundColor: string,
//   posterImage: string,
//   videoLink: string,
//   isFavorite: boolean,
//   overview: FilmOverview,
//   details: FilmDetails,
//   reviews: FilmReviews,
//   director: string,
//   starring: [string],
// }

export type Film = {
  id: number,
  name: string,
  previewImage: string,
  previewVideoLink?: string,
  backgroundImage?: string,
  backgroundColor?: string,
  posterImage?: string,
  videoLink?: string,
  isFavorite?: boolean,
  scoresCount?: number,
  rating?: number,
  description?: string,
  runTime?: number,
  genre?: string,
  released?: number,
  director?: string,
  starring?: string[],
  reviewText?: string,
  author?: string,
  reviewDate?: string,
  reviewRating?: number,
}


export type Films = Film[];

