import React from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import KeyboardVoiceIcon from "@material-ui/icons/KeyboardVoice";

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),

    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    }
});

const useStyles = makeStyles((theme) => ({
    voiceSearchBtn: {
        color: '#606060'
    },
    dialogTitle: {
        padding: '0 0 1.2rem 0',
        '& h6': {
            fontSize: '1.5rem',
            fontWeight: 'normal',
            color:'rgb(3, 3, 3)'
        }
    },
    dialogLayer: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        '& .MuiPaper-rounded': {
            borderRadius: 0,
            padding: '48px 32px 16px',
            minHeight: '400px'
        }
    },
    dialogContent: {
       padding: '0 !important',
        '& p': {
           color: 'rgb(96, 96, 96)',
            fontSize: '0.87rem'
        }
    },
    voiceBtn: {
        backgroundColor: '#CECECE',
        width: '68px',
        height: '68px',
        margin: '0 auto',
        borderRadius: '50%',
        '& .MuiSvgIcon-root': {
            color: '#606060',
            fontSize: '2.5rem'
        }
    }
}));

const DialogTitle = withStyles(styles)((props) => {
    const {children, classes, onClose, ...other} = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon/>
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

export default function CustomizedDialogs() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const classes = useStyles();

    return (
        <div>
            <IconButton
                className={classes.voiceSearchBtn}
                onClick={handleClickOpen}
            >
                <KeyboardVoiceIcon/>
            </IconButton>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} className={classes.dialogLayer}>
                <DialogTitle onClose={handleClose} className={classes.dialogTitle}>
                    Search with your voice
                </DialogTitle>
                <DialogContent className={classes.dialogContent}>
                    <Typography gutterBottom>
                        To search by voice, go to your browser settings and allow access to microphone
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus className={classes.voiceBtn}>
                        <KeyboardVoiceIcon/>
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
