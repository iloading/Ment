import React from 'react'
import valid from '../../img/icons/feedback_valid.svg'
import error from '../../img/icons/feedback_error.svg'
import alert from '../../img/icons/feedback_alert.svg'
import x from '../../img/icons/feedback_x.svg'
//REDUX//
import { showFeedback, hideFeedback } from "../../actions/feedbackAction";


import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Feedback() {
    const dispatch = useDispatch()
    const { message, status } = useSelector(state => state.feedback)
    const handleClose = () => {
        dispatch(hideFeedback())
    }
    return (
        <>
            {status &&
                <section className='feedback alert'>
                    <div className='feedback_icon'><img src={alert} alt="" /></div>
                    <div className='feedback_message'>{message}</div>
                    <div className='feedback_close' onClick={handleClose}><img src={x} alt="" /></div>
                </section>
            }
        </>
    )
}

export default Feedback
