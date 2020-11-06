import React from 'react'
import {WebView} from "react-native-webview";

const  ComeInOAuth = () => {

    const requestURL = 'https://github.com/login/oauth/authorize?' +
        'scope=user:email&' +
        'client_id=e7e0ddce3824fe141cac&' +
        'login=dimkazaporozhets@gmail.com&';
    const requestToken = 'https://github.com/login/oauth/access_token';
    const clientId = 'e7e0ddce3824fe141cac&';
    const clientSecret = '8ba8fcdf1cb180c40a71dc03d8409376574e4a5c';

    return (
        <WebView
            source ={ {
                uri: requestURL }}
            onNavigationStateChange={(navState) => {
                console.log(navState.url)


                if (navState.url.startsWith('https://www.google.com/')) {
                    const indexCode = navState.url.indexOf('=')
                    const searchCode = navState.url.substr(indexCode+1,navState.url.length)
                    console.log(searchCode)
                }


                const sendRequest = () => {
                    return fetch(requestToken, {
                        clientId: clientId,
                        clientSecret: clientSecret,
                        code: sessionCode,
                    }).then( response => {
                            console.log (response)
                        }
                    )}
            }}
        />
    );
}

export default ComeInOAuth;


