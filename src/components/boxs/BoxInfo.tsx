import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {listInfoHome as datalist} from 'utilities/global/data';

const BoxInfo = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {datalist.map((item: any) => (
          // container
          <TouchableOpacity
            activeOpacity={0.5}
            style={[
              styles.box,
              {
                backgroundColor: item.background,
                marginLeft: item.id === 1 ? 15 : 0,
              },
            ]}
            key={item.id}>
            {/* icon */}
            <View style={[styles.viewIcon, {backgroundColor: item.color}]}>
              <Image source={item.icon} style={styles.icon} />
            </View>
            {/* content */}
            <View style={{flexDirection: 'column'}}>
              <Text style={{color: 'black'}}>{item.name}</Text>
              <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>
                {item.total}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default BoxInfo;

const styles = StyleSheet.create({
  viewIcon: {
    padding: 7,
    borderRadius: 50,
    marginRight: 10,
  },
  container: {
    flexDirection: 'row',
  },
  box: {
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
    paddingRight: 40,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 14,
    height: 14,
    tintColor: '#fff',
  },
});
