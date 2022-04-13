
import Card from '../components/Card';


function HomeBody({posts}) {
    // cardtext={item.instructions} 

    return (
        <div>
            <div className='container bg-white px-0 mb-5'>
            <h3 className='titleSecion text-white bg-dark py-2 ps-4'>New post</h3>
            <div className='subContainer d-flex flex-wrap'>
            {
                posts.map (item =>
                    <Card title={item.title} image={item.image}/>
                )
            }
            </div>
        </div>
        </div>
    )
}

export default HomeBody