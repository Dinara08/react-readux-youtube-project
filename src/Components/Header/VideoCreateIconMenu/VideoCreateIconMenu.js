import React from 'react';
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import Grow from "@material-ui/core/Grow";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import makeStyles from "@material-ui/core/styles/makeStyles";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import ShopOutlinedIcon from '@material-ui/icons/ShopOutlined';
import WifiTetheringIcon from '@material-ui/icons/WifiTethering';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    paper: {
        marginRight: theme.spacing(2),
    },
    appIcon: {
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

const VideoCreateIconMenu = props => {

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

    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <div className={classes.root}>
            <IconButton
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
            >
                <Badge>
                    <VideoCallIcon/>
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
                                        <ShopOutlinedIcon className={classes.appIcon}/>
                                    <Typography className={classes.appText}>Upload video</Typography>
                                    </MenuItem>
                                    <MenuItem className={classes.appItem}>
                                        <WifiTetheringIcon className={classes.appIcon}/>
                                        <Typography className={classes.appText}>Go live</Typography>
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

export default VideoCreateIconMenu;