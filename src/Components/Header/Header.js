import React from 'react';
import {fade, makeStyles} from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import './Header.css';
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import logo from '../../assets/img/logo.png';
import Tooltip from "@material-ui/core/Tooltip";
import Avatar from "@material-ui/core/Avatar";
import avatar from '../../assets/img/avatar.jpg';
import Link from "@material-ui/core/Link";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import SettingsIcon from '@material-ui/icons/Settings';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import TranslateIcon from '@material-ui/icons/Translate';
import LanguageIcon from '@material-ui/icons/Language';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import HelpIcon from '@material-ui/icons/Help';
import FeedbackIcon from '@material-ui/icons/Feedback';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import CheckIcon from '@material-ui/icons/Check';
import ListSubheader from "@material-ui/core/ListSubheader";
import AppsIconMenu from "./AppsIconMenu/AppsIconMenu";
import VideoCreateIconMenu from "./VideoCreateIconMenu/VideoCreateIconMenu";
import clsx from "clsx";
import Switch from "@material-ui/core/Switch";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../redux/actions/action";
import SignInButton from "../SignInButton/SignInButton";
import SearchVoice from "../SearchVoice/SearchVoice";

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'flex'
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        minWidth: 640,
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            alignItems: "center"
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    rootPaper: {
        display: 'flex',
        alignItems: 'center',
        width: 640,
    },
    input: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        flex: 1,
    },
    iconButton: {
        padding: theme.spacing(0.5, 3),
        borderLeft: '1px solid rgba(0, 0, 0, .1)',
        borderRadius: 0,
        backgroundColor: 'rgb(239, 239, 239)'
    },
    divider: {
        height: 28,
        // margin: 4,
    },
    header: {
        position: 'fixed',
        boxShadow: 'none',
        borderBottom: '1px solid #E5E5E5'
    },
    openAccMenu: {
        border: '1px solid rgba(0, 0, 0, 0.1)',
        borderTop: 'none',
        outline: 'none',
    },
    accountBlock: {
        display: 'flex',
        padding: '16px'
    },
    accImg: {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        marginRight: '16px'
    },
    accTitle: {
        fontSize: '1rem',
        lineHeight: '1.4'
    },
    accText: {
        fontSize: '0.92rem',
        marginBottom: '8px'
    },
    accLink: {
        color: 'rgb(6, 95, 212)',
        fontSize: '0.87rem'
    },
    ptb: {
        padding: '8px 0'
    },
    subPlr: {
        padding: '8px 30px'
    },
    plr: {
        padding: '8px 16px'
    },
    accListItem: {
        padding: '6px 36px 6px 16px',
    },
    accListIcon: {
        color: '#909090',
        minWidth: 'auto',
        marginRight: '16px'
    },
    accEndText: {
        padding: '10px 16px',
        textTransform: 'inherit',
        color: '#111111',
        '&:hover': {
            textDecoration: 'none'
        },
        width: '100%',
        textAlign: 'left'
    },
    subAccountBlock: {
        display: 'flex'
    },
    checkIcon: {
        color: '#065fd4'
    },
    subMenuAcc: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    subAccText: {
        padding: '8px 16px 0'
    },
    border: {
        borderBottom: '1px solid rgba(0, 0, 0, 0.1)'
    },
    signInBtn: {
        color: "#065FD4",
        padding: "7px 12px",
        borderRadius: "2px",
        border: "1px solid #065F94",
        height: "min-content",
        "& .MuiButton-startIcon": {
            "& .MuiSvgIcon-root": {
                width: 24,
                height: 24
            }
        }
    },
    searchCover: {
        border: 'none',
    },
    searchInput: {
        display: 'flex',
        border: '1px solid rgba(0, 0, 0, 0.12)',
        width: '100%'
    },
}));


