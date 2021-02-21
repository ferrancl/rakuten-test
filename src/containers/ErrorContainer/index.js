import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeError } from '../../actions'
import { ErrorMessage } from '../../components/ErrorMessage'
import { errorSelector } from '../../selectors'

export const ErrorContainer = () => {

    const { existsError, error } = useSelector(errorSelector)
    const dispatch = useDispatch()

    useEffect(() => {
        setTimeout(() => {
            dispatch(removeError())
        }, 4000)
    }, [dispatch, existsError])
    
    if (existsError) return <ErrorMessage error={error} /> 
    return <></>
}
