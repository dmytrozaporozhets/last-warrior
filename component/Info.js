import React from 'react'
import WebView from "react-native-webview";


const Info = () => {

    return (
        < WebView

            source = { { uri :  'https://www.google.com/' } }
            onNavigationStateChange = { ( navState ) => {
                this . canGoBack  =  navState . canGoBack ;
            } }
        />
    );
}


export default Info;