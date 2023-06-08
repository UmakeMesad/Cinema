import { View, Text,TextInput,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../themes/colors'
import { SafeAreaView } from 'react-native-safe-area-context'
import {Ionicons} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const ForgotPasswordScreen = () => {
    const navigation = useNavigation();
    return (
      <SafeAreaView style={{
          flex:1,
          backgroundColor:colors.bg
      }}>
          <View style={{
              flexDirection:"row",
              justifyContent:"flex-start"
          }}>
              <TouchableOpacity style={{
                  backgroundColor:"#F59E0B",
                  padding:8,
                  borderTopRightRadius:10,
                  borderBottomLeftRadius:10,
                  marginLeft:15
              }} onPress={() => navigation.navigate("Login")}>
                  <Ionicons name="arrow-back" size={24} color="black" />
              </TouchableOpacity>
          </View>
          <View style={{
              flexDirection:'row',
              justifyContent:"center"
          }}>
              <Image style={{width:200,height:200}} source={require('../assets/images/login.png')} />
          </View>
          <View style={{
              flex:1,
              backgroundColor:colors.white,
              paddingLeft:20,
              paddingRight:20,
              paddingTop:20,
              borderTopLeftRadius:50,
              borderTopRightRadius:50
          }}>
              <View style={{marginTop:8}}>
                  <Text style={{
                      color:"#4A5568",
                      marginLeft:10,
                      marginTop:10
                  }}>Email Address</Text>
                  <TextInput style={{
                      padding:10,
                      backgroundColor:"#F3F4F6",
                      color:"#4A5568",
                      borderRadius:10,
                      marginBottom:8
                  }}
                  value='phuong@gmail.com'
                  placeholder='Enter email' />
  
                  
                 
              </View>
              <TouchableOpacity onPress={() =>navigation.navigate('Reset')} style={{
                  paddingVertical:10,
                  marginTop:10,
                  backgroundColor:"#F59E0B",
                  borderRadius:10
              }}>
                  <Text style={{
                      fontSize:15,
                      fontWeight:"bold",
                      textAlign:"center",
                      color:"#4A5568"
                  }}>Change Password</Text>
              </TouchableOpacity>
          </View>
      </SafeAreaView>
    )
}

export default ForgotPasswordScreen