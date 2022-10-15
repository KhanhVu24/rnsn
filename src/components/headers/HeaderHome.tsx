import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from 'assets/colors/Color';
import * as layout from 'utilities/global/constants/Layout';

const HeaderHome = () => {
  return (
    <View style={styles.container}>
      <View style={styles.viewText}>
        <Image
          source={require('../../assets/images/angry.png')}
          style={styles.image}
        />
        <View>
          <Text style={styles.txtName}>Khánh</Text>
          <Text style={styles.txtDes}>Thông tin cửa hàng {'>'}</Text>
        </View>
      </View>
      <View style={styles.viewIcon}>
        <TouchableOpacity>
          <Image
            source={require('../../assets/icons/qr-code.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../../assets/icons/chat.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../../assets/icons/notification.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderHome;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    backgroundColor: COLORS.primary,
    justifyContent: 'space-between',
  },
  txtName: {
    color: '#fff',
    fontWeight: '500',
    opacity: 0.8,
  },
  txtDes: {
    color: '#fff',
    opacity: 0.7,
  },
  viewText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    borderRadius: 100,
    marginRight: 5,
  },
  icon: {
    tintColor: '#fff',
    width: 22,
    height: 22,
  },
  viewIcon: {
    flexDirection: 'row',
    width: layout.WIDTH * 0.25,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    opacity: 0.8,
  },
});
