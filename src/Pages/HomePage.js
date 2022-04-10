import React from 'react';
import {useState, useEffect} from 'react'
import SearchMenu from '../components/SearchMenu';
import Card from '../components/Card';

function HomePage() {

    let [post, setPost] = useState([])
    let numberOfRecipes = 9;

    useEffect(() => {
        fetch(`https://api.spoonacular.com/recipes/random?number=${numberOfRecipes}&apiKey=182b3ff3a93e4586bad62cf03d8e3bc5`)
        .then((res) => res.json())
        .then((data) =>{ setPost(data.recipes);
        console.log(post, data.recipes)})
        .then(()=> {
        console.log(post);
        })
        .catch((erorr) => console.log(erorr))
    
    }, []);

    return (
    <div className="App  pb-5">
        <SearchMenu/>        
        <div className='container bg-white px-0 pb-3 mb-5'>
            <h3 className='titleSecion text-white bg-dark py-2 ps-4'>New post</h3>
            <div className='subContainer d-flex flex-wrap pb-4'>
                {
                    post.map(item =>
                        <Card title={item.title} cardtext={item.instructions} image={item.image}/>
                    ) 
                }
            </div>
        </div>
    </div>
    )
}

export default HomePage