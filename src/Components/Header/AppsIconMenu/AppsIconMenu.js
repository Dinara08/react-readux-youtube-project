import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import AppsIcon from "@material-ui/icons/Apps";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Popper from "@material-ui/core/Popper";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ShopIcon from '@material-ui/icons/Shop';
import PlayCircleFilledRoundedIcon from '@material-ui/icons/PlayCircleFilledRounded';
import YouTubeIcon from '@material-ui/icons/YouTube';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    paper: {
        marginRight: theme.spacing(2),
    },
    appIcon: {
        color: '#ff0000',
        marginRight: '16px'
    },
    appItem: {
        padding: '8px 36px 8px 16px',
        margin: '5px 0'
    },
    appText: {
        fontSize: '0.87rem',
        color: '#111111'
    }
}));

const AppsIconMenu = props => {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

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

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);


    return (
        <div className={classes.root}>
            <IconButton ref={anchorRef}
                        aria-controls={open ? 'menu-list-grow' : undefined}
                        aria-haspopup="true"
                        onClick={handleToggle}
            >
                <Badge>
                    <AppsIcon/>
                </Badge>
            </IconButton>

            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                {({TransitionProps, placement}) => (
                    <Grow
                        {...TransitionProps}
                        style={{transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'}}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                    <MenuItem className={classes.appItem}>
                                        <ShopIcon className={classes.appIcon}/>
                                        <Typography className={classes.appText}>YouTube TV</Typography>
                                    </MenuItem>
                                    <Divider/>
                                    <MenuItem className={classes.appItem}>
                                        <PlayCircleFilledRoundedIcon className={classes.appIcon}/>
                                        <Typography className={classes.appText}>YouTube Music</Typography></MenuItem>
                                    <MenuItem className={classes.appItem}>
                                        <YouTubeIcon className={classes.appIcon}/>
                                        <Typography className={classes.appText}>YouTube Kids</Typography>
                                    </MenuItem>
                                    <Divider/>
                                    <MenuItem className={classes.appItem}>
                                        <YouTubeIcon className={classes.appIcon}/>
                                        <Typography className={classes.appText}>Creator Academy</Typography>
                                    </MenuItem>
                                    <MenuItem className={classes.appItem}>
                                        <YouTubeIcon className={classes.appIcon}/>
                                        <Typography className={classes.appText}>YouTube for Artists</Typography>
                                    </MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
    )
};

export default AppsIconMenu;