import React from 'react'
import {WebView} from "react-native-webview";


const Info = () => {
    return (
        <WebView
            source ={ {
                uri: 'https://github.com/login/oauth/authorize',
                }}
            style = { { marginTop : 20 }}/>
    );
}

export default Info;