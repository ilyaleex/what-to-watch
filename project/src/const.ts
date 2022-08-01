export enum AppRoute {
  Main = '/',
  Genre = '/genre/:genre',
  SignIn = '/login',
  MyList = '/mylist',
  Films = '/films',
  FilmId = ':id/*',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Promo = '/promo',
  Films = '/films',
  Login = '/login',
  Logout = '/logout',
}

export const FILMS_COUNT_PER_STEP = 8;
