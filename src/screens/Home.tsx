import {
  StyleSheet,
  View,
  StatusBar,
  ScrollView,
  SafeAreaView,
  Text,
} from 'react-native';
import React from 'react';
import HeaderHome from 'components/headers/HeaderHome';
import {COLORS} from 'assets/colors/Color';
import * as layout from 'utilities/global/constants/Layout';
import ListInfor from 'components/boxs/ListInfor';
import ListContent from 'components/boxs/ListContent';
import Sliderbox from 'components/boxs/Sliderbox';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.primary} />
      <View>
        <HeaderHome />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <ListInfor />
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              // backgroundColor: 'pink',
            }}>
            <ListContent />
          </View>
          <Sliderbox />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: COLORS.gray1,
  },
  content: {height: layout.HEIGHT * 2},
});
