import React, {useEffect, useState} from "react"
import "./MovieList.css"
import { useParams } from "react-router-dom"
import Cards from "../Card/Cards"
import axios from "axios"
import Pagination from "../Pagination/Pagination"

const MovieList = () => {
    
    const [movieList, setMovieList] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10)
    const [query, setQuery] = useState("");
    const {type} = useParams() 

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getData()
    }, [type])

    const getData = () => {
        axios.get(`https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then((res) => setMovieList(res.data.results))
        .catch((error) => console.log(error.message))
    }

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage
    const currentPost = movieList.slice(firstPostIndex, lastPostIndex)

    return (
        <div className="movie__list">
            <div className="search_input_div" style={{ display: 'flex', justifyContent: 'center' }}>
            <input type="search" onChange={(e) => setQuery(e.target.value)} className="search_input" placeholder="Search" /> 
             </div>
            <div className="list__cards">
                {
                    currentPost.filter(movie => movie.original_title.toLowerCase().includes(query)).map(movie => (
                        <Cards key={movie.id} movie={movie} />
                    ))
                }
            </div>
            <Pagination totalPosts={movieList.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage}
             currentPage={currentPage}
             ></Pagination>
        </div>
    )
}

export default MovieList