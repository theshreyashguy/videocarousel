// VideoCarousel.jsx

import React from 'react';
import {useState} from 'react';
import {View, StyleSheet, Dimensions, Text} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import VideoPlayer from '../component/videoplayer';
import {PlayIcon} from 'react-native-heroicons/solid';

const {width, height} = Dimensions.get('window');

const videos = [
  {id: 1, source: require('../resources/1.mp4')},
  {id: 2, source: require('../resources/4.mp4')},
  {id: 3, source: require('../resources/3.mp4')},
];

const VideoCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  // const videoRef = React.useRef(null);

  const renderItem = ({item, index}) => (
    <View style={styles.carouselItem}>
      {index == activeSlide ? (
        <VideoPlayer source={item.source} paused={index !== activeSlide} />
      ) : (
        <></>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text
        style={{
          color: 'white',
          textAlignVertical: 'center',
          margin: 12,
          fontSize: 25,
        }}>
        Video Player
      </Text>
      <Carousel
        data={videos}
        renderItem={renderItem}
        sliderWidth={width * 0.9}
        itemWidth={width * 0.9}
        onSnapToItem={index => setActiveSlide(index)}
      />
      <Pagination
        dotsLength={videos.length}
        activeDotIndex={activeSlide}
        dotStyle={styles.dot}
        inactiveDotStyle={styles.inactiveDot}
        inactiveDotOpacity={0.6}
        inactiveDotScale={0.8}
        containerStyle={styles.paginationContainer}
        dotContainerStyle={styles.paginationDotContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'start',
    backgroundColor: 'black',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'green',
    marginTop: 0,
  },
  carouselItem: {
    width: width * 0.9,
    height: height * 0.8,
    marginBottom: 10,
    borderRadius: 25,
    backgroundColor: 'white',
    marginTop: 10,
  },
  dot: {
    width: 20,
    height: 5,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: 'red',
  },
  inactiveDot: {
    backgroundColor: 'white',
    width: 10,
    height: 10,
  },
  paginationContainer: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    paddingBottom: 20,
  },
  paginationDotContainer: {
    paddingHorizontal: 5,
  },
});

export default VideoCarousel;
