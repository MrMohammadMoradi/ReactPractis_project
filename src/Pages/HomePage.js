import React, {useState, useEffect} from 'react';

import HomeBody from '../components/HomeBody';
import SearchMenu from '../components/SearchMenu';

function HomePage() {
// https://api.spoonacular.com/recipes/random?number=9&apiKey=182b3ff3a93e4586bad62cf03d8e3bc5
// https://api.spoonacular.com/recipes/complexSearch?query=pizza&number=9&apiKey=182b3ff3a93e4586bad62cf03d8e3bc5

    const [findRecipes, setFindRecipes] = useState(`https://api.spoonacular.com/recipes/complexSearch?query=pizza&number=9&apiKey=182b3ff3a93e4586bad62cf03d8e3bc5`)

    let [post, setPost] = useState([])
    // const [loading, setLoading] = useState(false);

    useEffect(() => {
        // setLoading(true);
        fetch(findRecipes)
        .then((res) => res.json())
        .then((data) =>{ setPost(data.recipes)})
        .then(() => console.log(post))
        .catch((erorr) => console.log(erorr))
        // .finally(() => {
        //     setLoading(false);
        // });

    }, [findRecipes]);



    const SetFR = (api)=> {
        setFindRecipes(api);
        console.log(api);
    }
    
    return (
    <div className="App">
        <SearchMenu ChangeAPI={SetFR}/>
    
        <HomeBody  posts={post} />

    </div>
    )
}

export default HomePage