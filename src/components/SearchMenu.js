import { useState } from 'react';
import MenuBackground from '../assets/images/pizza.jpg'

function SearchMenu({ChangeAPI}){

    const [recipesName, setRecipesName] = useState('')
    const [numberOfRecipes, setNumberOfRecipes] = useState(9)

    
    function DataHandel(e) {
        e.preventDefault();
        console.warn("data", recipesName, numberOfRecipes)
    }
    
    function GetAPI(){
        ChangeAPI(`https://api.spoonacular.com/recipes/complexSearch?query=${recipesName}&number=${numberOfRecipes}&apiKey=182b3ff3a93e4586bad62cf03d8e3bc5`);
    }

    return(
        <div className='mb-4'>
            <div className='SearchSecion d-flex'>
                <div className='SearchBox mx-auto mt-5'>
                    <h3 className='fs-2 pt-4'>
                        Search Recipes of Food
                    </h3>
                    <form onSubmit={DataHandel}>
                        <input className='nameinput border-0 bg-white mt-4 py-1 ps-3 fs-4' 
                            type='text' 
                            placeholder='Search Recipes '
                            onChange={(e) => setRecipesName(e.target.value)}
                            required/>
                        <label className='mt-3'>
                            number of recipes : 
                            <input className='border-0 ms-2 mb-2 py-2 px-3 fs-5 '
                                type='number'
                                placeholder='1'
                                onChange={(e) => setNumberOfRecipes(e.target.value)}
                                required/>
                        </label>
                        
                        <br/>
                        <button className='mt-4 px-5  py-1 fs-5 border-0'
                            type='submit'
                            onClick={GetAPI}> 
                            Search
                            </button>
                    </form>
                </div>


            </div>
        </div>
    )
}

export default SearchMenu;