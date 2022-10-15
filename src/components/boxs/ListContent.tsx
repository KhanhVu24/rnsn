import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import React from 'react';
import {listContentHome as datalist} from '../../utilities/global/data';
import * as layout from '../../utilities/global/constants/Layout';

const ListContent = () => {
  return (
    <View style={styles.container}>
      {datalist.map((item: any) => (
        <Pressable
          style={styles.viewItem}
          key={item.id}
          onPress={() => console.log('test')}>
          <View style={styles.point}>
            <Text style={styles.txtNum}>{item.quantity}</Text>
          </View>
          <Image
            source={item.icon}
            style={[styles.image, {tintColor: item.id === 6 ? '#8F9EAC' : ''}]}
            resizeMode="cover"
          />
          <Text style={styles.textName}>{item.name}</Text>
        </Pressable>
      ))}
    </View>
  );
};

export default ListContent;

const styles = StyleSheet.create({
  viewItem: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
    borderRadius: 15,
    width: layout.WIDTH / 4.75,
    height: layout.WIDTH / 4.75,
    backgroundColor: '#fff',
    margin: layout.WIDTH * 0.0132,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textName: {
    textAlign: 'center',
    fontSize: 13,
    color: 'black',
    fontWeight: '500',
  },
  container: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  image: {
    width: '45%',
    height: '45%',
    marginBottom: 7,
  },
  point: {
    padding: 5,
    backgroundColor: 'red',
    borderRadius: 50,
    position: 'absolute',
    zIndex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    top: '5%',
    right: '15%',
    height: '27%',
    width: '27%',
  },
  txtNum: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 13,
    alignSelf: 'center',
  },
});
