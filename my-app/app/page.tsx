import CarouselBannerWrapper from '@/components/CarouselBannerWrapper'
import MoviesCarousel from '@/components/MoviesCarousel'
import { getPopularMovies, getTopRatedMovies, getUpcomingMovies } from '@/lib/getMovies'


const Home = async() => {

  const UpcomingMovies = await getUpcomingMovies();
  const TopRatedMovies = await getTopRatedMovies();
  const PopularMovies = await getPopularMovies();

  return (
    <div>
      <CarouselBannerWrapper/>

      <div className="flex flex-col space-y-2 xl:mt-48">
        <MoviesCarousel movies={UpcomingMovies} title="به زودی" />
        <MoviesCarousel movies={TopRatedMovies} title="بالاترین امتیاز" />
        <MoviesCarousel movies={PopularMovies} title="محبوب ترین" />
      </div>

    </div>
  )
}

export default Home