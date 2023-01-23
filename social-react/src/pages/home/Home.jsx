import Stories from '../../components/stories/Stories';
import './home.scss';
import Posts from '../../components/Posts/Posts';

const Home = () => {
  return (
    <>

    <div className='home'>
    <Stories/>
   <Posts />
    </div>
    </>
  )
}

export default Home