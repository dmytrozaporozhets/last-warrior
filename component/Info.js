import React from 'react'
import {WebView} from "react-native-webview";


const Info = () => {
    return (
        <WebView
            source ={ {
                uri: 'https://ru.reactjs.org',
                }}
            style = { { marginTop : 20 }}/>
    );
}

export default Info;