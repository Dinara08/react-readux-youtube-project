import React from 'react';
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import {useDispatch} from "react-redux";
import {login} from "../redux/actions/action";

const useStyles = makeStyles(theme => ({
    root: {
        width: "270px",
        margin: '15px auto',
        display: 'flex',
        alignItems: 'center'
    },
    form: {
        width: "100%"
    },
    signInBtn: {
        color: "#065FD4",
        padding: "7px 12px",
        borderRadius: "2px",
        border: "1px solid #065F94",
        height: "min-content",
        marginTop: 15,
        "& .MuiButton-startIcon": {
            "& .MuiSvgIcon-root": {
                width: 24,
                height: 24
            }
        }
    }
}));


const Login = props => {
    const classes = useStyles();

    const [name, setName] = React.useState({
        name: "",
        email: "",
        password: ""
    });

    function handleChange(event) {
        const {name, value} = event.target;

        setName(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const dispatch = useDispatch();

    function signInHandle() {
        dispatch(login(name));
        setName(prev => ({
            name: "",
            email: "",
            password: ""
        }))
    }

    return (
        <div className={classes.root}>
            {/*<FormControl>*/}
            {/*    <InputLabel htmlFor="my-input">Email address</InputLabel>*/}
            {/*    <Input id="my-input" aria-describedby="my-helper-text" />*/}
            {/*</FormControl>*/}

            <FormControl className={classes.form}>
                <TextField
                    label="Name"
                    variant="outlined"
                    style={{marginBottom: 15}}
                    size={"small"}
                    name="name"
                    value={name.name}
                    onChange={handleChange}
                />
                <TextField
                    label="Email"
                    type="email"
                    variant="outlined"
                    style={{marginBottom: 15}}
                    size={"small"}
                    name="email"
                    value={name.email}
                    onChange={handleChange}
                />
                <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    size={"small"}
                    name="password"
                    value={name.password}
                    onChange={handleChange}
                />
                <Button
                    variant="outlined"
                    color="primary"
                    className={[classes.button, classes.signInBtn].join(' ')}
                    startIcon={<AccountCircleIcon/>}
                    onClick={signInHandle}
                >
                    Sign in
                </Button>
            </FormControl>
        </div>
    );
};

export default Login;