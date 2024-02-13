import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect, useRef} from 'react';
import Icons from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';

const TabButton = props => {
  const {item, onPress, accessibilityState} = props;
  let focused = accessibilityState.selected;
  const viewRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate({0: {scale: 0}, 1: {scale: 1.3}});
    } else {
      viewRef.current.animate({0: {scale: 1.3}, 1: {scale: 0}});
    }
  }, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, {flex: focused ? 1 : 0.7}]}
      activeOpacity={1}>
      <View>
        <Animatable.View
          style={[
            StyleSheet.absoluteFillObject,
            {
              backgroundColor: focused ? item.alphaColor : null,
              borderRadius: 8,
            },
          ]}
          ref={viewRef}
          duration={1000}
        />
        <View style={styles.tab}>
          <Icons
            name={focused ? item.activeIcon : item.inActiveIcon}
            size={20}
            color={focused ? item.color : 'red'}
          />
          <Animatable.View style={styles.tabText}>
            {focused && <Text style={styles.tabText}>{item.label}</Text>}
          </Animatable.View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  tab: {
    alignItems: 'center',
    borderRadius: 18,
    flexDirection: 'row',
    paddingVertical: 5,
  },
  tabText: {
    fontSize: 14,
    fontWeight: '400',
    marginHorizontal: 3,
    color: 'white',
  },
});

export default TabButton;
