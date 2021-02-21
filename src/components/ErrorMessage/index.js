import React from 'react'

export const ErrorMessage = ({ error }) => {

    const { status, message } = error

    return (
        <div>
            <p style={{color: "white", paddingTop: "5rem"}}>{`${status} ${message}`}</p>
        </div>
    )
}
