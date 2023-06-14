import React, {Fragment} from 'react';
import Button from "@material-ui/core/Button";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import {makeStyles} from "@material-ui/core/styles";
import {loginWithGoogle} from "../../redux/actions/action";
import {useDispatch, useSelector} from "react-redux";

const useStyles = makeStyles((theme) => ({
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
    }
}));

const SignInButton = props => {
    const classes = useStyles();

    const dispatch = useDispatch();

    function signInHandle() {
        dispatch(loginWithGoogle());
    }

    return (
        <Fragment>
            <Button
                variant="outlined"
                color="primary"
                className={[classes.button, classes.signInBtn].join(' ')}
                startIcon={<AccountCircleIcon/>}
                onClick={signInHandle}
            >
                Sign in
            </Button>
           </Fragment>
    )
};

export default SignInButton;