import { View, SafeAreaView, ImageBackground, Image } from 'react-native';
import { Text, Surface, TextInput, Button } from 'react-native-paper';
import { withTheme } from 'react-native-paper';

import React, { useState } from 'react';
import { BG, Logo } from './assets/images';

function Login({ theme, navigation }) {
    const Colors = {};
    const [TxtLogin, setTxtLogin] = useState('');
    const [TxtPass, setTxtPass] = useState('');
    const [ShowPass, setShowPass] = useState(false);

    const Separator = () => (
        <View
            style={{
                backgroundColor: Colors.onSurface,
                height: 1,
                width: '100%',
                marginBottom: 15,
            }}
        />
    );

    return (
        <Surface style={{ flex: 1 }}>
            <ImageBackground
                source={BG}
                imageStyle={{ width: '100%', height: '100%', resizeMode: 'stretch' }}
                style={{
                    flex: 1,
                    justifyContent: 'space-between',
                }}>
                <SafeAreaView />

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View
                        style={{
                            width: 150,
                            height: 150,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 100,
                            backgroundColor: '#f1c40f',
                            borderWidth: 4,
                            borderColor: "#d35400",
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 5,
                            },
                            shadowOpacity: 0.34,
                            shadowRadius: 6.27,

                            elevation: 10,
                        }}>
                        <Image source={Logo} style={{ width: 150, height: 150 }} />
                    </View>
                </View>
                <View style={{ padding: 15 }}>
                    <Surface
                        style={{
                            elevation: 5,
                            borderRadius: 40
                        }}>
                        <View style={{ padding: 15, alignItems: 'center', width: '100%' }}>
                            <TextInput
                                theme={{ roundness: 100 }}
                                textContentType={'emailAddress'}
                                style={{ width: '100%', marginBottom: 15, paddingHorizontal: 5 }}
                                mode={'outlined'}
                                label="Email"
                                value={TxtLogin}
                                onChangeText={text => setTxtLogin(text)}
                                left={
                                    <TextInput.Icon
                                        icon="account-outline"
                                        color={Colors.onSurface}
                                    />
                                }
                            />
                            <TextInput
                                theme={{ roundness: 100 }}
                                secureTextEntry={!ShowPass}
                                textContentType={'password'}
                                style={{
                                    width: '100%',
                                    marginBottom: 15,
                                    paddingHorizontal: 5,
                                }}
                                mode={'outlined'}
                                label="Senha"
                                value={TxtPass}
                                onChangeText={text => setTxtPass(text)}
                                left={
                                    <TextInput.Icon icon="lock-outline" color={Colors.onSurface} />
                                }
                                right={
                                    <TextInput.Icon
                                        icon={ShowPass ? 'eye-off-outline' : 'eye-outline'}
                                        color={Colors.onSurface}
                                        onPress={() => setShowPass(!ShowPass)}
                                    />
                                }
                            />
                            <Button
                                theme={{ roundness: 100 }}
                                style={{
                                    width: '100%',
                                    height: 50,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginBottom: 15,
                                }}
                                mode="contained"
                                buttonColor='#d35400'
                                onPress={() => navigation.navigate('Register')}>
                                Registrar
                            </Button>
                            <Button
                                buttonColor='#d35400'
                                style={{
                                    width: '100%',
                                    height: 50,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: 100,
                                }}
                                mode="contained"
                                onPress={() => navigation.navigate('Main')}>
                                Login
                            </Button>

                        </View>
                    </Surface>
                </View>
            </ImageBackground>
        </Surface>
    );
}

export default withTheme(Login);
