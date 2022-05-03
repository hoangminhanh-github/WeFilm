import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useEffect, useState,useRef } from 'react'
import "swiper/css";
import SwiperCore, { Autoplay } from 'swiper';
import { useHistory } from 'react-router-dom';


import Button,{OutlineButton} from '../Button/Button'
import './HeroSlide.scss'
import tmdbApi, { category, movieType } from '../../api/tmdb'
import apiConfig from '../../api/apiConfig'
import Modal, { ModalContent } from '../Modal/Modal'
function HeroSlide() {
    SwiperCore.use([Autoplay])
    const [movieItems, setMovieItems] = useState([])
    const getMovies = async () => {
        const api = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=d333e9bec43768016196d7180488239c&page=1')
        const data = await api.json()
        setMovieItems(data.results.slice(4, 8))
        // console.log(movieItems)

    }
    useEffect(() => {
        // console.log(movieItems)
        getMovies()
    }, [])
    return (
        <div className='hero-slide'>
            <Swiper
                modules={[Autoplay]}
                grabCursor={true}
                spaceBetween={0}
                slidesPerView={1}
                pagination={true}
                autoplay={{ delay: 3000 }}
            >
                {movieItems.map((item, i) => (
                    <SwiperSlide key={i}>
                        {/* <img src={apiConfig.originalImage(item.backdrop_path)} alt="img/footer-bg.jpg" /> */}
                        {({ isActive }) => (
                                <HeroSlideItem item={item} className={`${isActive ? 'active' : ''}`} />
                            )}
                    </SwiperSlide>
                ))}


            </Swiper>
            {
                movieItems.map((item,i)=><TrailerModal key={i} item={item}></TrailerModal>)
            }
        </div>
    )
}


const HeroSlideItem = props => {

let history = useHistory();

const item = props.item;

const background = apiConfig.originalImage(item.backdrop_path ? item.backdrop_path : item.poster_path);

// const setModalActive = async () => {
//     const modal = document.querySelector(`#modal_${item.id}`);

//     const videos = await tmdbApi.getVideos(category.movie, item.id);

//     if (videos.results.length > 0) {
//         const videSrc = 'https://www.youtube.com/embed/' + videos.results[0].key;
//         modal.querySelector('.modal__content > iframe').setAttribute('src', videSrc);
//     } else {
//         modal.querySelector('.modal__content').innerHTML = 'No trailer';
//     }

//     modal.classList.toggle('active');
// }

return (
    <div
        className={`hero-slide__item ${props.className}`}
        style={{backgroundImage: `url(${background})`}}
    >
        <div className="hero-slide__item__content container">
            <div className="hero-slide__item__content__info">
                <h2 className="title">{item.title}</h2>
                <div className="overview">{item.overview}</div>
                <div className="btns">
                <Button onClick={() => history.push('/movie/' + item.id)}>
                            Watch now
                        </Button>
                        <OutlineButton 
                        // onClick={setModalActive}
                        >
                            Watch trailer
                        </OutlineButton>
                </div>
            </div>
            <div className="hero-slide__item__content__poster">
                <img src={apiConfig.w500Image(item.poster_path)} alt="" />
            </div>
        </div>
    </div>
)
}
const TrailerModal=props=>{
    const item =props.item 
    const iframeRef =useRef(null)
    const onClose=()=>iframeRef.current.setAttribute('scr','')
    return (
        <Modal active={false} id ={`modal_${item.id}`}>
            <ModalContent onClose={onClose}>
                <iframe ref={iframeRef} width='100%' height='500px' title='trailer' ></iframe>
            </ModalContent>
        </Modal>
    )
}
export default HeroSlide
