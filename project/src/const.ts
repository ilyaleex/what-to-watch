export enum AppRoute {
  Main = '/',
  GenreName = '/genre/:genre',
  Genre = '/genre',
  SignIn = '/login',
  MyList = '/mylist',
  Films = '/films',
  Film = '/films/:id',
  FilmId = ':id/*',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
  FilmComments = '/films/:id/reviews',
  NotFound = '*',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Promo = '/promo',
  Films = '/films',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout',
}

export enum NameSpace {
  Auth = 'Auth',
  Promo = 'PROMO',
  Film = 'FILM',
  Films = 'FILMS',
  Comments = 'COMMENTS',
}

export const ALL_GENRES = 'All genres';

export const FILMS_COUNT_PER_STEP = 8;
