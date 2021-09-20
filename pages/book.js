import axios from 'axios'
import bookStyles from '../styles/Books.module.css'

const book = ({books}) => {
    // console.log(books)
    return (
        <>
        <h1>Books</h1>
        <p>Fetched all books by axios get</p>
        <div className={bookStyles.grid}>
           {books.map(books => 
            <img className={bookStyles.img} src={books.image} />
           )} 
        </div>
        </>
    )
}

export const getStaticProps = async () => {
    const res = await axios.get(`type: API,
    payload: {
        url: "http://myapi-profstream.herokuapp.com/api/19fc0e/books",
        method: "GET",
        data: null,
        onSuccess: 
    }`)
    const books = await res.data
    return {
        props:{
            books
        }
    }
  }

export default book