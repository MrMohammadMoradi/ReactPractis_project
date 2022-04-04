import MenuBackground from '../assets/images/pizza.jpg'

function SearchMenu(){
    return(
        <div className='mb-4'>
            <div className='SearchSecion d-flex'>
                <div className='SearchBox mx-auto mt-5'>
                    <h3 className='fs-2 pt-4'>Search Recipes of Food</h3>
                    <input className='nameinput border-0 bg-white mt-4 py-1 ps-3 fs-4' typeof='text' placeholder='Search Recipes ' required/>
                    <div className='NumberRecipes d-flex justify-content-center pt-4 '>
                        <p className='me-3 mt-2'> number of recipes : </p>
                        <input className='border-0 mb-2 ' typeof='text' required/>
                    </div>
                    <button className='mt-4 px-5  py-1 fs-5 border-0'> Search </button>
                </div>


            </div>
        </div>
    )
}

export default SearchMenu;