import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { removeError } from '../actions'
import { detailsSelector } from '../selectors'
import { fetchDetail } from '../thunks/details'
import { Loader } from '../components'

export const Detail = () => {

    const { movieId }  = useParams()
    const dispatch = useDispatch()
    const { loading, details } = useSelector(detailsSelector)

    useEffect(() => {
        if (!(movieId === details?.id)) dispatch(fetchDetail(movieId))

    }, [dispatch, movieId, details])    

    return (
        <>
        {loading?
            <Loader />:
            <div>
                <img src={details?.image} alt=""/>
                <p>{details?.title}</p>
            </div>
        }
        
        </>
    )
}


// const [movieDetails, setMovieDetails] = useState()

    // useEffect(() => {
    //     for (const movie of details) {
    //         if(movie.id === movieId) {
    //             setMovieDetails(movie)
    //             break
    //         }
    //     }
    //     if (!movieDetails) {
    //         dispatch(fetchDetail(movieId))
    //         setMovieDetails(details[details.length - 1])
    //     }
    //     return () => {
    //         dispatch(removeError())
    //     }

    // }, [dispatch, movieId, movieDetails, setMovieDetails, details])