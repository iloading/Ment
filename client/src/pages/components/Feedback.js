import React, { useEffect } from 'react'
import valid from '../../img/icons/feedback_valid.svg'
import error from '../../img/icons/feedback_error.svg'
import alert from '../../img/icons/feedback_alert.svg'
import x from '../../img/icons/feedback_x.svg'
//REDUX//
import { /* showFeedback */ hideFeedback } from "../../actions/feedbackAction";



import { useDispatch, useSelector } from 'react-redux'

function Feedback() {
    const dispatch = useDispatch()
    const { message, status, type } = useSelector(state => state.feedback)
    const handleClose = () => {
        dispatch(hideFeedback())
    }
    useEffect(() => {
        setTimeout(() => {
            dispatch(hideFeedback());
        }, 5000);
    }, [dispatch])

    return (
        <>
            {status &&
                <section className={`feedback ${type}`}>
                    <div className='feedback_icon'><img src={type === 'error' ? error : type === 'valid' ? valid : alert} alt={type} /></div>
                    <div className='feedback_message'>{message}</div>
                    <div className='feedback_close' onClick={handleClose}><img src={x} alt="close feedback" /></div>
                </section>
            }
        </>
    )
}

export default Feedback
