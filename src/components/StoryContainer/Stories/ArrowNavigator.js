import React from 'react';
import {View, StyleSheet, Keyboard, TouchableOpacity, Text} from 'react-native';

const ArrowNavigator = (props) => {
  return (
    <View style={styles.parentArrow}>
      <TouchableOpacity
        onPress={() => {
          Keyboard.dismiss();
          props.onArrowClick('left');
        }}
        style={styles.circleDiv}>
        <Text />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          Keyboard.dismiss();
          props.onArrowClick('right');
        }}
        style={styles.circleDiv}>
        <Text />
      </TouchableOpacity>
    </View>
  );
};

export default ArrowNavigator;

const styles = StyleSheet.create({
  parentArrow: {
    flexDirection: 'row',
    width: '100%',
    height: '50%',
    justifyContent: 'space-between',
    alignSelf: 'center',
    position: 'absolute',
    top: '25%',
    flex: 1,
  },

  imgLeftStyle: {
    width: 15,
    height: 15,
    marginTop: 2,
    marginRight: 3,
  },
  imgRightStyle: {
    width: 15,
    height: 15,
    marginTop: 2,
    marginLeft: 3,
  },
  circleDiv: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
