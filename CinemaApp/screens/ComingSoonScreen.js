import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MovieCards from '../components/MovieCards'
import { colors } from '../themes/colors'

const ComingSoonScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: colors.bg, flex: 1 }}>
      <MovieCards />
    </SafeAreaView>
  )
}

export default ComingSoonScreen;