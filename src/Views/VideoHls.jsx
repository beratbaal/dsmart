import React from 'react';
import VideoJS from "../Components/VideoJS"
import { Link } from 'react-router-dom';
import {Footer} from "./Footer";
import {Logo} from '../Components/Logo';

export class VideoHls extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='videomaindiv'>
            <Logo logoStyle="videologocustom"/>
            <VideoJS src={"https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8"}>
            </VideoJS>
            <Footer/>
            </div>
        );
    }
}
