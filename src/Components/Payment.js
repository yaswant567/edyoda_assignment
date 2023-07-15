import React from 'react'
import './payment.css'
import { ReactComponent as Detail1 } from '../Assets/Group 20.svg';
import { ReactComponent as Detail2 } from '../Assets/Group 19.svg';
import { ReactComponent as Detail3 } from '../Assets/Vector.svg';
import { ReactComponent as Detail4 } from '../Assets/Group 17.svg';
import { ReactComponent as Detail5 } from '../Assets/Vector_ads.svg';



const Payment = () => {
  return (
    <div className='Pay'>

          {/* ----------------------------Left Side - Main LookUp------------------------------------------------------------- */}
          <div className='Pay_left'>
            <div className='Pay_left_detail_offer'>
                <span>Access curated courses worth </span>
                <span>₹ <span className='red'>18500 </span> at just <span className='offer'>₹99 </span>per year!</span>
            </div>
            <div className='Pay_left_detail'>
              <Detail1/>
              <span><span className='blue'>100+</span> Job relevant courses</span> 
            </div>
            <div className='Pay_left_detail'>
                <Detail2/>
                <span><span className='blue'>20,000+</span> Hours of content</span>
            </div>
            <div className='Pay_left_detail'>
              <Detail3/>
              <span><span className='blue'>Exclusive</span> webinar access</span>
            </div>
            <div className='Pay_left_detail'>
               <Detail4/>
               <span>Scholarship worth <span className='blue'>₹94,500</span></span>
            </div>
            <div className='Pay_left_detail'>
               <Detail5/>
               <span><span className='blue'>Ad Free</span> learning experience</span>
            </div>
        </div>

        
        {/* ----------------------------Right Side - subscription Plans------------------------------------------------------------- */}
        <div className='Pay_right'>
          <div className='Pay_right_subscription'>
            <div className='Pay_right_subscription_progressBar'>
              <div className='progressBar_SignUp'>
                <span className='1'>1</span>
                Sign Up
              </div>
              <div className='progressBar_Subscribe'>
                <span className='2'>2</span>
                Subscribe
              </div>
            </div>

            <div className='Pay_right_subscription_text'>
              Select your subscription plan
            </div>

            <div className='Pay_right_subscription_plans'>
              <div className='plan1'>
                <div className='plan1_expired'>
                  expired
                </div>
                <div className='plan'>
                  <input type='radio'/>
                  <div>
                    <span>12 Months subscription</span>
                    <span className='amount'><span>Total ₹99</span><span>₹8 /mo</span></span>
                  </div>
                  
                </div>
              </div>
            </div>

          </div>
        </div>
    </div>
  )
}

export default Payment;