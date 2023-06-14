import React from 'react';
import Chip from "@material-ui/core/Chip";
import {makeStyles} from "@material-ui/core/styles";
import Carousel, {consts} from 'react-elastic-carousel';
import './Chips.css';
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
        },
        backgroundColor: "#ffffff",
        borderBottom: '1px solid #E5E5E5'
    },
    chip: {
        margin: '12px',
        marginLeft: 0,
        border: '1px solid rgba(0, 0, 0, 0.1)',
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        color: '#030303',
        fontSize: '0.876rem',

        "&:hover": {
            backgroundColor: 'rgba(0, 0, 0, 0.1)'
        }
    }
}));


const Chips = props => {

    const classes = useStyles();

    // const handleDelete = () => {
    //     console.info('You clicked the delete icon.');
    // };
    //
    // const handleClick = () => {
    //     console.info('You clicked the Chip.');
    // };

    const chipTitle = [
        {label: "All"}, {label: "K-Pop"}, {label: "Fashion"}, {label: "Chill-out music"}, {label: "Ambient music"},
        {label: "Jungkook"}, {label: "Piano"}, {label: "Reading"}, {label: "Vocabulary"}, {label: "Motivation"},
        {label: "Makeup"}, {label: "Nature"}, {label: "Training"}, {label: "Live"}, {label: "Conversation"},
        {label: "Recently uploaded"}, {label: "Mixes"}, {label: "American English"}, {label: "Cooking"},
        {label: "Haul Videos"}, {label: "JavaScript"}, {label: "Phrases"}, {label: "Beauty"}, {label: "Disco"}
    ];

    function onNextEasing(e) {
        console.log('onNext');
    }

    return (
        <div className={classes.root}>
            <Carousel
                itemsToShow={17}
                pagination={false}
                transitionMs={200}
                easing={"ease-in-out"}
                tiltEasing={"ease-in-out"}
                onNextStart={onNextEasing}
                renderArrow={props => {
                    props.isedge = props.isEdge.toString();

                    delete props.isEdge;
                    return (
                        props.type === "PREV" ? (
                            <IconButton {...props} className={["prev-rec", props.isedge === 'true' && 'none'].join(' ')}>
                                <ChevronLeftIcon />
                            </IconButton>
                        ) : (
                            <IconButton {...props} className={["next-rec", props.isedge === 'true' && 'none'].join(' ')}>
                                <ChevronRightIcon />
                            </IconButton>
                        )
                    )
                }}
            >
                {
                    chipTitle?.map((c, i) => {
                        return (
                            <Chip  key={i} label={c.label} component="a" href="#chip" clickable className={classes.chip}/>
                        )
                    })
                }
            </Carousel>
        </div>
    )
};
export default Chips;