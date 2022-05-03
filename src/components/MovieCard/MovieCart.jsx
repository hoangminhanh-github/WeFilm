import React from 'react'
import './MovieCard.scss'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import { category } from '../../api/tmdb'
import apiConfig from '../../api/apiConfig'
import {GrPlayFill} from 'react-icons/gr'
function MovieCart(props) {
    const item = props.item
    const link = '/' + category[props.category] + '/' + item.id
    const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path)
    console.log(category[props.category])

    return (
        <Link to={link}>
            <div className='movie-card' style={{backgroundImage:`url(${bg})`}}>
                <Button className='btn'>
                    <GrPlayFill/>
                </Button>

            </div>
            <h3>
                {
                    item.title ||item.name
                }
            </h3>
        </Link>
    )
}

export default MovieCart