import React from 'react'
import WebView from "react-native-webview";

 const Example = () => {
    return (
        <WebView
            source = { { uri: 'https://ru.reactjs.org', } }
            onLoad = {( syntheticEvent)=> {
                const {nativeEvent} = syntheticEvent;
            console.log(nativeEvent)
        }}
        />
    )
 }
    export default Example;