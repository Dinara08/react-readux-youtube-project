import React from 'react';
import clsx from 'clsx';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import WifiTetheringIcon from '@material-ui/icons/WifiTethering';
import SettingsIcon from '@material-ui/icons/Settings';
import FlagIcon from '@material-ui/icons/Flag';
import HelpIcon from '@material-ui/icons/Help';
import FeedbackIcon from '@material-ui/icons/Feedback';
import Link from "@material-ui/core/Link";
import './Sidebar.css';
import Chips from "../Chips/Chips";
import Content from "../Content/Content";
import {useSelector} from "react-redux";
import SignInButton from "../SignInButton/SignInButton";
import AlbumRoundedIcon from '@material-ui/icons/AlbumRounded';
import NoteIcon from '@material-ui/icons/Note';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import SearchVoice from "../SearchVoice/SearchVoice";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        [theme.breakpoints.up('sm')] : {
            // backgroundColor: 'red'
        }
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        // padding: theme.spacing(3),
    },
    listWrap: {
        color: '#030303'
    },
    listIcon: {
        minWidth: 42,
        color: '#606060',
    },
    listTitle: {
        padding: '8px 0',
        textTransform: 'uppercase',
        fontSize: '1.13em',
        fontWeight: 500,
        color: '#606060',
    },
    plr: {
        paddingRight: 24,
        paddingLeft: 24,
    },
    copyright: {
        paddingTop: 16,
        paddingBottom: 16,
        color: '#909090',
        fontSize: '0.8rem'
    },
    listIconYt: {
        color: '#404040'
    },
    listItem: props => ({
        flexDirection: !props ? 'column' : 'row',
        '& .MuiListItemIcon-root': {
            minWidth: 'auto',
            marginBottom: '6px'
        },
        '& .MuiListItemText-root span': {
            fontSize: '0.67rem'
        }

        // justifyContent: 'center'
    })
}));

