import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import BoxInfo from './BoxInfo';
import {COLORS} from 'assets/colors/Color';

const ListInfor = () => {
  return (
    <View style={styles.container}>
      <View style={styles.viewTitle}>
        <Text style={styles.textTitle}>Hôm nay</Text>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
          }}>
          <Image
            source={require('../../assets/icons/bar-chart.png')}
            style={styles.icon}
          />
          <Text style={[styles.textTitle, {color: COLORS.blue1}]}>
            Báo cáo lãi lỗ {'>'}
          </Text>
        </TouchableOpacity>
      </View>
      <BoxInfo />
    </View>
  );
};

export default ListInfor;

const styles = StyleSheet.create({
  viewTitle: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 10,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  container: {
    marginTop: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
  },
  textTitle: {
    fontSize: 16,
    color: 'black',
  },
  icon: {
    height: 17,
    width: 17,
    marginRight: 5,
    tintColor: COLORS.blue1,
  },
});
