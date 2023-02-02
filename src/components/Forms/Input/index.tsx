import React from 'react';
import { TextInputProps } from 'react-native';
import theme from '../../../global/styles/theme';

import {Container} from './styles'

type Props = TextInputProps
export function Input({...rest}: Props){
    return(
        <Container 
            {...rest}
            placeholderTextColor={theme.colors.text}
        />
    )
}