import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Button, Surface, Text } from 'react-native-paper';
import { Camera, useCameraDevices } from 'react-native-vision-camera';

// import { Container } from './styles';

const QRCode = ({ theme, navigation }) => {
    const devices = useCameraDevices('wide-angle-camera')
    const device = devices.back

    return (
        <Surface style={{ flex: 1 }}>
            <SafeAreaView style={{ justifyContent: 'space-between', flex: 1, padding: 10 }}>

                {device != null ? <Camera
                    style={{flex: 1}}
                    device={device}
                    isActive={true}
                /> : <View />}
                <Button
                    mode="contained"
                    style={{
                        width: '100%',
                        height: 50,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 100,
                    }}

                    onPress={() => navigation.navigate('Map')}>Iniciar Viagem</Button>
            </SafeAreaView>

        </Surface>
    )
}

export default QRCode;