import React, { useState } from 'react'
import './payment.css'
import { ReactComponent as Detail1 } from '../Assets/Group 20.svg';
import { ReactComponent as Detail2 } from '../Assets/Group 19.svg';
import { ReactComponent as Detail3 } from '../Assets/Vector.svg';
import { ReactComponent as Detail4 } from '../Assets/Group 17.svg';
import { ReactComponent as Detail5 } from '../Assets/Vector_ads.svg';
import { ReactComponent as Clock } from '../Assets/Icon Clock.svg';
import { ReactComponent as RadioButton } from '../Assets/Radio Button.svg';


const Payment = () => {

  const[selectedPlan, setSelectedPlan] = useState('');

  const handleChange = (event) =>{
    console.log(event.target.value);
    const planAmount = event.target.parentNode.querySelector('.plan_amount');
    const yearlyAmount = planAmount.querySelector('span:nth-child(1)').textContent;
    const monthlyAmount = planAmount.querySelector('span:nth-child(2)').textContent;

    const totalAmountValue = parseInt(yearlyAmount.replace(/[₹,]/g, ''), 10);
    const monthlyAmountValue = parseInt(monthlyAmount.replace(/[₹,]/g, ''), 10);
    selectedPlan(totalAmountValue);

  }



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
              <div className='progressBar'>
                <span className='a'>1</span>
                Sign Up
              </div>
              <div className='progressBar'>
                <span className='a'>2</span>
                Subscribe
              </div>
            </div>

            <div className='Pay_right_subscription_text'>
              Select your subscription plan
            </div>

            <div className='Pay_right_subscription_plans'>
              <div className='subscription_plan'>
                <div className='plan1_expired'>
                  Offer expired
                </div>
                <div className='plan'>
                  <input type='radio' name='radioInput' onChange={handleChange} disabled/>
                  <div className='plan_details'>
                    <span>12 Months subscription</span>
                    <span className='plan_amount'><span>Total ₹99</span><span>₹8 /mo</span></span>
                  </div>
                  
                </div>
              </div>

              <div className='subscription_plan'>
                <div className='plan1_expired'>
                  Offer expired
                </div>
                <div className='plan'>
                  <input type='radio' name='radioInput' onChange={handleChange}/>
                  <div className='plan_details'>
                    <span>12 Months subscription</span>
                    <span className='plan_amount'><span>Total ₹99</span><span>₹8 /mo</span></span>
                  </div>
                  
                </div>
              </div>

              <div className='subscription_plan'>
                <div className='plan'>
                  <input type='radio' name='radioInput' onChange={handleChange}/>
                  <div className='plan_details'>
                    <span>6 Months subscription</span>
                    <span className='plan_amount'><span>Total ₹99</span><span>₹8 /mo</span></span>
                  </div>
                  
                </div>
              </div>

              <div className='subscription_plan'>
                <div className='plan'>
                  <input type='radio' name='radioInput' onChange={handleChange}/>
                  <div className='plan_details'> 
                    <span>3 Months subscription</span>
                    <span className='plan_amount'><span>Total ₹99</span><span>₹8 /mo</span></span>
                  </div>
                  
                </div>
              </div>

            </div>

            <div className='Pay_right_subscription_Fee'>
              <div className='subcription_Fee'>
                <span>Subcription Fee</span>
                <span>₹18,500</span>
              </div>

              <div className='subscription_Offer'>
                <div className='limited_offer'>
                  <span className='limited_offer_text'>Limited time offer</span>
                  <span>-{selectedPlan}</span>
                </div>
                <div className='subscription_time'>
                  <Clock/>
                  <span className='offer_time'>Offer valid till 25th March 2023 </span>
                </div>
              </div>
            </div>

          </div>
        </div>
    </div>
  )
}

export default Payment;