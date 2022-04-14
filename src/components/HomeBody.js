
import Card from '../components/Card';
import WhenError from '../components/WhenError';


function HomeBody({posts}) {
    // cardtext={item.instructions} 

    return (
        <div className='homBody py-5'>
            <div className='container bg-white px-0 '>
            <h3 className='titleSecion text-white bg-dark py-2 ps-4'>New post</h3>
            <div className='subContainer d-flex flex-wrap'>
            {
                (posts !== undefined) ? posts.map (item =>
                    <Card title={item.title} image={item.image} cardtext={item.summary}/>)
                    : <WhenError/>
            }
            </div>
        </div>
        </div>
    )
}

export default HomeBody