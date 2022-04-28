import React from 'react';
import VideoJS from "../Components/VideoJS"
import { Footer } from "./Footer";
import { Logo } from '../Components/Logo';


export class VideoJSView extends React.Component {
    constructor(props) {
        super(props);

    }
  
    render() {
        return (
            <div className='videomaindiv'>
               
                <Logo logoStyle="videologocustom" />
                <VideoJS />
               
                <Footer />
            </div>
        );
    }
}
