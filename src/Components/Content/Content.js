import React from 'react';
import VideoCard from "../VideoCard/VideoCard";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    content: {
        width: '100%',
        maxWidth: '100%',
        padding: '0 1rem',
        margin: '24px auto 0',
    },
    videosWrap: {
        display: 'flex',
        justifyContent: 'flex-start',
        flexFlow: 'row wrap'
    }
}));

function Content(props) {
    const classes = useStyles();

    return (
        <div className={classes.content}>
            <div className={classes.videosWrap}>
                <VideoCard/>
            </div>
        </div>
    );
}

export default Content;