export default function MiniDrawer(props) {

    const sbMainList = [
        {text: "Home", icon: <HomeIcon/>},
        {text: "Trending", icon: <WhatshotIcon/>},
        {text: "Subscriptions", icon: <SubscriptionsIcon/>},
        {text: 'Library', icon: <VideoLibraryIcon/>},
    ];

    const sbSecondaryList = [
        {text: 'Library', icon: <VideoLibraryIcon/>},
        {text: 'History', icon: <HistoryIcon/>},
        {text: 'Your videos', icon: <PlayCircleOutlineIcon/>},
        {text: 'Watch later', icon: <WatchLaterIcon/>},
        {text: 'Playlist', icon: <PlaylistPlayIcon/>},
        {text: 'Liked videos', icon: <ThumbUpIcon/>},
    ];

    const userShortList = [
        {text: 'Library', icon: <VideoLibraryIcon/>},
        {text: 'History', icon: <HistoryIcon/>},
    ];

    const sbMoreFromYList = [
        {text: 'Gaming', icon: <SportsEsportsIcon/>},
        {text: 'Live', icon: <WifiTetheringIcon/>}
    ];

    const sbInfoList = [
        {text: 'Settings', icon: <SettingsIcon/>},
        {text: 'Report history', icon: <FlagIcon/>},
        {text: 'Help', icon: <HelpIcon/>},
        {text: 'Send feedback', icon: <FeedbackIcon/>},
    ];

    const yotubeCategory = [
        {text: 'Music', icon: <AlbumRoundedIcon/>},
        {text: 'Gaming', icon: <SportsEsportsIcon/>},
        {text: 'News', icon: <NoteIcon/>},
        {text: 'Live', icon: <WifiTetheringIcon/>},
        {text: '360° Video', icon: <PlayCircleFilledIcon/>},
    ];


    const classes = useStyles(props.open);
    const theme = useTheme();


    const user = useSelector(state => state.reducer.user);

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: props.open,
                    [classes.drawerClose]: !props.open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: props.open,
                        [classes.drawerClose]: !props.open,
                    }),
                }}
            >
                {props.open ? (
                    <>
                        <List>
                            {
                                sbMainList && sbMainList.map((i, index) => {
                                    delete sbMainList[3];

                                    return (
                                        <ListItem button key={index}
                                                  className={[classes.listWrap, classes.plr].join(' ')}>
                                            <ListItemIcon className={classes.listIcon}>{i.icon}</ListItemIcon>
                                            <ListItemText primary={i.text} className="list-text"/>
                                        </ListItem>
                                    )
                                })
                            }
                        </List>
                        <Divider/>
                        {
                            user ?
                                <>
                                    <List>
                                        {
                                            sbSecondaryList && sbSecondaryList.map((i) => (
                                                <ListItem button key={i.text}
                                                          className={[classes.listWrap, classes.plr].join(' ')}>
                                                    <ListItemIcon className={classes.listIcon}>{i.icon}</ListItemIcon>
                                                    <ListItemText primary={i.text} className="list-text"/>
                                                </ListItem>
                                            ))
                                        }
                                    </List>
                                    <Divider/>
                                </>
                                :
                                (
                                    <>
                                        <List>
                                            {
                                                userShortList && userShortList.map((u) => (
                                                    <ListItem button key={u.text}
                                                              className={[classes.listWrap, classes.plr].join(' ')}>
                                                        <ListItemIcon
                                                            className={classes.listIcon}>{u.icon}</ListItemIcon>
                                                        <ListItemText primary={u.text} className="list-text"/>
                                                    </ListItem>
                                                ))
                                            }
                                        </List>
                                        <Divider/>
                                        <div className="bottom-inks sidebar-signin">
                                            <Typography paragraph className="signin-title">
                                                Sign in to like videos, comment and subscribe.
                                            </Typography>
                                            <SignInButton/>
                                        </div>
                                        <Divider/>
                                        <List>
                                            <Typography variant="h3"
                                                        noWrap
                                                        className={[classes.listTitle, classes.plr].join(' ')}>
                                                Best of Youtube
                                            </Typography>
                                            {
                                                yotubeCategory && yotubeCategory.map((c) => (
                                                    <ListItem button key={c.text}
                                                              className={[classes.listWrap, classes.plr].join(' ')}>
                                                        <ListItemIcon
                                                            className={[classes.listIcon, classes.listIconYt].join(' ')}>
                                                            {c.icon}
                                                        </ListItemIcon>
                                                        <ListItemText primary={c.text} className="list-text"/>
                                                    </ListItem>
                                                ))
                                            }
                                        </List>
                                        <Divider/>
                                        <List>
                                            <ListItem button className={[classes.listWrap, classes.plr].join(' ')}>
                                                <ListItemIcon className={classes.listIcon}>
                                                    <AddCircleIcon/>
                                                </ListItemIcon>
                                                <ListItemText primary="Browse channels" className="list-text"/>
                                            </ListItem>
                                        </List>
                                    </>
                                )
                        }

                        {
                            user ?
                                <>
                                    <List>
                                        <Typography variant="h3" noWrap
                                                    className={[classes.listTitle, classes.plr].join(' ')}>Subscriptions</Typography>
                                    </List>
                                </>
                                : null
                        }
                        <Divider/>
                        <List>
                            <Typography variant="h3" noWrap className={[classes.listTitle, classes.plr].join(' ')}>More
                                From
                                YouTube</Typography>
                            {
                                user ?
                                    sbMoreFromYList && sbMoreFromYList.map((i) => (
                                        <ListItem button key={i.text} className={[classes.listWrap, classes.plr].join(' ')}>
                                            <ListItemIcon className={classes.listIcon}>{i.icon}</ListItemIcon>
                                            <ListItemText primary={i.text} className="list-text"/>
                                        </ListItem>
                                    )) :
                                    <ListItem button className={[classes.listWrap, classes.plr].join(' ')}>
                                        <ListItemIcon className={classes.listIcon}>
                                            <WifiTetheringIcon/>
                                        </ListItemIcon>
                                        <ListItemText primary="Live" className="list-text"/>
                                    </ListItem>
                            }
                        </List>
                        <Divider/>
                        <List>
                            {
                                sbInfoList && sbInfoList.map((i) => (
                                    <ListItem button key={i.text} className={[classes.listWrap, classes.plr].join(' ')}>
                                        <ListItemIcon className={classes.listIcon}>{i.icon}</ListItemIcon>
                                        <ListItemText primary={i.text} className="list-text"/>
                                    </ListItem>
                                ))
                            }
                        </List>
                        <Divider/>
                        <div className="bottom-inks">
                            <Link>About</Link>
                            <Link>Press</Link>
                            <Link>Copyright</Link>
                            <Link>Contact us</Link>
                            <Link>Creators</Link>
                            <Link>Avertise</Link>
                            <Link>Developers</Link>
                        </div>
                        <div className="bottom-inks sec-bottom-links">
                            <Link>Terms</Link>
                            <Link>Privacy</Link>
                            <Link>Policy and Safety</Link>
                            <Link>How Youtube works</Link>
                            <Link>Test new features</Link>
                        </div>
                        <Typography className={[classes.copyright, classes.plr].join(' ')}>&copy; 2020 Google
                            LLC</Typography>
                    </>
                ) : (
                    <List>
                        {
                            sbMainList && sbMainList.map((i) => (
                                <ListItem button key={i.text}
                                          className={[classes.listWrap, classes.listItem, classes.plr].join(' ')}>
                                    <ListItemIcon className={classes.listIcon}>{i.icon}</ListItemIcon>
                                    <ListItemText primary={i.text} className="list-text"/>
                                </ListItem>
                            ))
                        }
                    </List>
                )}
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar}/>

                <Chips/>

                <Content/>

            </main>
        </div>
    );
}