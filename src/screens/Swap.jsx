import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import StyledText from '../components/StyledText';
import theme from '../theme';

const Swap = () => {
  return (
    <View style={styles.container}>
      {/* Vista de fondo 1 - Color #cd3939 */}
      <View style={[{ backgroundColor: theme.colors.blue, height: "30%" }]}>

      </View>
      {/* Vista de fondo 2 - Color #fec765 */}
      <View style={[{ backgroundColor: theme.colors.lightBlue, height: "70%" }]} />

      {/* Tarjeta que estará en el centro de la pantalla */}
      <View style={styles.card}>
        <StyledText style={styles.title}>hello world</StyledText>
        <View>
          <StyledText fontSize="medium" fontWeight="bold" color="black">Recibir Orbit</StyledText>
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
});

export default Swap;
