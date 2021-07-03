import React from 'react'
import valid from '../../img/icons/feedback_valid.svg'
import error from '../../img/icons/feedback_error.svg'
import alert from '../../img/icons/feedback_alert.svg'
import x from '../../img/icons/feedback_x.svg'

function Feedback() {
    return (
        <section className='feedback alert'>
            <div className='feedback_icon'><img src={alert} alt="" /></div>
            <div className='feedback_message'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde voluptatum dolorem dolore nisi illo vitae nam commodi rem ea aperiam quidem, id illum saepe nobis possimus tenetur distinctio, hic doloribus?</div>
            <div className='feedback_close'><img src={x} alt="" /></div>
        </section>
    )
}

export default Feedback
