import React,{useState} from 'react'

function AdvanceSearchMenu() {
    const [firstIngredient, setFirstIngredient] = useState('')
    const [secoundIngredient, setSecoundIngredient] = useState('')
    const [therdIngredient, setTherdIngredient] = useState('')
    const [numberOfRecipesAdvance, setNumberOfRecipesAdvance] = useState('')

    function GetIngredients (e) {
        e.preventDefault();
        console.warn("data", firstIngredient, secoundIngredient, therdIngredient, numberOfRecipesAdvance)
    }

    return (
        <div className='AdvanceSearchSecion ' >
            <div className='AdvSearchBox mx-auto pb-4'>
                <h3 className='fs-2 pt-4'> Search Recipes By Ingredients </h3>
                <form className='information'
                    onSubmit={GetIngredients}>
                    <input className='firstIngredient ps-3' 
                        type='text' 
                        placeholder='Enter an ingredient' 
                        onChange={(e) => setFirstIngredient(e.target.value)}
                        required/>
                    <input className='secoundIngredient ps-3' 
                        type='text' 
                        placeholder='Enter an ingredient' 
                        onChange={(e) => setSecoundIngredient(e.target.value)}
                        required/>
                    <input className='therdIngredient ps-3' 
                        type='text' 
                        placeholder='Enter an ingredient' 
                        onChange={(e) => setTherdIngredient(e.target.value)}
                        required/>
                    <label className='mt-3'>
                            number of recipes : 
                            <input className='NSA border-0 mb-2 py-2 px-3 fs-5 '
                                type='number'
                                placeholder='1'
                                onChange={(e) => setNumberOfRecipesAdvance(e.target.value)}
                                required/>
                        </label>
                    <button className='mt-4 py-1 fs-5 border-0'
                        type='submit'>
                            Search 
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AdvanceSearchMenu