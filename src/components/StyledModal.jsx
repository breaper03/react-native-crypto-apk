import { Modal, StyleSheet, TouchableOpacity, View, Dimensions } from 'react-native'
import Constants from 'expo-constants';
import StyledText from './StyledText'
import { Icon } from '@rneui/themed';
import React from 'react'
import theme from '../theme'

export default function StyledModal({visible, setVisible}) {
  

  return (
    <View
      blurRadius={visible ? 10 : 0}
    >
      <Modal
        visible={visible}
        transparent={true}
        animationType='fade'
      >
        <View style={styles.container}>
          <View style={styles.box}>
            <Icon name='info-outline' type='material' size={45} color={theme.colors.blue} style={styles.modalIcon}/>
            <StyledText color="gray" fontSize="lg" fontWeight="base" style={styles.text}>
              Este valor es en dólares americanos y es solo de manera referencial.</StyledText>
            <TouchableOpacity title="Cerrar" onPress={() => setVisible(false)} style={styles.closeButtom}>
              <StyledText color="blue" fontSize="xl" fontWeight="bold">Cerrar</StyledText>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  )
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop: 0,
    justifyContent:"center",
    backgroundColor: theme.colors.blurBlue,
  },
  box: {
    flexDirection: "col",
    padding: 20,
    borderRadius: 10,
    margin: 20,
    backgroundColor: theme.colors.white,
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5    
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: "600",
    color: "#8C8D92"
  },
  closeButtom: {
    alignItems: 'center',
    paddingVertical: 5,
    borderWidth: 2.5,
    borderColor: theme.colors.gray,
    borderRadius: 15,
    marginTop: 10
  }
})