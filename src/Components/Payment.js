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

  const[selectedPlan, setSelectedPlan] = useState(0);
  const[discount, setDiscount] = useState(18401);

  const handleChange = (event) =>{

    const labels = document.querySelectorAll('.subscription_plan', '.subscription_plan2');
    labels.forEach(label => {
      label.classList.remove('green');
    });

    event.currentTarget.classList.add('green');


    const planAmount = event.target.parentNode.querySelector('.plan_amount');
    const yearlyAmount = planAmount.querySelector('span:nth-child(1)').textContent;
    // const monthlyAmount = planAmount.querySelector('span:nth-child(2)').textContent;

    const match = yearlyAmount.match(/\d+/);
    const totalAmountValue = match ? parseInt(match[0], 10) : null;
    // const monthlyAmountValue = parseInt(monthlyAmount.replace(/[₹,]/g, ''), 10);
    const offerDiscount = (18500 - totalAmountValue);

    setSelectedPlan(totalAmountValue);
    setDiscount(offerDiscount);

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
              <label className={`subscription_plan1 ${selectedPlan === 'plan1' ? 'green' : ''}`} onChange={handleChange}>
                <div className='plan1_expired'>
                  Offer expired
                </div>
                <div className='plan'>
                  <input type='radio' name='radioInput' value="plan1" onChange={handleChange} disabled/>
                  <div className='plan_details'>
                    <span>12 Months subscription</span>
                    <span className='plan_amount'><span className='yr'>Total ₹99</span><span className='mr'>₹8 /mo</span></span>
                  </div>
                  
                </div>
              </label>

              <label className={`subscription_plan2 ${selectedPlan === 'plan2' ? 'green' : ''}`} onChange={handleChange}>
                <div className='plan2_Recommended'>
                  Recommended
                </div>
                <div className='plan'>
                  <input type='radio' name='radioInput' value="plan2" onChange={handleChange}/>
                  <div className='plan_details'>
                    <span>12 Months subscription</span>
                    <span className='plan_amount'><span className='yr'>Total ₹179</span><span className='mr'>₹15 /mo</span></span>
                  </div>
                  
                </div>
              </label>

              <label className='subscription_plan' onChange={handleChange}>
                <div className='plan'>
                  <input type='radio' name='radioInput' value="plan3" onChange={handleChange}/>
                  <div className='plan_details'>
                    <span>6 Months subscription</span>
                    <span className='plan_amount'><span className='yr'>Total ₹149</span><span className='mr'>₹25 /mo</span></span>
                  </div>
                  
                </div>
              </label>

              <label className="subscription_plan" onChange={handleChange}>
                <div className='plan'>
                  <input type='radio' name='radioInput' value="plan4" onChange={handleChange}/>
                  <div className='plan_details'> 
                    <span>3 Months subscription</span>
                    <span className='plan_amount'><span className='yr'>Total ₹99</span><span className='mr'>₹33 /mo</span></span>
                  </div>
                  
                </div>
              </label>

            </div>

            <div className='Pay_right_subscription_Fee'>
              <div className='subcription_Fee'>
                <span>Subcription Fee</span>
                <span>₹18,500</span>
              </div>

              <div className='subscription_Offer'>
                <div className='limited_offer'>
                  <span className='limited_offer_text'>Limited time offer</span>
                  <span><b>-</b> ₹{discount}</span>
                </div>
                <div className='subscription_time'>
                  <Clock/>
                  <span className='offer_time'>Offer valid till 25th March 2023 </span>
                </div>
              </div>

              <div className='total'>
                <span><b>Total</b>(Incl. of 18% GST)</span>
                <span className='total_amount'>₹{selectedPlan}</span>
              </div>
            </div>

            <div className='submit'>
              <div className='cancel'><button className='cancel1'><b>CANCEL</b></button></div>
              <div className='proceed'><button className='proceed1'><b>PROCEED TO PAY</b></button></div>
            </div>
            <div className='container'>
              <div className='frame'></div>
            </div>
          </div>
        </div>
        
    </div>
  )
}

export default Payment;