import { createContext, useState } from "react";

const SelectedMovieContext = createContext({
    id:"",
    title:"",
    description:"",
    poster:"",
    background:"",
    average:"",
    selectMovie:(selectedMovie)=>{},
});

export function SelectedMovieContextProvider(props){

    function selectMovie(id,title,description,poster,background,average){
        setSelectedMovie({
            id:id,
            title:title,
            description:description,
            poster:poster,
            background:background,
            average:average,
        })
    }

    const [selectedMovie, setSelectedMovie] = useState({
        id:"",
        title:"",
        description:"",
        poster:"",
        background:"",
        average:"",
    });

    const context = {
        id:selectedMovie.id,
        title:selectedMovie.title,
        description:selectedMovie.description,
        poster:selectedMovie.poster,
        background:selectedMovie.background,
        average:selectMovie.average,
        selectMovie:selectMovie,
    };

    return<SelectedMovieContext.Provider value={context}>
        {props.children}
    </SelectedMovieContext.Provider>
}

export default SelectedMovieContext;