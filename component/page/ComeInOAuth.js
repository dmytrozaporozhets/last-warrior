import React from 'react'
import {WebView} from "react-native-webview";


const  ComeInOAuth = () => {
    return (
        <WebView
            source ={ {
                uri: 'https://github.com/login/oauth/authorize?client_id=e7e0ddce3824fe141cac',
            }}
            onNavigationStateChange={(navState) => {
                console.log(navState.url)
            }}
        />
    );
}

export default ComeInOAuth;