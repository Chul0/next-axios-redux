import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { fetchposts } from '../store/actions/postAction';


export default function Home() {

  const dispatch = useDispatch();
  const { posts } = useSelector(state => state.post);
 
  useEffect(() => {
    dispatch(fetchposts())
  }, [])


  return (
    <div>
       <p>Stored fetched data in Redux store</p>
      {posts.length ?
       posts[0].map( books => (
        <>
         
          <h1 key={books.id}>{books.title}</h1>
          <p>by {books.author}</p>
        </>
      ))
    :
    <p>Loading...</p>
    }
    </div>
  )
}



