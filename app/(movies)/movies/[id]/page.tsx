import { Suspense } from "react"
import MovieInfo, {getMovie} from "../../../../components/movie-info"
import MovieVideos from "../../../../components/movie-videos"

interface IParams{
    params : {id : string}
}


export async function generateMetadata({params : {id}} : IParams){
    const movie = await getMovie(id)
    return {
        title : movie.title
    }

}

export default async function MovieDetail({params : {id}} : IParams){
    return <div>
        <Suspense fallback={<h1>Loading Movie Info</h1>}> {/* lets you display a fallback until its children have finished loading. */}
            <MovieInfo id={id}/>
        </Suspense>
        <Suspense fallback={<h1>Loading Movie Videos</h1>}>
            <MovieVideos id={id}/>
        </Suspense>
    </div>
    // const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]) //Parallel Requests - It fetches two things at the same time
}