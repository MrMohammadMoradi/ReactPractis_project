import React,{useState, useEffect} from 'react'
import AdvanceSearchMenu from '../components/AdvanceSearchMenu'
import Card from '../components/Card'

function AdvanceSearch() {
    
    const [recipes, setRecipes] = useState([])
    let setText = '';
    const defaultHederText = "Result For Search of Recipes by Ingredients :"
    const defaultBodyText = "no result"

    


    return (
        <div className='advance'>
            
            <AdvanceSearchMenu/>
            <div className='AdvContainer bg-white px-0 my-5'>
                <h3 className='AdvTitleSecion text-white bg-dark fs-5 py-2 ps-4'>{setText === ''? defaultHederText : setText}</h3>
                <div className='AdvSubContainer d-flex flex-wrap test-center'>
                    {
                        setText === '' ? <p className='dbt mx-auto fw-bold fs-4'> {defaultBodyText} </p> : recipes.map(item =>
                            <Card title={item.title} cardtext={item.instructions} image={item.image}/>
                        ) 
                    }
                    
                </div>
            </div>
        </div>
        
    )
}

export default AdvanceSearch