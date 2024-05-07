import { Suspense } from "react"
import MovieInfo from "../../../../components/movie-info"
import MovieVideos from "../../../../components/movie-videos"

export default async function MovieDetail({
    params : {id},  
}:{
    params : {id: string},
}){
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