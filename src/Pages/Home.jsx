import React,{} from 'react'
import {Link} from 'react-router-dom'
import { OutlineButton } from '../components/Button/Button'
import HeroSlide from '../components/HeroSlide/HeroSlide'
import Movies from '../components/Movie-list/Movies'
import {category,movieType, tvType} from '../api/tmdb'
function Home() {
  return (
    <div className='home'>
        <HeroSlide/>
      <div className="container">
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Trending Movies</h2>
            <Link to="/movies">
                <OutlineButton className='small'> View more</OutlineButton>
            </Link>
          </div>
          <Movies category={category.movie} type={movieType.popular}></Movies>
        </div>

        {/* 2 */}
        <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Top Movies</h2>
            <Link to="/movies">
                <OutlineButton className='small'> View more</OutlineButton>
            </Link>
          </div>
          <Movies category={category.movie} type={movieType.top_rated}></Movies>
        </div>
           {/* 3*/}
          <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Up Coming</h2>
            <Link to="/movies">
                <OutlineButton className='small'> View more</OutlineButton>
            </Link>
          </div>
          <Movies category={category.movie} type={movieType.upcoming}></Movies>
        </div>
         {/* 4*/}
         <div className="section mb-3">
          <div className="section__header mb-2">
            <h2>Tv Trend</h2>
            <Link to="/movies">
                <OutlineButton className='small'> View more</OutlineButton>
            </Link>
          </div>
          <Movies category={category.tv} type={tvType.top_rated}></Movies>
        </div>
      
      </div>
    </div>
  )
}

export default Home