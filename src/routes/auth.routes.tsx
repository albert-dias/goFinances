import React from 'react';
import { useTheme } from 'styled-components'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SignIn } from '../screens/SignIn';

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes(){
    const theme = useTheme();
    return(
        <Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Screen 
                name="SignIn" 
                component={SignIn}
            />
        </Navigator>
    );
}