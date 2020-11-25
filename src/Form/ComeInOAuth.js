import React from 'react'
import {WebView} from "react-native-webview";
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import {accessToken, hideLoader, showLoader} from "../../Redux/Form/actions";
import {Loader} from "../../component/Loader";


const ComeInOAuth = () => {

    const requestURL = 'https://github.com/login/oauth/authorize?' +
        'scope=user:email&' +
        'client_id=e7e0ddce3824fe141cac&' +
        'login=dimkazaporozhets@gmail.com&';
    const requestToken = 'https://github.com/login/oauth/access_token';
    const clientId = 'e7e0ddce3824fe141cac';
    const clientSecret = '30bc446bee1112f5730012702b82f394fa17e6e3';

    const state = useSelector(state => state);
    const loading = useSelector(state => state.loading.loading)
    const dispatch = useDispatch();

    if (loading) {
        return (
            <Loader/>
        )
    }

    return (
        <WebView
            source ={ {
                uri: requestURL }}
            onLoadStart={(syntheticEvent) => {
                const {nativeEvent} = syntheticEvent
                console.log(nativeEvent.url)

                if (nativeEvent.url.startsWith('https://www.google.com/')) {
                    const indexCode = nativeEvent.url.indexOf('=')
                    const searchCode = nativeEvent.url.substr(indexCode + 1, nativeEvent.url.length)
                    console.log(searchCode)

                    axios.post(requestToken,
                        {
                            client_id: clientId,
                            client_secret: clientSecret,
                            code: searchCode,
                        }, {
                            headers: {
                                'Content-Type': 'application/json',
                                Accept: 'application/json'
                            }
                        }
                    ).then(response => {
                        dispatch(showLoader())
                        setTimeout(() => {
                            console.log(response.data);
                            dispatch(accessToken(response.data))
                            dispatch(hideLoader())
                        },2000)
                        }
                    )
                    .catch(error => console.log(error))
                }
            }}
        />
    );
}

export default ComeInOAuth;


