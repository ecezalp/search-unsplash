export const findPictureByTerm = (term) =>
  `https://api.unsplash.com/search/photos?query=${term}&client_id=${process.env.API_KEY}`;