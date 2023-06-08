import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import Header from '../components/Header'
import MovieCards from '../components/MovieCards'
import { colors } from '../themes/colors'

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: colors.bg, flex: 1 }}>
      <MovieCards />
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})