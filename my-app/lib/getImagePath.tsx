const getImagePath = (imagePath?: string, fullSize?: boolean) => {
    return imagePath
      ? `http://image.tmdb.org/t/p/${fullSize ? "original" : "w500"}/${imagePath}`
      : "https://i.postimg.cc/vBWtjH3s/Pcture-Placeholder.png";
  };
  
  export default getImagePath;