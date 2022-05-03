import React,{useState,useEffect} from 'react'
import PropTypes from 'prop-types'
import './Movies.scss'
import { SwiperSlide,Swiper } from 'swiper/react'
import {Link } from 'react-router-dom'
import Button from '../Button/Button'
import tmdbApi,{category} from '../../api/tmdb'
import apiConfig from '../../api/apiConfig'
import "swiper/css";
import MovieCart from '../MovieCard/MovieCart'

const Movies = props => {

    const [items,setItems]=useState([])
    useEffect(()=>{
        const getList =async()=>{
            let response=null
            const params={}
            if(props.type!=='similar'){
                switch(props.category){
                    case category.movie:
                        response=await tmdbApi.getMoviesList(props.type,{params})
                        // console.log(response)

                        break
                    default:
                        response=await tmdbApi.getTvList(props.type,{params})
                        // console.log(response)


                }
            }
            else{
                response=await tmdbApi.similar(props.category,props.id)
                // console.log(response)

            }
            setItems(response.results)
        }
        getList()
    },[])
  return (
    <div className='movie-list'>
        <Swiper
            grabCursor={true}
            spaceBetween={10}
            slidesPerView={'auto'}
        >
            {
                items.map((item,i)=>(
                    <SwiperSlide className='swiper-slide' key={i}>
                        {/* <img src={apiConfig.w500Image(item.poster_path)} alt="" />
                         */}
                         <MovieCart item={item} category={props.category}/>
                    </SwiperSlide>
                ))
            }
        </Swiper>

    </div>
  )
}

Movies.propTypes = {
    category:PropTypes.string.isRequired,
    type:PropTypes.string.isRequired

}

export default Movies
