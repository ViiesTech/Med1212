import { View, Text } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import Routes from './src/routes/Routes'
import { store } from './src/redux/Store'

const App = () => {
    return (
        <Provider store={store}>
            <View style={{ flex: 1 }}>
                <Routes />
            </View>
        </Provider>
    )
}

export default App

//hi