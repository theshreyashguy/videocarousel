// VideoPlayer.jsx

import React, {useRef, useEffect} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Video from 'react-native-video';

const {width, height} = Dimensions.get('window');

const VideoPlayer = ({source, isPaused}) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.seek(0);
    }
  }, [isPaused]);

  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        source={source}
        style={styles.video}
        controls
        resizeMode="contain"
        paused={isPaused}
        orientation="portrait"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width * 0.9,
    height: height * 0.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    borderRadius: 25,
    width: '100%',
    height: '100%',
  },
});

export default VideoPlayer;
