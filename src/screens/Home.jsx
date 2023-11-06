import React, { useState } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import Constants from 'expo-constants';
import StyledText from "../components/StyledText"
import StyledTable from '../components/StyledTable'
import StyledModal from '../components/StyledModal'
import theme from '../theme';
import { TouchableOpacity } from 'react-native';
import { Icon } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context'
import StyledUserBar from '../components/StyledUserBar'
import StyledTransations from '../components/StyledTransations';
import { StatusBar } from 'expo-status-bar'

const { width, height } = Dimensions.get('window');

const Home = () => {

  const container = () => {
    return {
      height: Constants.statusBarHeight,
      backgroundColor: visible ? theme.colors.blurBlue : "transparent",  
    }
  }

  const [visible, setVisible] = useState(false);

  return (
    <>
        <StatusBar style="dark" backgroundColor={theme.colors.lightBlue} hidden={false} translucent={true}/>
      <View style={container()}>
        <StyledModal visible={visible} setVisible={setVisible} />
      </View>
      <SafeAreaView style={styles.container}>
        <View style={styles.carouselTopBar}>
          <StyledUserBar/>
        </View>
        <View style={styles.box}>
          <View key={Math.random()} style={styles.headerTopBar}>
            <TouchableOpacity style={styles.headerTopText} onPress={() => {
              setVisible(!visible)
              container()
            }}>

              <View>
                <StyledText fontSize="xxl" fontWeight="bold" color="white">Balance</StyledText>
              </View>
              <View style={{flexDirection: "row", alignItems: 'flex-end'}}> 
                <StyledText 
                  style={{color: theme.colors.white, fontWeight: theme.fontWeights.bold, fontSize: theme.fontSize.medium, marginBottom: 3}}
                >$</StyledText>
                <StyledText fontSize="xxl" fontWeight="bold" color="white">10</StyledText>
                <Icon name='info-outline' type='material' size={14} color={theme.colors.white} style={styles.modalIcon}/>
              </View>

            </TouchableOpacity>
          </View>

          <View style={{height: height * 0.33, marginBottom: 10, elevation: 3}}>
            <StyledTable/>
          </View>
          
          <View style={{height:height * 0.18, paddingVertical: 1, overflow: "hidden"}}>
            <StyledTransations title={["Ultimas transacciones"]}/>
          </View>

        </View>
      </SafeAreaView>
    </>
  )
}




const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: theme.colors.lightBlue
  },
  box: {
    flex: 1, 
    height: "100%",
    flexDirection: 'column',
    columnGap: 2,
    paddingVertical: 0,
    paddingHorizontal: 10,
  },

  carouselTopBar: {
    flex: 1,
    paddingHorizontal: 1,
    // backgroundColor: theme.colors.white,
    paddingVertical: 1,
    overflow: 'hidden',
    margin: 10,
    maxHeight: height * 0.065,
    borderRadius: 10,
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    // borderColor: theme.colors.blue,
    // borderWidth: 2.5
  },

  headerTopBar: {
    backgroundColor: theme.colors.blue,
    paddingVertical: 10,
    paddingHorizontal: 11,
    maxHeight: height * 0.065,
    borderRadius: 10,
  },

  headerTopText: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  header: {
    marginTop: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: theme.colors.white,
    flexDirection: "row",
    paddingVertical: 2,
    paddingHorizontal: 2,
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerText: {
    flex: 1,
    flexDirection: "row",
    textAlign: "center",
    paddingVertical: 2,
    paddingHorizontal: 5,
    maxWidth: 80,
    fontSize: theme.fontSize.base,
    color: theme.colors.blue,
  },

  headerBalancetext: {
    flex: 1,
    flexDirection: "row",
    textAlign: "right",
    paddingVertical: 2,
    paddingHorizontal: 5,
    maxWidth: 80,
    fontSize: theme.fontSize.base,
    color: theme.colors.blue,
  },

  modalIcon: {
    marginLeft: 5,
    marginBottom: 20
  },
})

export default Home
