import { View, Text,TextInput,Image,TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../themes/colors'
import { SafeAreaView } from 'react-native-safe-area-context'
import {Ionicons} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'



const SignUpScreen = () => {
    const navigation =useNavigation();
    const [email,setEmail] =useState('');
    const [password,setPassword] = useState('');
  return (
    <SafeAreaView style={{
        flex:1,
        marginTop:40,
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
            }} onPress={() => navigation.navigate("Welcome")}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
        </View>
        <View style={{
            flexDirection:'row',
            justifyContent:"center"
        }}>
            <Image style={{width:165,height:110}} source={require('../assets/images/signup.png')} />
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
                    marginLeft:10
                }}>Full name</Text>
                <TextInput style={{
                    padding:10,
                    backgroundColor:"#F3F4F6",
                    color:"#4A5568",
                    borderRadius:10,
                    marginBottom:8
                }}
                value='phuong'
                placeholder='Enter name' />

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
                value={email}
                onChangeText={value =>setEmail(value)}
                placeholder='Enter email' />

                <Text style={{
                    color:"#4A5568",
                    marginLeft:10,
                    marginTop:10
                }}>Passsword</Text>
                <TextInput style={{
                    padding:10,
                    backgroundColor:"#F3F4F6",
                    color:"#4A5568",
                    borderRadius:10,
                    marginBottom:16
                }}
                secureTextEntry
                value={password}
                onChangeText={value =>setPassword(value)}
                placeholder='Enter password' />
            </View>
            <TouchableOpacity 
             style={{
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
                }}>Sign Up</Text>
            </TouchableOpacity>
            <Text style={{
                fontSize:15,
                textAlign:'center',
                color:"#4A5568",
                fontWeight:'bold',
                paddingVertical:20
            }}>Or</Text>
            <View style={{
                flexDirection:"row",
                justifyContent:"space-between",
                marginHorizontal:40
            }}>
                <TouchableOpacity style={{
                    padding:8,
                    backgroundColor:"#f3f4f6",
                    borderRadius:15
                }}>
                    <Image style={{width:40,height:40}} source={require('../assets/icons/google.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={{
                    padding:8,
                    backgroundColor:"#f3f4f6",
                    borderRadius:15
                }}>
                    <Image style={{width:40,height:40}} source={require('../assets/icons/apple.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={{
                    padding:8,
                    backgroundColor:"#f3f4f6",
                    borderRadius:15
                }}>
                    <Image style={{width:40,height:40}} source={require('../assets/icons/facebook.png')} />
                </TouchableOpacity>
            </View>
            <View style={{
                flexDirection:"row",
                justifyContent:'center',
                marginTop:30
            }}>
                <Text style={{
                    fontWeight:"500",
                    color:'#718096'
                }}>Already have an account?</Text>
                <TouchableOpacity onPress={() =>navigation.navigate("Login")}>
                    <Text style={{
                        fontWeight:"600",
                        color:'#F59E0B'
                    }}> Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default SignUpScreen