const ExpandMenu = ({i, handleClick, open}) => {
    const classes = useStyles();

    const languages = [
        {lang: "Afrikaans"},
        {lang: "Azərbaycan"},
        {lang: "Bahasa Indonesia"},
        {lang: "Bosanski"},
        {lang: "Catala"},
        {lang: "Cestina"},
        {lang: "Densk"},
        {lang: "Deutch"},
        {lang: "Eesti"},
        {lang: "English(India)"},
        {lang: "English(UK)"},
        {lang: "Espanol(Espana)"},
        {lang: "Espanol(Latinoamerica)"},
        {lang: "Espanol(US)"},
        {lang: "Euskara"},
        {lang: "Filipino"},
        {lang: "Français"},
        {lang: "Français(Canada)"},
        {lang: "Galego)"},
        {lang: "Hrvatski)"},
        {lang: "IsiZulu)"},
        {lang: "Islenska)"},
        {lang: "Italiano)"},
        {lang: "Kiswahili)"},
    ];

    const location = [
        {location: 'Algeria'},
        {location: 'Argentina'},
        {location: 'Australia'},
        {location: 'Austria'},
        {location: 'Azerbaijan'},
        {location: 'Bahrain'},
        {location: 'Bangladesh'},
        {location: 'Belarus'},
        {location: 'Belgium'},
        {location: 'Bolivia'},
        {location: 'Bosnia and Herzegovina'},
        {location: 'Brazil'},
        {location: 'Bulgaria'},
        {location: 'Canada'},
        {location: 'Chile'},
        {location: 'Colombia'},
        {location: 'Costa Rica'},
        {location: 'Croatia'},
        {location: 'Cyprus'},
        {location: 'Czechia'},
        {location: 'Denmark'},
        {location: 'Donimican Republic'},
        {location: 'Ecuador'},
        {location: 'Egypt'},
        {location: 'El Salvador'},
        {location: 'Estonia'},
    ];

    const [checked, setChecked] = React.useState(['wifi']);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <>
            <ListItem button onClick={() => handleClick(i)} key={i.text} className={clsx(i.divider && classes.border)}>
                {i.icon && (
                    <ListItemIcon className={classes.accListIcon}>
                        {i.icon}
                    </ListItemIcon>
                )}
                <ListItemText primary={i.text}/>
                {
                    i.expand && (
                        open[i.accessor] ? <ExpandLess/> : <ExpandMore/>
                    )
                }
            </ListItem>
            <Collapse in={!!open[i.accessor]} timeout="auto" unmountOnExit
                      className={classes.subMenu}>
                <Divider/>
                {/*{i.accessor === 'account' && (*/}
                <>
                    {/*<List component="div" disablePadding>*/}
                    <List component="nav" disablePadding
                          subheader={
                              <ListSubheader component="div" id="nested-list-subheader">
                                  {i.accessor === 'account' && 'dinara.ashurova@gmail.com'}
                                  {i.accessor === 'theme' && 'Settings applies to this browser only'}
                                  {i.accessor === 'language' && 'Choose your language'}
                                  {i.accessor === 'location' && 'Choose your location'}
                                  {i.accessor === 'restricted' && 'Restricted Mode'}
                              </ListSubheader>
                          }
                    >
                        {
                            i.accessor === 'account' &&

                            <ListItem button className={classes.nested}>
                                <ListItemText>
                                    <div className={classes.subAccountBlock}>
                                        <div className={classes.accImg}>
                                            <img src={avatar} alt={avatar}/>
                                        </div>
                                        <div className={classes.subMenuAcc}>
                                            <div>
                                                <Typography paragraph className={classes.accText}>Dinara
                                                    Ashurova</Typography>
                                                <Typography variant="caption"
                                                            display="block"
                                                            gutterBottom>
                                                    No subscribers
                                                </Typography>
                                            </div>
                                            <div>
                                                <CheckIcon className={classes.checkIcon}/>
                                            </div>
                                        </div>
                                    </div>
                                </ListItemText>
                            </ListItem>
                        }
                        <Divider/>
                        {
                            i.accessor === 'theme' &&
                            <>
                                <ListItem button className={classes.SubPlr}><ListItemText>Use device
                                    theme</ListItemText></ListItem>
                                <ListItem button className={classes.SubPlr}><ListItemText>Dark
                                    theme</ListItemText></ListItem>
                                <ListItem button className={classes.SubPlr}><ListItemText>Light
                                    theme</ListItemText></ListItem>
                            </>
                        }
                        {
                            i.accessor === 'language' &&
                            <>
                                {
                                    languages && languages.map((l, index) => {
                                        return (
                                            <ListItem button key={index}
                                                      className={classes.plr}><ListItemText>{l.lang}</ListItemText></ListItem>
                                        )
                                    })
                                }

                            </>
                        }
                        {
                            i.accessor === 'location' &&
                            <>
                                {
                                    location && location.map((l, index) => {
                                        return (
                                            <ListItem button key={index}
                                                      className={classes.plr}><ListItemText>{l.location}</ListItemText></ListItem>
                                        )
                                    })
                                }
                            </>
                        }
                        {
                            i.accessor === 'restricted' &&
                            <>
                                <Typography className={classes.plr}>
                                    This helps hide potentially mature videos. No filter is 100% accurate.
                                </Typography>
                                <Typography className={classes.plr}>This setting only applies to this
                                    browser.</Typography>
                                <ListItem>
                                    <ListItemText>ACTIVATE RESTRICTED MODE</ListItemText>
                                    <Switch
                                        edge="end"
                                        color="primary"
                                        size="medium"
                                        onChange={handleToggle('bluetooth')}
                                        checked={checked.indexOf('bluetooth') !== -1}
                                        inputProps={{'aria-labelledby': 'switch-list-label-bluetooth'}}
                                    />
                                </ListItem>
                            </>
                        }
                    </List>
                    {/*<Divider/>*/}
                </>
                {/*)}*/}
                {/*{i.accessor === 'language' && (*/}
                {/*    'language'*/}
                {/*)}*/}
                {/*{i.accessor === 'theme' && (*/}
                {/*    'theme'*/}
                {/*)}*/}
                {/*{i.accessor === 'location' && (*/}
                {/*    'location'*/}
                {/*)}*/}
            </Collapse>
        </>
    )
};


