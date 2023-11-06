import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import StyledText from '../components/StyledText'
import StyledTransations from '../components/StyledTransations'
import { Icon } from '@rneui/themed';
import { SafeAreaView } from 'react-native-safe-area-context'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import theme from "../theme"
import { StatusBar } from 'expo-status-bar'

const Transactions = () => {

  const navigation = useNavigation()
  
  return (
    <SafeAreaView style={{flex: 1}}>
        <StatusBar style="dark" backgroundColor={theme.colors.lightBlue} hidden={false} translucent={true}/>
      <View style={{flex: 1, padding: 5, justifyContent: 'space-around', backgroundColor: theme.colors.lightBlue}}>
        <View style={{marginVertical: 50, alignItems:'flex-start'}}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 35}}>
            
            <View>
              <TouchableOpacity style={{justifyContent: 'center'}} onPress={() => navigation.navigate("Home")}>
                <Icon name='chevron-left' type='material' size={55} color={theme.colors.blue} />
              </TouchableOpacity>
            </View>


            <View style={{justifyContent: 'flex-end'}}>
              <StyledText fontSize="xxxl" fontWeight="bold" color="blue">
                Tus movimientos
              </StyledText>
            </View>

          </View>
        </View>
        <View style={{flex: 1, marginBottom: 100}}>
          <StyledTransations title={["Transaccion", "Moneda", "Monto"]}/>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Transactions

const styles = StyleSheet.create({})