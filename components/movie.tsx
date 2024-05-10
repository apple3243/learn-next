'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./movie.module.css"

interface IMovieProps {
    title : string;
    id : string;
    poster_path : string    
}


export default function Movie({poster_path, title, id} : IMovieProps){
    const router = useRouter();
    const onClick = () => {
        router.push(`/movies/${id}`)
    }
    return (
        <div className={styles.movie}>
            <img src={poster_path} alt={title} onClick={onClick}/>
            <Link href={`/movies/${id}`}>{title}</Link>
        </div>
    )
}