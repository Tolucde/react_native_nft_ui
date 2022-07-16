import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  Image,
  StatusBar,
} from 'react-native'
import {
  CircleButton,
  DetailsBid,
  DetailsDesc,
  FocusedStatusBar,
  RectButton,
  SubInfo,
} from '../components'
import { assets, COLORS, FONTS, SHADOWS, SIZES } from '../constants'

const DetailsHeader = ({ data, navigation }) => {
  return (
    <View style={{ width: '100%', height: 373 }}>
      <Image
        resizeMode='cover'
        style={{ width: '100%', height: '100%' }}
        source={data.image}
      />
      <CircleButton
        imgUrl={assets.left}
        handlePress={() => navigation.goBack()}
        left={15}
        top={StatusBar.currentHeight - 5}
      />
      <CircleButton
        imgUrl={assets.heart}
        right={15}
        top={StatusBar.currentHeight - 5}
      />
    </View>
  )
}

const Details = ({ route, navigation }) => {
  const { data } = route.params
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent={true}
      />
      <View
        style={{
          width: '100%',
          position: 'absolute',
          bottom: 0,
          paddingVertical: SIZES.font,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(255,255,255, 0.5)',
          zIndex: 1,
        }}
      >
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
      </View>
      <FlatList
        data={data.bids}
        renderItem={({ item }) => <DetailsBid bid={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
        ListHeaderComponent={() => (
          <React.Fragment>
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfo />
            <View style={{ padding: SIZES.font }}>
              <DetailsDesc data={data} />
              {data.bids.length > 0 && (
                <Text
                  style={{
                    fontSize: SIZES.font,
                    fontFamily: FONTS.semiBold,
                    color: COLORS.primary,
                  }}
                >
                  Current BidS
                </Text>
              )}
            </View>
          </React.Fragment>
        )}
      />
    </SafeAreaView>
  )
}

export default Details
