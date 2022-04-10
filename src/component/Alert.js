import React from 'react'

const Alert = (props) => {
    return (
        props.alert &&
        
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show announcement-top-bar`} role="alert">
        <strong>{props.alert.type} : </strong> {props.alert.msg}
        </div>
    )
}

export default Alert