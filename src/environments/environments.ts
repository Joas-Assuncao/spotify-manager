export const environment = {
  production: false,
};

export const SpotiyConfigurations = {
  clientId: '8a3016cd0b774b9c85e9d77fc2af32fe',
  authEndpoint: 'https://accounts.spotify.com/authorize',
  redirectUri: 'http://localhost:4200/login/',
  scopes: [
    'user-read-currently-playing', // música tocando no momento
    'user-read-recently-played', // músicas tocadas recentemente
    'user-read-playback-state', // estado do player
    'user-top-read', // top músicas
    'user-modify-playback-state', // modificar estado do player
    'user-library-read', // biblioteca do usuário
    'playlist-read-private', // playlist privada
    'playlist-read-collaborative', // playlist colaborativa
  ],
};
