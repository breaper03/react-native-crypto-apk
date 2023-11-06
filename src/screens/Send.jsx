import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
// import Clipboard from '@react-native-clipboard/clipboard';
import { Clipboard } from 'react-native';
import { StatusBar } from 'expo-status-bar'
import { Icon } from '@rneui/base';
import StyledText from '../components/StyledText';
import theme from '../theme';

const Send = () => {

  const [viewQR, setViewQR] = useState();
  
  const copyToClipboard = (value) => {
    Clipboard.setString(value);
  };

  return (
    <>
      <StatusBar style="dark" backgroundColor={theme.colors.blue} hidden={false} translucent={true}/>
      <View style={styles.container}>
        {/* Vista de fondo 1 - Color #cd3939 */}
        <View style={[{ backgroundColor: theme.colors.blue, height: "30%" }]}>

        </View>
        {/* Vista de fondo 2 - Color #fec765 */}
        <View style={[{ backgroundColor: theme.colors.lightBlue, height: "70%" }]} />

        {/* Tarjeta que estará en el centro de la pantalla */}
        <View style={styles.card}>
          <StyledText style={styles.title}>Recibir</StyledText>
          <View style={{flex: 1, flexDirection: 'column', padding: 5, alignItems: 'center'}}>
            
            <View>
              <StyledText fontSize="medium" fontWeight="bold" color="black">Recibir Orbit</StyledText>
            </View>
            
            <View>
              <TouchableOpacity onPress={() => setViewQR(!viewQR)}>
                {
                  !viewQR 
                    ? <Image source={require("../../assets/orbitLG.png")}/>
                    : <Image source={require("../../assets/qr.png")}/>
                }
              </TouchableOpacity>
            </View>
            
            <View>
              <TouchableOpacity onPress={() => copyToClipboard("breaper2021@gmail.com")} style={styles.clipboardButtom}>
                <StyledText fontSize="medium" fontWeight="bold" color="black">breaper2021@gmail.com</StyledText>
                <Icon name='clipboard-text-outline' type='material-community' color={theme.colors.blue} size={20}/>
              </TouchableOpacity>
            </View>

          </View>
          <View>
          </View>
        </View>
      </View>
    </>
  );
};

const { width, height } = Dimensions.get('window'); // Obtener dimensiones de la pantalla

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    elevation: 3, // Sombras
    padding: 16,
    position: 'absolute',
    zIndex: 1,
    width: width * 0.9, // Ancho del 90% de la pantalla
    alignSelf: 'center', // Centra horizontalmente
    top: height * 0.20, // Centra verticalmente en el 25% de la pantalla
    height: height * 0.65
  },
  title: {
    textAlign: 'center',
    fontSize: theme.fontSize.xxxl,
    fontWeight: 'bold',
    color: theme.colors.blue
  },
  content: {
    fontSize: theme.fontSize.medium,
    fontSize: 16,
  },
  clipboardButtom: {
    // backgroundColor: "red",
    flexDirection: "row",
    gap: 8,
    marginTop: 20,
    alignItems: "center",
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderRadius: 5,
    borderColor: "#ccc",
    // borderWidth: 1,
    // elevation: 3
  },
  clipboardText: {

  },
  clipboardIcon: {

  },
});

export default Send;