export default function PrimarySearchAppBar(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const [open, setOpen] = React.useState({});

    const handleClick = (e) => {
        if (e.accessor) {
            setOpen(prevState => ({
                // ...prevState,
                [e.accessor]: !prevState[e.accessor]
            }))
        }

        //clone the array
        // const newState = open.slice(0);

        //toggle the state of the clicked sub-menu
        // newState[i] = !newState[i];
        // setOpen(newState);
    };

    const accFirstList = [
        {text: "Your channel", icon: <AccountBoxIcon/>},
        {text: "Purchases and memberships", icon: <MonetizationOnIcon/>},
        {text: "YouTube Studio", icon: <SettingsIcon/>},
        {text: "Switch account", accessor: 'account', icon: <RecentActorsIcon/>, expand: true},
        {text: "Sign out", divider: true, icon: <ExitToAppIcon/>, click: true},
        {text: "Appearance: Device theme", accessor: 'theme', icon: <Brightness4Icon/>, expand: true},
        {text: "Language: English", accessor: 'language', icon: <TranslateIcon/>, expand: true},
        {text: "Location: Azerbaijan", accessor: 'location', icon: <LanguageIcon/>, expand: true},
        {text: "Settings", icon: <SettingsIcon/>},
        {text: "Your data in YouTube", icon: <VerifiedUserIcon/>},
        {text: "Help", icon: <HelpIcon/>},
        {text: "Send feedback", icon: <FeedbackIcon/>},
        {text: "Keyboard shortcuts", icon: <KeyboardIcon/>},
        {text: "Restricted Mode: Off", accessor: 'restricted', expand: true, icon: null},
    ];

    const user1 = useSelector(state => state.reducer.user);

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            elevation={0}
            getContentAnchorEl={null}
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}

        >
            <div className={classes.openAccMenu}>
                <div className={classes.accountBlock}>
                    <div className={classes.accImg}>
                        {/*<img src={avatar} alt="logo"/>*/}
                        <Avatar>
                            {user1?.email[0]}
                        </Avatar>
                    </div>
                    <div>
                        <Typography variant="h6" className={classes.accTitle}>{user1?.displayName}</Typography>
                        <Typography paragraph className={classes.accText}>{user1?.email}</Typography>
                        <Link className={classes.accLink}>Manage your Google Account</Link>
                    </div>
                </div>
                <Divider/>
                <List className={classes.ptb}>
                    {
                        accFirstList && accFirstList.map((i, index) =>
                            i.text === "Sign out" ? (
                                    <ListItem key={index} className="foo" button onClick={() => {
                                        dispatch(logout());
                                    }}>
                                        {i.icon && (
                                            <ListItemIcon className={classes.accListIcon}>
                                                {i.icon}
                                            </ListItemIcon>
                                        )}
                                        <ListItemText className={classes.accText}>
                                            {i.text}
                                        </ListItemText>

                                    </ListItem>
                                ) :
                                (
                                    <React.Fragment key={index}>
                                        <ExpandMenu i={i} handleClick={handleClick} open={open}/>
                                        {index === 12 && <Divider/>}
                                    </React.Fragment>
                                )
                        )

                        // return (
                        //     <React.Fragment key={index}>
                        //         <ExpandMenu i={i} handleClick={handleClick} open={open}/>
                        //         {index === 12 && <Divider/>}
                        //     </React.Fragment>
                        // )

                    }
                </List>
                <Divider/>
                {/*<Typography className={classes.ptb}>*/}
                {/*    <Link className={classes.accEndText}*/}
                {/*          component="button"*/}
                {/*          variant="body2"*/}
                {/*    >*/}
                {/*        Restricted Mode: Off*/}
                {/*    </Link>*/}
                {/*</Typography>*/}
            </div>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <MailIcon/>
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton aria-label="show 11 new notifications" color="inherit">
                    <Badge badgeContent={11} color="secondary">
                        <NotificationsIcon/>
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle/>
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    const user = useSelector(state => state.reducer.user);

    const dispatch = useDispatch();

    return (
        <div className={classes.grow}>
            <AppBar position="static" color="inherit" className={classes.header}>
                <Toolbar style={{justifyContent: 'space-between'}}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            aria-label="open drawer"
                            onClick={props.handleToggle}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography className={classes.title} variant="h6" noWrap>
                            <img src={logo} style={{width: 80}} alt="logo"/>
                        </Typography>
                    </div>
                    <Paper component="form" variant="outlined"
                           className={[classes.rootPaper, classes.searchCover].join(' ')}>
                        <div className={classes.searchInput}>
                            <InputBase
                                className={classes.input}
                                placeholder="Search"
                                inputProps={{'aria-label': 'search youtube'}}
                            />
                            <Button type="submit" className={classes.iconButton} aria-label="search">
                                <SearchIcon/>
                            </Button>
                        </div>
                        <SearchVoice/>
                    </Paper>


                    {/*<div className={classes.grow}/>*/}
                    <div className={classes.sectionDesktop}>
                        {user ? <VideoCreateIconMenu/> : null}
                        <AppsIconMenu/>
                        {
                            user ?
                                <Tooltip title="Notifications">
                                    <IconButton aria-label="show 17 new notifications">
                                        <Badge>
                                            <NotificationsIcon/>
                                        </Badge>
                                    </IconButton>
                                </Tooltip>
                                : null
                        }

                        {
                            user ?
                                <IconButton
                                    edge="end"
                                    aria-label="account of current user"
                                    aria-controls={menuId}
                                    aria-haspopup="true"
                                    onClick={handleProfileMenuOpen}
                                >
                                    <Avatar>
                                        {user?.email[0]}
                                    </Avatar>
                                </IconButton>
                                :
                                // null
                                <SignInButton/>
                            // <Button
                            //     variant="outlined"
                            //     color="primary"
                            //     className={[classes.button, classes.signInBtn].join(' ')}
                            //     startIcon={<AccountCircleIcon/>}
                            //     onClick={signInHandle}
                            // >
                            //     Sign in
                            // </Button>
                        }


                        {/*<Button*/}
                        {/*    variant="outlined"*/}
                        {/*    color="primary"*/}
                        {/*    className={[classes.button, classes.signInBtn].join(' ')}*/}
                        {/*    startIcon={<AccountCircleIcon/>}*/}
                        {/*    onClick={signInHandle}*/}
                        {/*>*/}
                        {/*    Sign in*/}
                        {/*</Button>*/}


                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon/>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </div>
    );
}