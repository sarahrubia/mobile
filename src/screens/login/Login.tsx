import React from 'react';
import { StatusBar, View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import AppButton from '../../components/AppButton';
import InputField from '../../components/InputField';
import { routes } from '../../constants/navigation/constants';

import * as S from './styled';

function Login({ navigation }) {
  return (
    <S.SafeAreaViewSafeAreaContext>
      <StatusBar barStyle={'light-content'} backgroundColor={'#222222'} />
      <S.ContentView>
        <View>
          <S.Title>
            Entrar <S.CompanyName>M-PAY</S.CompanyName>
          </S.Title>
        </View>
        <View>
          <S.TextInputContainer>
            <InputField
              placeholder={'Email'}
              placeholderTextColor={'#9F9F9F'}
            />
          </S.TextInputContainer>
          <S.TextInputContainer>
            <InputField
              placeholder={'Senha'}
              placeholderTextColor={'#9F9F9F'}
              secureTextEntry
            />
          </S.TextInputContainer>
          <S.RememberPassword>
            <CheckBox
              boxType="square"
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                width: 15,
                height: 15,
                marginRight: 5,
                borderRadius: 0,
              }}
              onFillColor={'#FFFFFF'}
              onTintColor={'#FFFFFF'}
            />
            <S.SmallText>Lembrar-me</S.SmallText>
          </S.RememberPassword>
        </View>
      </S.ContentView>
      <S.SubmitButtonWrapper>
        <AppButton
          title={'ENTRAR'}
          onPress={() => navigation.navigate(routes.DASHBOARD)}
        />
      </S.SubmitButtonWrapper>
      <S.ForgotPasswordText>Esqueci minha senha</S.ForgotPasswordText>
    </S.SafeAreaViewSafeAreaContext>
  );
}

export default Login;