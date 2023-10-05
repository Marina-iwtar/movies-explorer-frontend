export function getSearchMovies(arr, query) {
  return arr.filter((item) => {
    return (
      item.nameRU.toLowerCase().includes(query.toLowerCase()) ||
      item.nameEN.toLowerCase().includes(query.toLowerCase())
    );
  });
}
export function getShortMovies(movies){
   return movies.filter(item=> item.duration <= 40);
}