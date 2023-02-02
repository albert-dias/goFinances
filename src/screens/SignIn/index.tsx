import React, { useState } from 'react';
import { ActivityIndicator, Alert, Platform } from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

import AppleSvg from '../../assets/apple.svg';
import GoogleSvg from '../../assets/google.svg';
import LogoSvg from '../../assets/logo.svg';
import { SignInSocialButton } from '../../components/SignInSocialButton';
import theme from '../../global/styles/theme';
import { useAuth } from '../../hooks/auth';

import { 
    Container,
    Header,
    TitleWrapper,
    Title,
    SignInTitle,
    Footer,
    FooterWrapper,
} from './styles';

export function SignIn(){
    const [ isLoading, setIsLoading ] = useState(false)
    const { signInWithGoogle, signInWithApple } = useAuth();

    async function handleSignInWithGoogle(){
        setIsLoading(true);
        try {
            await signInWithGoogle();
        } catch (error) {
            console.log(error);
            Alert.alert('Não foi possível conectar a conta Google')
        } finally {
            setIsLoading(false);
        }
    }
    
    async function handleSignInWithApple(){
        setIsLoading(true);
        try {
            await signInWithApple();
        } catch (error) {
            console.log(error);
            Alert.alert('Não foi possível conectar a conta Apple')
        } finally {
            setIsLoading(false);
        }
    }
    return(
        <Container>
            <Header>
                <TitleWrapper>
                    <LogoSvg
                        width={RFValue(120)}
                        height={RFValue(68)}
                    />
                    <Title>
                        Controle suas {`\n`}finanças de forma {`\n`}muito simples
                    </Title>

                    <SignInTitle>
                        Faça seu login com {`\n`}uma das contas abaixo
                    </SignInTitle>
                </TitleWrapper>
            </Header>
            <Footer>
                <FooterWrapper>
                    <SignInSocialButton 
                        title="Entrar com Google"
                        svg={GoogleSvg}
                        onPress={handleSignInWithGoogle}
                    />
                    {Platform.OS === "ios" &&  <SignInSocialButton 
                        title="Entrar com Apple"
                        svg={AppleSvg}
                        onPress={handleSignInWithApple}
                    />}
                </FooterWrapper>
                {isLoading && <ActivityIndicator color={theme.colors.shape} size="small" />}
            </Footer>
        </Container>
    );
}