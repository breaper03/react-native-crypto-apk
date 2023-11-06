import React from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import StyledText from '../components/StyledText';
import theme from '../theme';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

const Orbit = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      {/* Vista de fondo 1 - Color #cd3939 */}
      <View style={[{ backgroundColor: theme.colors.blue, height: "30%" }]}>

      </View>
      {/* Vista de fondo 2 - Color #fec765 */}
      <View style={[{ backgroundColor: theme.colors.lightBlue, height: "70%" }]} />

      {/* Tarjeta que estará en el centro de la pantalla */}
      <View style={styles.card}>
        <StyledText style={styles.title}>Orbit</StyledText>
        <View style={styles.itemsCard}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Send")}
            style={{backgroundColor: theme.colors.lightBlue, paddingBottom: 10, borderRadius:15, flexDirection: 'column', alignItems:'center', elevation: 3}}>
            <View style={styles.buttonCard}>
              <Icon name='arrow-top-right-thick' type='material-community' color={theme.colors.white} size={40}/> 
            </View>
            <StyledText fontSize="base" fontWeight="bold" color="blue">Enviar</StyledText>
          </TouchableOpacity>
          
          <TouchableOpacity
            onPress={() => navigation.navigate("Pay")}
            style={{backgroundColor: theme.colors.lightBlue, paddingBottom: 10, borderRadius:15, flexDirection: 'column', alignItems:'center', elevation: 3}}>
            <View style={styles.buttonCard}>
              <Icon name='arrow-bottom-left-thick' type='material-community' color={theme.colors.white} size={40}/>
            </View>
            <StyledText fontSize="base" fontWeight="bold" color="blue">Recibir</StyledText>
          </TouchableOpacity>
          
          <TouchableOpacity
            onPress={() => navigation.navigate("Swap")}
            style={{backgroundColor: theme.colors.lightBlue, paddingBottom: 10, borderRadius:15, flexDirection: 'column', alignItems:'center', elevation: 3}}>
            <View style={styles.buttonCard}>
              <Icon name='sync' type='material-community' color={theme.colors.white} size={40}/>
            </View>
            <StyledText fontSize="base" fontWeight="bold" color="blue">Cambio</StyledText>
          </TouchableOpacity>
        </View>
      </View>
    </View>
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
    height: height * 0.35
  },
  itemsCard: {
    flex: 1, 
    flexDirection: 'row', 
    width: "100%", 
    justifyContent: "space-around", 
    alignItems: 'center'
  },
  buttonCard: {
    borderRadius: 15,
    shadowColor: "#000",
    backgroundColor: theme.colors.blue,
    color: theme.colors.white,
    padding: 15,
    marginBottom: 5
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
});

export default Orbit;
