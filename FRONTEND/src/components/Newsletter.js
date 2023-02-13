import React from 'react'
import PrimaryButton from './PrimaryButton';


const Newsletter = () => {
  return (
    <section className="py-5 text-center container gilroy">
        <div className="row">
            <div className="col-sm-12">
                <div className="content mt-2">
                    <h2>Get insights about Different Vaccinations </h2>
                    <p>Join our email list to receive immunization reminders, support articles, tips, and more.</p>
                    <div className="input-group col-md-8">
                        <input type="email" className="form-control inp" placeholder="Enter your email"/>
                        <span className="input-group-btn">
                            <PrimaryButton class="btn" text="Suscribe Now" type="submit"></PrimaryButton>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Newsletter