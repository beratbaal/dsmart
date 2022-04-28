import React from 'react';
import VideoJS from "../Components/VideoJS"



export class VideoJSView extends React.Component {
    constructor(props) {
        super(props);

    }
  
    render() {
        return (
            <div className='videomaindiv'>
               
                
                <VideoJS />
               
            
            </div>
        );
    }
}
