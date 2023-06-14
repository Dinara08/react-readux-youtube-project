import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import {red} from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import videoImg1 from '../../assets/img/video-img1.webp';
import videoHover1 from '../../assets/img/video-hover1.webp';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import cardAvatar from '../../assets/img/cardAvatar.jpg';
import MenuItem from "@material-ui/core/MenuItem";
import Popper from "@material-ui/core/Popper";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import MenuList from "@material-ui/core/MenuList";
import Divider from "@material-ui/core/Divider";
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import FlagIcon from '@material-ui/icons/Flag';
import ListItemIcon from "@material-ui/core/ListItemIcon";
import {useDispatch, useSelector} from "react-redux";
import {getDataVideos} from "../../redux/actions/action";
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '300px',
        padding: '10px',
        backgroundColor: 'transparent',
        cursor: 'pointer',
        '&:hover': {
            '& $hideIcon': {
                opacity: 1
            }
        }
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
        position: 'relative'
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    cardHeader: {
        display: 'flex',
        fontFamily: 'Roboto, sans-serif'
    },
    avatar: {
        width: '36px',
        height: '36px',
        border: '1px solid rgba(0, 0, 0, .4)'
    },
    cardMedia: {
        paddingRight: '24px',
    },
    cardTitle: {
        fontSize: '1rem',
        margin: 0,
        marginBottom: 6
    },
    cardSubTitle: {
        margin: 0,
        display: 'flex',
        alignItems: 'center',
        fontSize: '0.87rem',
        fontWeight: '400',
        lineHeight: '1.4',
        color: 'rgb(96, 96, 96)',

    },
    cardData: {
        display: 'flex',
        color: 'rgb(96, 96, 96)',
        fontSize: '0.87rem'
    },
    subIcon: {
        fontSize: '1.09rem',
        paddingLeft: '4px'
    },
    cardMenuItem: {
        color: '#030303',
        fontSize: '0.87rem'
    },
    cardMenuIcon: {
        marginRight: '16px',
        minWidth: 'auto',
        color: '#909090'
    },
    mediaGroupIcons: {
        position: 'absolute',
        top: '5px',
        right: '3px'
    },
    mediaIconWrap: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        // backgroundColor: 'red',
        borderRadius: '2px',
        marginBottom: '5px',
        display: 'flex',
        padding: '2px',
        alignItems: 'center'
    },
    mediaIcon: {
        color: '#ffffff',
        width: '0.9em',
        height: '0.9em'
    },
    extraText: {
        color: '#ffffff',
        textTransform: 'uppercase',
        fontSize: '0.85rem',
        fontWeight: '500',
        padding: '0 4px'
    },
    hideIcon: props => ({
        opacity: props.open ? 1 : 0,
        padding: 0
    })
}));

const options = [
    {icon: <PlaylistPlayIcon/>, title: 'Add to queue'},
    {icon: <WatchLaterIcon/>, title: 'Save to Watch later'},
    {icon: <PlaylistAddIcon/>, title: 'Save to playlist'},
    {icon: <NotInterestedIcon/>, title: 'Not interested'},
    {icon: <RemoveCircleOutlineIcon/>, title: 'Don\'t recommend channel'},
    {icon: <FlagIcon/>, title: 'Report'}
];

const IsolatedCard = ({v, loading}) => {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const classes = useStyles({open});
    const [hover, setHover] = React.useState(false);
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };


    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    const handleClickAway = (e) => {
        e.stopPropagation(); // Не убирай !
    };

    React.useEffect(() => {
        if (open) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
    }, [open]);

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;

        // console.log(open)
    }, [open]);

    return (
        <Card
            className={classes.root}
            elevation={0} role="button"
            onClick={() => console.log()}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {loading ? (
                <Skeleton animation="wave" variant="rect" width={345} height={172} />
            ) : (
                <CardMedia
                    className={classes.media}
                    image={hover ? v.videoHover : v.videoImg}
                    title={v.name}
                    children={
                        <div className={classes.mediaGroupIcons}
                             style={hover ? {'display': 'block'} : {'display': 'none'}}>
                            <div className={classes.mediaIconWrap}>
                                {/*<span className={classes.extraText}>Watch later</span>*/}
                                <WatchLaterIcon className={classes.mediaIcon}/>
                            </div>
                            <div className={classes.mediaIconWrap}>
                                {/*<span className={classes.extraText}>Add to queue</span>*/}
                                <PlaylistPlayIcon className={classes.mediaIcon}/>
                            </div>
                        </div>
                    }
                />
            )}
            <CardHeader
                style={{alignItems: 'flex-start', padding: '16px 0'}}
                avatar={
                    loading ? (
                        <Skeleton animation="wave" variant="circle" width={40} height={40} />
                    ) : (
                        <div role="button" aria-hidden="true" onClick={handleClickAway}>
                            <Avatar className={classes.avatar} src={v.img}/>
                        </div>
                    )
                }
                action={
                    loading ? null : (
                        <div style={{display: 'flex'}}>
                            <div style={{padding: '8px'}}>
                                <IconButton
                                    disableRipple
                                    ref={anchorRef}
                                    aria-controls={open ? 'menu-list-grow' : undefined}
                                    aria-haspopup="true"
                                    onClick={handleToggle}
                                    className={classes.hideIcon}
                                >
                                    <MoreVertIcon/>
                                </IconButton>
                            </div>
                            <Popper
                                open={open}
                                anchorEl={anchorRef.current}
                                placement="bottom-start"
                                role={undefined}
                                transition
                                disablePortal
                                style={{zIndex: 1}}
                            >
                                <Paper>
                                    <ClickAwayListener onClickAway={handleClose}>
                                        <MenuList autoFocusItem={open} id="menu-list-grow"
                                                  onKeyDown={handleListKeyDown}>
                                            {options.map((option, i) => {
                                                return (
                                                    <div key={i}>
                                                        <MenuItem key={i} onClick={handleClose}
                                                                  className={classes.cardMenuItem}>
                                                            <ListItemIcon
                                                                className={classes.cardMenuIcon}>{option.icon}</ListItemIcon>
                                                            {option.title}
                                                        </MenuItem>
                                                        {i === 2 && <Divider style={{margin: '8px 0'}}/>}
                                                    </div>
                                                )
                                            })}
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Popper>
                        </div>
                    )
                }
                title={
                    loading ? (
                        <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />
                    ) : (
                        <h3 className={classes.cardTitle}>{v.name}</h3>
                    )}
                subheader={
                    loading ? <Skeleton animation="wave" height={10} width="40%" /> : (
                        <>
                            <h4 className={classes.cardSubTitle}>{v.username}<MusicNoteIcon
                                className={classes.subIcon}/></h4>
                            <div className={classes.cardData}>
                                <span className={classes.cardViews}>{v.address?.suite}</span>
                                <span style={{margin: '0 5px'}}>•</span>
                                <span>{v.address?.geo.lat}</span>
                            </div>
                        </>
                    )
                }
            />
        </Card>
    )
};

const VideoCard = props => {
    const dispatch = useDispatch();
    const videos = useSelector(state => state.reducer.videos);
    const {loading} = props;

    useEffect(() => {
        dispatch(getDataVideos());
    }, [dispatch]);

    return (
        <>
            {videos?.map((item, index) => {
                return (
                    <IsolatedCard loading={loading} v={item} key={index}/>
                )
            })}
        </>

    )
};

const YouTube = () => {
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 2000);

        return () => {
            clearTimeout(timer);
        }
    }, [loading]);


    return (
        <>
            <VideoCard loading={loading} />
        </>
    )
};

export default YouTube;