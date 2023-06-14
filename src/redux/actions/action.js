import axios from 'axios';
import * as types from './types';
import av1 from '../../assets/img/av1.jpg';
import av2 from '../../assets/img/av2.jpg';
import av3 from '../../assets/img/av3.jpg';
import av4 from '../../assets/img/av4.jpg';
import av5 from '../../assets/img/av5.jpg';
import av6 from '../../assets/img/av6.jpg';
import av7 from '../../assets/img/av7.jpg';
import av8 from '../../assets/img/av8.jpg';
import av9 from '../../assets/img/av9.jpg';
import av10 from '../../assets/img/av10.jpg';
import videoImg1 from '../../assets/img/video-img1.webp';
import videoImg2 from '../../assets/img/video-img2.webp';
import videoImg3 from '../../assets/img/video-img3.webp';
import videoImg4 from '../../assets/img/video-img4.webp';
import videoImg5 from '../../assets/img/video-img5.webp';
import videoImg6 from '../../assets/img/video-img6.webp';
import videoImg7 from '../../assets/img/video-img7.webp';
import videoImg8 from '../../assets/img/video-img8.webp';
import videoImg9 from '../../assets/img/video-img9.webp';
import videoImg10 from '../../assets/img/video-img10.webp';
import videoHover1 from '../../assets/img/video-hover1.webp';
import videoHover2 from '../../assets/img/video-hover2.webp';
import videoHover3 from '../../assets/img/video-hover3.webp';
import videoHover4 from '../../assets/img/video-hover4.webp';
import videoHover5 from '../../assets/img/video-hover5.webp';
import videoHover6 from '../../assets/img/video-hover6.webp';
import videoHover7 from '../../assets/img/video-hover7.webp';
import videoHover8 from '../../assets/img/video-hover8.webp';
import videoHover9 from '../../assets/img/video-hover9.webp';
import videoHover10 from '../../assets/img/video-hover10.webp';
import firebaseApp from "../../firebase/firebase.app";
import firebase from "firebase";
import Cookies from 'js-cookie';

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const hour = new Date(new Date().getTime() + 60 * 60 * 1000);

//Get all videos
export const getDataVideos = () => async (dispatch) => {
    dispatch(setLoading());
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => res.data);

        const obj = [av1, av2, av3, av4, av5, av6, av7, av8, av9, av10];
        const imgObj = [videoImg1, videoImg2, videoImg3, videoImg4, videoImg5, videoImg6, videoImg7,
            videoImg8, videoImg9, videoImg10];
        const videoObj = [videoHover1, videoHover2, videoHover3, videoHover4, videoHover5, videoHover6, videoHover7, videoHover8,
            videoHover9, videoHover10];

        const data = response.map((res, i) => ({
            ...res,
            img: obj[i],
            videoImg: imgObj[i],
            videoHover: videoObj[i]
        }));

        dispatch(getAllVideos(data));
    } catch (e) {
        console.error(e)
    }
};


export const login = ({email, password}) => async dispatch => {
    // dispatch(setLoading());

    try {
        const res = await firebaseApp.auth().createUserWithEmailAndPassword(email, password);
        const user = await res.user;
        const generalUserData = {
            email: user.email,
            displayName: user.displayName,
            picture: user.photoURL,
            uuid: user.uid
        };

        Cookies.set('token', JSON.stringify(generalUserData), {expires: hour});
        dispatch(loginAction(generalUserData));
    } catch (e) {
        console.log(e)
    }
};


export const loginWithGoogle = () => async dispatch => {
    try {
        const res = await firebaseApp.auth().signInWithPopup(googleAuthProvider);
        const user = await res.user;
        const generalUserData = {
            email: user.email,
            displayName: user.displayName,
            picture: user.photoURL,
            uuid: user.uid
        };

        Cookies.set('token', JSON.stringify(generalUserData), {expires: hour});
        dispatch(loginAction(generalUserData));

    } catch (e) {
        console.log(e)
    }
};


export const logout = () => dispatch => {
    // dispatch(setLoading());
    firebaseApp.auth().signOut();
    Cookies.remove('token');
    dispatch(logoutAction());
};


export function getAllVideos(videos) {
    return {
        type: types.GET_ALL_VIDEOS,
        videos
    }
}

export function setLoading() {
    return {
        type: types.SET_LOADING
    }
}

export const loginAction = (data) => ({
    type: types.LOGIN,
    payload: data
});

export const logoutAction = () => ({
    type: types.LOGOUT
});