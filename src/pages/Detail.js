import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { detailsSelector } from '../selectors'
import { fetchDetail } from '../thunks/details'
import { Loader } from '../components'
import './styles.css'

export const Detail = () => {
    const { movieId }  = useParams()
    const dispatch = useDispatch()
    const { loading, details, idMovieFetched } = useSelector(detailsSelector)

    useEffect(() => {
        const existsMovie = (movieId === idMovieFetched)
        if (!existsMovie) {
            dispatch(fetchDetail(movieId))
        }
    }, [dispatch, movieId, idMovieFetched]) 
    
    if (loading) return <Loader />
    
    return (
        <div className="details">
            <img className="details__image" src={details?.image} alt=""/>
            <h3 className="details__title">{details?.title}</h3>
        </div>
    )
}