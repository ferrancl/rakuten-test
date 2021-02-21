import React from 'react'
import './styles.css'

export const ErrorMessage = ({ error }) => {

    const { status, message } = error

    return (
        <div>
            <h4 className="error">{`${status} ${message}`}</h4>
        </div>
    )
}
