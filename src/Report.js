import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import { Button, Surface, Text, TextInput } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';

// import { Container } from './styles';

const Report = ({ navigation }) => {

  const [Peca, setPeca] = useState(null)
  const [OpenPeca, setOpenPeca] = useState(false)

  const [DescTxt, setDescTxt] = useState('')
  const [Grav, setGrav] = useState(null)
  const [OpenGrav, setOpenGrav] = useState(false)

  const MarginBottom = 10;

  return (
    <Surface style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ padding: 15, justifyContent: "space-between", flex: 1 }}>
          <View>
            <Text style={{ marginBottom: MarginBottom }}>Peça:</Text>
            <View style={{zIndex: 2000}}>
              <DropDownPicker
                placeholder='Selecione a peça'
                open={OpenPeca}
                onPress={() => { setOpenPeca(!OpenPeca); setOpenGrav(false) }}
                value={Peca}
                items={[
                  { label: 'Pneus', value: 0 },
                  { label: 'Rodas', value: 1 },
                  { label: 'Guidão', value: 2 },
                  { label: 'Pedais', value: 3 },
                  { label: 'Banco', value: 4 },
                  { label: 'Cadeado', value: 5 },
                ]}
                setValue={setPeca}
                style={{ marginBottom: MarginBottom }}
              />
            </View>
            <Text style={{ marginBottom: MarginBottom }}>Gravidade:</Text>
            <View style={{zIndex: 1000}}>
            <DropDownPicker
              placeholder='Selecione a gravidade'
              open={OpenGrav}
              onPress={() => setOpenGrav(!OpenGrav)}
              value={Grav}
              items={[
                { label: 'Impossibilita utilizar a bicicleta', value: 0 },
                { label: 'Dificulta a utilização da bicicleta, mas não impossibilita utilizá-la”', value: 1 },
                { label: 'Não dificulta utilizá-la, mas seria bom se melhorasse', value: 2 },
              ]}
              setValue={setGrav}
              style={{ marginBottom: MarginBottom }}
            />

            </View>
            <Text style={{ marginBottom: MarginBottom }}>Descrição:</Text>
            <TextInput value={DescTxt} onChangeText={(value) => setDescTxt(value)} label="Descrição" />
          </View>
          <View>
            <Button
              icon={'arrow-left'}
              buttonColor='#c0392b'
              style={{
                width: '100%',
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 100,
                marginBottom: MarginBottom
              }}
              mode="contained"
              onPress={() => navigation.goBack()}
            >
              Voltar
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
            >
              Enviar
            </Button>
          </View>
        </View>
      </SafeAreaView>
    </Surface>
  );
}

export default Report;