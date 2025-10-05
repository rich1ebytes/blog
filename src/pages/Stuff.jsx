import SpotifyCard from '../components/SpotifyCard.jsx'
import MoviesCard from '../components/MoviesCard.jsx'

function Stuff() {
  return (
    <>
      <div className="flex flex-col gap-4 lg:gap-8 font-alan">
        <h1
          className="mt-10 text-5xl font-bold 
          sm:text-5xl md:text-5xl lg:text-6xl"
        >
          my stuff.
        </h1>
        <p className="para">
          this is a collection of all the things i love and cherish in my life.
        </p>
        <hr className="my-2 border-t border-gray-300" />
        
        <div className='flex flex-col gap-4'>
          <SpotifyCard/>
          <MoviesCard/>
        </div>
      </div>
    </>
  );
}

export default Stuff;
