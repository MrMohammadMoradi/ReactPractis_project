import React,{useState} from 'react'

function AdvanceSearchMenu() {

    return (
        <div className='AdvanceSearchSecion ' >
            <div className='AdvSearchBox mx-auto pb-4'>
                <h3 className='fs-2 pt-4'> Search Recipes By Ingredients </h3>
                <form className='information'>
                    <input className='firstIngredient ps-3' type='text' placeholder='Enter an ingredient' required/>
                    <input className='secoundIngredient ps-3' type='text' placeholder='Enter an ingredient' required/>
                    <input className='therdIngredient ps-3' type='text' placeholder='Enter an ingredient' required/>
                    <label className='w-100'>
                        Number of recipes :
                        <select className='selectNumberOfRecipes border-0 ms-3'>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                            <option value='6'>6</option>
                            <option value='7'>7</option>
                            <option value='8'>8</option>
                            <option value='9'>9</option>
                        </select>
                    </label>
                    <button className='mt-4 py-1 fs-5 border-0'> Search </button>
                </form>
            </div>
        </div>
    )
}

export default AdvanceSearchMenu