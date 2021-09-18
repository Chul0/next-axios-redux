import axios from "axios"
import wineStyles from '../styles/Books.module.css'

const wine = ({data}) => {
    return (
        <>
            <h1>Wines</h1>
            <p>Fetched all wines by axios get</p>
            <div className={wineStyles.grid}>
                {data.map(wines => 
                <div>
                    <img src={wines.picture} />
                </div>
                )}
            </div>
        </>
    )
}

export const getStaticProps = async () => {
    const { data } = await axios.get(`http://myapi-profstream.herokuapp.com/api/21a11f/wines`)
    console.log(data);
    return {
        props: {
            data
        }
    }
}

export default wine