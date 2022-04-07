import React from 'react'

import Refrigerator from '../assets/images/Refrigerator.jpg'
import Cheese from '../assets/images/cheese.jpg'
import Salami from '../assets/images/salami.jpg'
import Egg from '../assets/images/egg.jpg'
import Oleaster from '../assets/images/Oleaster.jpg'
import SaladDish from '../assets/images/SaladDish.jpg'



function About() {
    return (
        <div className='container'>
            <div className='aboutMe d-flex flex-wrap'>
                <h1 className='textHederAboutMy mx-auto py-3'>What is in my fridge?</h1>
                <div className='Infomation d-flex'>
                    <div className='d-flex mt-5'>
                        <img className='RefrigeratorIMG ps-5' src={Refrigerator}/>
                        <div className='imageRowSecion'>
                            <img className='rowImg' src={Cheese} alt='PostImage'/>
                            <img className='rowImg' src={Salami} alt='PostImage'/>
                            <img className='rowImg py-3' src={Egg} alt='PostImage'/>
                            <img className='rowImg' src={Oleaster} alt='PostImage'/>
                        </div>
                    </div>
                    <div className='SiteDiscribtion ms-auto px-5'>
                        <h3 className='px-3'> Find recipes using what you hav </h3>
                        <p className='px-5 pb-4'>
                            Find recipes that uose many of the ingredents you
                            have availeble as possible while limiting missing ingredients.
                        </p>
                        <div className='imgCard flex-row mx-auto'>
                            <img className='Salad' src={SaladDish} alt='PostImage'/>
                            <button className='bg-primary text-white w-100 py-3 fs-4 border-0'> Salad Dish </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About