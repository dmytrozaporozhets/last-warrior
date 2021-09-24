import React, {Component} from 'react';
import {Animated, PanResponder, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {images} from '../../assets/images/emojis/images';
import {ReactionPickerStyle} from '../styling/components/ReactionPicker';

class ReactionPicker extends Component {
  constructor(props) {
    super(props);

    this.currentSpeed = 3;
    this.durationLongPress = 250;
    this.isTouchBtn = false;
    this.isLongTouch = false;
    this.isLiked = false;
    this.whichIconUserChoose = 0;
    this.currentIconFocus = 0;
    this.previousIconFocus = 0;
    this.isDragging = false;
    this.isDraggingOutside = false;
    this.isJustDragInside = true;

    this.durationAnimationBox = 500;
    this.durationAnimationQuickTouch = 500;
    this.durationAnimationLongTouch = 150;
    this.durationAnimationIconWhenDrag = 150;
    this.durationAnimationIconWhenRelease = 1000;

    this.tiltIconAnim = new Animated.Value(0);
    this.zoomIconAnim = new Animated.Value(0);
    this.zoomTextAnim = new Animated.Value(0);

    this.tiltIconAnim2 = new Animated.Value(0);
    this.zoomIconAnim2 = new Animated.Value(0);
    this.zoomTextAnim2 = new Animated.Value(0);

    this.fadeBoxAnim = new Animated.Value(0);

    this.moveRightGroupIcon = new Animated.Value(10);

    this.pushIconLikeUp = new Animated.Value(0);

    this.zoomIconLike = new Animated.Value(0.01);

    this.pushIconLoveUp = new Animated.Value(0);
    this.zoomIconLove = new Animated.Value(0.01);

    this.pushIconHahaUp = new Animated.Value(0);
    this.zoomIconHaha = new Animated.Value(0.01);

    this.pushIconWowUp = new Animated.Value(0);
    this.zoomIconWow = new Animated.Value(0.01);

    this.pushIconSadUp = new Animated.Value(0);
    this.zoomIconSad = new Animated.Value(0.01);

    this.pushIconAngryUp = new Animated.Value(0);
    this.zoomIconAngry = new Animated.Value(0.01);

    this.zoomIconChosen = new Animated.Value(1);
    this.zoomIconNotChosen = new Animated.Value(1);
    this.zoomIconWhenDragOutside = new Animated.Value(1);
    this.zoomIconWhenDragInside = new Animated.Value(1);
    this.zoomBoxWhenDragInside = new Animated.Value(1);
    this.zoomBoxWhenDragOutside = new Animated.Value(0.95);

    this.pushTextDescriptionUp = new Animated.Value(60);
    this.zoomTextDescription = new Animated.Value(1);

    this.zoomIconWhenRelease = new Animated.Value(1);
    this.moveUpDownIconWhenRelease = new Animated.Value(0);
    this.moveLeftIconLikeWhenRelease = new Animated.Value(20);
    this.moveLeftIconLoveWhenRelease = new Animated.Value(72);
    this.moveLeftIconHahaWhenRelease = new Animated.Value(124);
    this.moveLeftIconWowWhenRelease = new Animated.Value(173);
    this.moveLeftIconSadWhenRelease = new Animated.Value(226);
    this.moveLeftIconAngryWhenRelease = new Animated.Value(278);
  }

  UNSAFE_componentWillMount() {
    this.setupPanResponder();
  }

  getBorderColorBtn() {
    if (!this.isLongTouch && this.isLiked) {
      return '#3b5998';
    }
    if (!this.isDragging) {
      switch (this.whichIconUserChoose) {
        case 1:
          return '#3b5998';
        case 2:
          return '#ED5167';
        case 3:
          return '#FFD96A';
        case 4:
          return '#FFD96A';
        case 5:
          return '#FFD96A';
        case 6:
          return '#F6876B';
        default:
          return 'grey';
      }
    } else {
      return 'grey';
    }
  }

  getColorTextBtn() {
    if (!this.isLongTouch && this.isLiked) {
      return '#3b5998';
    }
    if (!this.isDragging) {
      switch (this.whichIconUserChoose) {
        case 1:
          return '#3b5998';
        case 2:
          return '#ED5167';
        case 3:
          return '#FFD96A';
        case 4:
          return '#FFD96A';
        case 5:
          return '#FFD96A';
        case 6:
          return '#F6876B';
        default:
          return 'grey';
      }
    } else {
      return 'grey';
    }
  }

  getIconBtn() {
    if (!this.isLongTouch && this.isLiked) {
      return images.like_static_fill;
    }
    if (!this.isDragging) {
      switch (this.whichIconUserChoose) {
        case 1:
          return images.like_static_fill;
        case 2:
          return images.love_static;
        case 3:
          return images.haha_static;
        case 4:
          return images.wow_static;
        case 5:
          return images.sad_static;
        case 6:
          return images.angry_static;
        default:
          return images.like_static;
      }
    } else {
      return images.like_static;
    }
  }

  getTextBtn() {
    if (this.isDragging) {
      return 'Like';
    }
    switch (this.whichIconUserChoose) {
      case 1:
        return 'Like';
      case 2:
        return 'Love';
      case 3:
        return 'Haha';
      case 4:
        return 'Wow';
      case 5:
        return 'Sad';
      case 6:
        return 'Angry';
      default:
        return 'Like';
    }
  }

  setupPanResponder() {
    this.rootPanResponder = PanResponder.create({
      onMoveShouldSetPanResponder: () => !this.isTouchBtn && this.isLongTouch,

      onPanResponderGrant: (evt, gestureState) => {
        this.handleEmoticonWhenDragging(evt, gestureState);
      },

      onPanResponderMove: (evt, gestureState) => {
        this.handleEmoticonWhenDragging(evt, gestureState);
      },

      onPanResponderRelease: () => {
        this.isDragging = false;
        this.isDraggingOutside = false;
        this.isJustDragInside = true;
        this.previousIconFocus = 0;
        this.currentIconFocus = 0;
        this.setState({});

        this.onDragRelease();
      },
    });
  }

  handleEmoticonWhenDragging = (evt, gestureState) => {
    if (
      gestureState.y0 + gestureState.dy >= 150 &&
      gestureState.y0 + gestureState.dy <= 450
    ) {
      this.isDragging = true;
      this.isDraggingOutside = false;

      if (this.isJustDragInside) {
        this.controlIconWhenDragInside();
      }

      if (
        gestureState.x0 + gestureState.dx >= 35 &&
        gestureState.x0 + gestureState.dx < 88.33
      ) {
        if (this.currentIconFocus !== 1) {
          this.handleWhenDragBetweenIcon(1);
        }
      } else if (
        gestureState.x0 + gestureState.dx >= 88.33 &&
        gestureState.x0 + gestureState.dx < 141.66
      ) {
        if (this.currentIconFocus !== 2) {
          this.handleWhenDragBetweenIcon(2);
        }
      } else if (
        gestureState.x0 + gestureState.dx >= 141.66 &&
        gestureState.x0 + gestureState.dx < 194.99
      ) {
        if (this.currentIconFocus !== 3) {
          this.handleWhenDragBetweenIcon(3);
        }
      } else if (
        gestureState.x0 + gestureState.dx >= 194.99 &&
        gestureState.x0 + gestureState.dx < 248.32
      ) {
        if (this.currentIconFocus !== 4) {
          this.handleWhenDragBetweenIcon(4);
        }
      } else if (
        gestureState.x0 + gestureState.dx >= 248.32 &&
        gestureState.x0 + gestureState.dx < 301.65
      ) {
        if (this.currentIconFocus !== 5) {
          this.handleWhenDragBetweenIcon(5);
        }
      } else if (
        gestureState.x0 + gestureState.dx >= 301.65 &&
        gestureState.x0 + gestureState.dx <= 354.98
      ) {
        if (this.currentIconFocus !== 6) {
          this.handleWhenDragBetweenIcon(6);
        }
      }
    } else {
      this.whichIconUserChoose = 0;
      this.previousIconFocus = 0;
      this.currentIconFocus = 0;
      this.isJustDragInside = true;

      if (this.isDragging && !this.isDraggingOutside) {
        this.isDragging = false;
        this.isDraggingOutside = true;
        this.setState({});

        this.controlBoxWhenDragOutside();
        this.controlIconWhenDragOutside();
      }
    }
  };

  onTouchStart = () => {
    this.isTouchBtn = true;
    this.setState({});

    this.timerMeasureLongTouch = setTimeout(
      this.doAnimationLongTouch,
      this.durationLongPress,
    );
  };

  onTouchEnd = () => {
    this.isTouchBtn = false;
    this.setState({});

    if (!this.isLongTouch) {
      if (this.whichIconUserChoose !== 0) {
        this.whichIconUserChoose = 0;
        this.isLiked = true;
      }
      clearTimeout(this.timerMeasureLongTouch);
      this.doAnimationQuickTouch();
    }
  };

  onDragRelease = () => {
    this.doAnimationLongTouchReverse();
    this.controlIconWhenRelease();
  };

  doAnimationQuickTouch = () => {
    if (!this.isLiked) {
      this.isLiked = true;
      this.setState({});

      this.tiltIconAnim.setValue(0);
      this.zoomIconAnim.setValue(0);
      this.zoomTextAnim.setValue(0);
      Animated.parallel([
        Animated.timing(this.tiltIconAnim, {
          toValue: 1,
          duration: this.durationAnimationQuickTouch * this.currentSpeed,
        }),
        Animated.timing(this.zoomIconAnim, {
          toValue: 1,
          duration: this.durationAnimationQuickTouch * this.currentSpeed,
        }),
        Animated.timing(this.zoomTextAnim, {
          toValue: 1,
          duration: this.durationAnimationQuickTouch * this.currentSpeed,
        }),
      ]).start();
    } else {
      this.isLiked = false;
      this.setState({});

      this.tiltIconAnim.setValue(1);
      this.zoomIconAnim.setValue(1);
      this.zoomTextAnim.setValue(1);
      Animated.parallel([
        Animated.timing(this.tiltIconAnim, {
          toValue: 0,
          duration: this.durationAnimationQuickTouch * this.currentSpeed,
        }),
        Animated.timing(this.zoomIconAnim, {
          toValue: 0,
          duration: this.durationAnimationQuickTouch * this.currentSpeed,
        }),
        Animated.timing(this.zoomTextAnim, {
          toValue: 0,
          duration: this.durationAnimationQuickTouch * this.currentSpeed,
        }),
      ]).start();
    }
  };

  doAnimationLongTouch = () => {
    this.isLongTouch = true;
    this.setState({});

    this.tiltIconAnim2.setValue(0);
    this.zoomIconAnim2.setValue(1);
    this.zoomTextAnim2.setValue(1);

    this.fadeBoxAnim.setValue(0);

    this.moveRightGroupIcon.setValue(10);

    this.pushIconLikeUp.setValue(0);
    this.zoomIconLike.setValue(0.01);

    this.pushIconLoveUp.setValue(0);
    this.zoomIconLove.setValue(0.01);

    this.pushIconHahaUp.setValue(0);
    this.zoomIconHaha.setValue(0.01);

    this.pushIconWowUp.setValue(0);
    this.zoomIconWow.setValue(0.01);

    this.pushIconSadUp.setValue(0);
    this.zoomIconSad.setValue(0.01);

    this.pushIconAngryUp.setValue(0);
    this.zoomIconAngry.setValue(0.01);

    Animated.parallel([
      Animated.timing(this.tiltIconAnim2, {
        toValue: 1,
        duration: this.durationAnimationLongTouch * this.currentSpeed,
      }),
      Animated.timing(this.zoomIconAnim2, {
        toValue: 0.8,
        duration: this.durationAnimationLongTouch * this.currentSpeed,
      }),
      Animated.timing(this.zoomTextAnim2, {
        toValue: 0.8,
        duration: this.durationAnimationLongTouch * this.currentSpeed,
      }),
      Animated.timing(this.fadeBoxAnim, {
        toValue: 1,
        duration: this.durationAnimationBox * this.currentSpeed,
        delay: 350,
      }),
      Animated.timing(this.moveRightGroupIcon, {
        toValue: 20,
        duration: this.durationAnimationBox * this.currentSpeed,
      }),

      Animated.timing(this.pushIconLikeUp, {
        toValue: 25,
        duration: 250 * this.currentSpeed,
      }),
      Animated.timing(this.zoomIconLike, {
        toValue: 1,
        duration: 250 * this.currentSpeed,
      }),
      Animated.timing(this.pushIconLoveUp, {
        toValue: 25,
        duration: 250 * this.currentSpeed,
        delay: 50,
      }),
      Animated.timing(this.zoomIconLove, {
        toValue: 1,
        duration: 250 * this.currentSpeed,
        delay: 50,
      }),
      Animated.timing(this.pushIconHahaUp, {
        toValue: 25,
        duration: 250 * this.currentSpeed,
        delay: 100,
      }),
      Animated.timing(this.zoomIconHaha, {
        toValue: 1,
        duration: 250 * this.currentSpeed,
        delay: 100,
      }),
      Animated.timing(this.pushIconWowUp, {
        toValue: 25,
        duration: 250 * this.currentSpeed,
        delay: 150,
      }),
      Animated.timing(this.zoomIconWow, {
        toValue: 1,
        duration: 250 * this.currentSpeed,
        delay: 150,
      }),
      Animated.timing(this.pushIconSadUp, {
        toValue: 25,
        duration: 250 * this.currentSpeed,
        delay: 200,
      }),
      Animated.timing(this.zoomIconSad, {
        toValue: 1,
        duration: 250 * this.currentSpeed,
        delay: 200,
      }),
      Animated.timing(this.pushIconAngryUp, {
        toValue: 25,
        duration: 250 * this.currentSpeed,
        delay: 250,
      }),
      Animated.timing(this.zoomIconAngry, {
        toValue: 1,
        duration: 250 * this.currentSpeed,
        delay: 250,
      }),
    ]).start();
  };

  doAnimationLongTouchReverse = () => {
    this.tiltIconAnim2.setValue(1);
    this.zoomIconAnim2.setValue(0.8);
    this.zoomTextAnim2.setValue(0.8);

    this.fadeBoxAnim.setValue(1);

    this.moveRightGroupIcon.setValue(20);

    this.pushIconLikeUp.setValue(25);
    this.zoomIconLike.setValue(1);

    this.pushIconLoveUp.setValue(25);
    this.zoomIconLove.setValue(1);

    this.pushIconHahaUp.setValue(25);
    this.zoomIconHaha.setValue(1);

    this.pushIconWowUp.setValue(25);
    this.zoomIconWow.setValue(1);

    this.pushIconSadUp.setValue(25);
    this.zoomIconSad.setValue(1);

    this.pushIconAngryUp.setValue(25);
    this.zoomIconAngry.setValue(1);

    Animated.parallel([
      Animated.timing(this.tiltIconAnim2, {
        toValue: 0,
        duration: this.durationAnimationLongTouch * this.currentSpeed,
      }),
      Animated.timing(this.zoomIconAnim2, {
        toValue: 1,
        duration: this.durationAnimationLongTouch * this.currentSpeed,
      }),
      Animated.timing(this.zoomTextAnim2, {
        toValue: 1,
        duration: this.durationAnimationLongTouch * this.currentSpeed,
      }),
      Animated.timing(this.fadeBoxAnim, {
        toValue: 0,
        duration: this.durationAnimationLongTouch * this.currentSpeed,
      }),
      Animated.timing(this.moveRightGroupIcon, {
        toValue: 10,
        duration: this.durationAnimationBox * this.currentSpeed,
      }),

      Animated.timing(this.pushIconLikeUp, {
        toValue: 0,
        duration: 250 * this.currentSpeed,
      }),
      Animated.timing(this.zoomIconLike, {
        toValue: 0.01,
        duration: 250 * this.currentSpeed,
      }),
      Animated.timing(this.pushIconLoveUp, {
        toValue: 0,
        duration: 250 * this.currentSpeed,
        delay: 50,
      }),
      Animated.timing(this.zoomIconLove, {
        toValue: 0.01,
        duration: 250 * this.currentSpeed,
        delay: 50,
      }),

      Animated.timing(this.pushIconHahaUp, {
        toValue: 0,
        duration: 250 * this.currentSpeed,
        delay: 100,
      }),
      Animated.timing(this.zoomIconHaha, {
        toValue: 0.01,
        duration: 250 * this.currentSpeed,
        delay: 100,
      }),

      Animated.timing(this.pushIconWowUp, {
        toValue: 0,
        duration: 250 * this.currentSpeed,
        delay: 150,
      }),
      Animated.timing(this.zoomIconWow, {
        toValue: 0.01,
        duration: 250 * this.currentSpeed,
        delay: 150,
      }),

      Animated.timing(this.pushIconSadUp, {
        toValue: 0,
        duration: 250 * this.currentSpeed,
        delay: 200,
      }),
      Animated.timing(this.zoomIconSad, {
        toValue: 0.01,
        duration: 250 * this.currentSpeed,
        delay: 200,
      }),

      Animated.timing(this.pushIconAngryUp, {
        toValue: 0,
        duration: 250 * this.currentSpeed,
        delay: 250,
      }),
      Animated.timing(this.zoomIconAngry, {
        toValue: 0.01,
        duration: 250 * this.currentSpeed,
        delay: 250,
      }),
    ]).start(this.onAnimationLongTouchComplete);
  };

  onAnimationLongTouchComplete = () => {
    this.isLongTouch = false;
    this.setState({});
  };

  handleWhenDragBetweenIcon = (currentIcon) => {
    this.whichIconUserChoose = currentIcon;
    this.previousIconFocus = this.currentIconFocus;
    this.currentIconFocus = currentIcon;

    this.controlIconWhenDrag();
  };

  controlIconWhenDrag = () => {
    this.zoomIconChosen.setValue(0.8);
    this.zoomIconNotChosen.setValue(1.8);
    this.zoomBoxWhenDragInside.setValue(1.0);

    this.pushTextDescriptionUp.setValue(60);
    this.zoomTextDescription.setValue(1.0);

    this.setState({});

    setTimeout(
      () =>
        Animated.parallel([
          Animated.timing(this.zoomIconChosen, {
            toValue: 1.8,
            duration: this.durationAnimationIconWhenDrag * this.currentSpeed,
          }),
          Animated.timing(this.zoomIconNotChosen, {
            toValue: 0.8,
            duration: this.durationAnimationIconWhenDrag * this.currentSpeed,
          }),
          Animated.timing(this.zoomBoxWhenDragInside, {
            toValue: 0.95,
            duration: this.durationAnimationIconWhenDrag * this.currentSpeed,
          }),

          Animated.timing(this.pushTextDescriptionUp, {
            toValue: 90,
            duration: this.durationAnimationIconWhenDrag * this.currentSpeed,
          }),
          Animated.timing(this.zoomTextDescription, {
            toValue: 1.7,
            duration: this.durationAnimationIconWhenDrag * this.currentSpeed,
          }),
        ]).start(),
      50,
    );
  };

  controlIconWhenDragInside = () => {
    this.setState({});

    this.zoomIconWhenDragInside.setValue(1.0);
    Animated.timing(this.zoomIconWhenDragInside, {
      toValue: 0.8,
      duration: this.durationAnimationIconWhenDrag * this.currentSpeed,
    }).start(this.onAnimationIconWhenDragInsideComplete);
  };

  onAnimationIconWhenDragInsideComplete = () => {
    this.isJustDragInside = false;
    this.setState({});
  };

  controlIconWhenDragOutside = () => {
    this.zoomIconWhenDragOutside.setValue(0.8);

    Animated.timing(this.zoomIconWhenDragOutside, {
      toValue: 1.0,
      duration: this.durationAnimationIconWhenDrag * this.currentSpeed,
    }).start();
  };

  controlBoxWhenDragOutside = () => {
    this.zoomBoxWhenDragOutside.setValue(0.95);

    Animated.timing(this.zoomBoxWhenDragOutside, {
      toValue: 1.0,
      duration: this.durationAnimationIconWhenDrag * this.currentSpeed,
    }).start();
  };

  controlIconWhenRelease = () => {
    this.zoomIconWhenRelease.setValue(1);
    this.moveUpDownIconWhenRelease.setValue(0);
    this.moveLeftIconLikeWhenRelease.setValue(20);
    this.moveLeftIconLoveWhenRelease.setValue(72);
    this.moveLeftIconHahaWhenRelease.setValue(154);
    this.moveLeftIconWowWhenRelease.setValue(173);
    this.moveLeftIconSadWhenRelease.setValue(226);
    this.moveLeftIconAngryWhenRelease.setValue(278);

    Animated.parallel([
      Animated.timing(this.zoomIconWhenRelease, {
        toValue: 0,
        duration: this.durationAnimationIconWhenRelease * this.currentSpeed,
      }),
      Animated.timing(this.moveUpDownIconWhenRelease, {
        toValue: 1,
        duration: this.durationAnimationIconWhenRelease * this.currentSpeed,
      }),
      Animated.timing(this.moveLeftIconLikeWhenRelease, {
        toValue: 0,
        duration: this.durationAnimationIconWhenRelease * this.currentSpeed,
      }),
      Animated.timing(this.moveLeftIconLoveWhenRelease, {
        toValue: 0,
        duration: this.durationAnimationIconWhenRelease * this.currentSpeed,
      }),
      Animated.timing(this.moveLeftIconHahaWhenRelease, {
        toValue: 0,
        duration: this.durationAnimationIconWhenRelease * this.currentSpeed,
      }),
      Animated.timing(this.moveLeftIconWowWhenRelease, {
        toValue: 0,
        duration: this.durationAnimationIconWhenRelease * this.currentSpeed,
      }),
      Animated.timing(this.moveLeftIconSadWhenRelease, {
        toValue: 0,
        duration: this.durationAnimationIconWhenRelease * this.currentSpeed,
      }),
      Animated.timing(this.moveLeftIconAngryWhenRelease, {
        toValue: 0,
        duration: this.durationAnimationIconWhenRelease * this.currentSpeed,
      }),
    ]).start();
  };

  scaleDefault = () =>
    this.isDragging
      ? this.previousIconFocus === 0
        ? this.zoomBoxWhenDragInside
        : 0.95
      : this.isDraggingOutside
      ? this.zoomBoxWhenDragOutside
      : 1.0;

  renderButton() {
    const tiltBounceIconAnim = this.tiltIconAnim.interpolate({
      inputRange: [0, 0.2, 0.8, 1],
      outputRange: ['0deg', '20deg', '-15deg', '0deg'],
    });
    const zoomBounceIconAnim = this.zoomIconAnim.interpolate({
      inputRange: [0, 0.2, 0.8, 1],
      outputRange: [1, 0.8, 1.15, 1],
    });
    const zoomBounceTextAnim = this.zoomIconAnim.interpolate({
      inputRange: [0, 0.2, 0.8, 1],
      outputRange: [1, 0.8, 1.15, 1],
    });

    const tiltBounceIconAnim2 = this.tiltIconAnim2.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '20deg'],
    });

    return (
      <View
        style={[
          ReactionPickerStyle.viewBtn,
          {borderColor: this.getBorderColorBtn()},
        ]}
        onTouchStart={this.onTouchStart}
        onTouchEnd={this.onTouchEnd}>
        <Animated.View
          style={[
            {
              transform: [
                {
                  rotate: this.isLongTouch
                    ? tiltBounceIconAnim2
                    : tiltBounceIconAnim,
                },
                {
                  scale: this.isLongTouch
                    ? this.zoomIconAnim2
                    : zoomBounceIconAnim,
                },
              ],
            },
          ]}>
          <FastImage
            style={ReactionPickerStyle.imgLikeInBtn}
            source={this.getIconBtn()}
          />
        </Animated.View>
        <Animated.Text
          style={[
            ReactionPickerStyle.textBtn,
            {color: this.getColorTextBtn()},
            {
              transform: [
                {
                  scale: this.isLongTouch
                    ? this.zoomTextAnim2
                    : zoomBounceTextAnim,
                },
              ],
            },
          ]}>
          {this.getTextBtn()}
        </Animated.Text>
      </View>
    );
  }

  renderGroupIcon() {
    const scaleFocus = (focus) =>
      this.isDragging
        ? this.currentIconFocus === focus
          ? this.zoomIconChosen
          : this.previousIconFocus === focus
          ? this.zoomIconNotChosen
          : this.isJustDragInside
          ? this.zoomIconWhenDragInside
          : 0.8
        : this.isDraggingOutside
        ? this.zoomIconWhenDragOutside
        : this.zoomIconLike;
    return (
      <Animated.View
        style={[
          ReactionPickerStyle.viewWrapGroupIcon,
          {marginLeft: this.moveRightGroupIcon},
        ]}>
        <View style={ReactionPickerStyle.viewWrapIcon}>
          <Animated.View
            style={{
              marginBottom: this.pushIconLikeUp,
              transform: [{scale: scaleFocus(1)}],
            }}>
            <FastImage
              style={ReactionPickerStyle.imgIcon}
              source={images.like_gif}
            />
          </Animated.View>
        </View>
        <View style={ReactionPickerStyle.viewWrapIcon}>
          <Animated.View
            style={{
              marginBottom: this.pushIconLoveUp,
              transform: [{scale: scaleFocus(2)}],
            }}>
            <FastImage
              style={ReactionPickerStyle.imgIcon}
              source={images.love_gif}
            />
          </Animated.View>
        </View>
        <View style={ReactionPickerStyle.viewWrapIcon}>
          <Animated.View
            style={{
              marginBottom: this.pushIconHahaUp,
              transform: [{scale: scaleFocus(3)}],
            }}>
            <FastImage
              style={ReactionPickerStyle.imgIcon}
              source={images.haha_gif}
            />
          </Animated.View>
        </View>
        <View style={ReactionPickerStyle.viewWrapIcon}>
          <Animated.View
            style={{
              marginBottom: this.pushIconWowUp,
              transform: [{scale: scaleFocus(4)}],
            }}>
            <FastImage
              style={ReactionPickerStyle.imgIcon}
              source={images.wow_gif}
            />
          </Animated.View>
        </View>
        <View style={ReactionPickerStyle.viewWrapIcon}>
          <Animated.View
            style={{
              marginBottom: this.pushIconSadUp,
              transform: [{scale: scaleFocus(5)}],
            }}>
            <FastImage
              style={ReactionPickerStyle.imgIcon}
              source={images.sad_gif}
            />
          </Animated.View>
        </View>
        <View style={ReactionPickerStyle.viewWrapIcon}>
          <Animated.View
            style={{
              marginBottom: this.pushIconAngryUp,
              transform: [{scale: scaleFocus(6)}],
            }}>
            <FastImage
              style={ReactionPickerStyle.imgIcon}
              source={images.angry_gif}
            />
          </Animated.View>
        </View>
      </Animated.View>
    );
  }

  renderGroupJumpIcon() {
    const moveUpDownIcon = this.moveUpDownIconWhenRelease.interpolate({
      inputRange: [0, 0.4, 1],
      outputRange: [40, 100, 0],
    });
    return (
      <View style={ReactionPickerStyle.viewWrapGroupJumpIcon}>
        {this.whichIconUserChoose === 1 && !this.isDragging ? (
          <Animated.View
            style={[
              ReactionPickerStyle.box,
              {
                left: this.moveLeftIconLikeWhenRelease,
                bottom: moveUpDownIcon,
                transform: [{scale: this.zoomIconWhenRelease}],
              },
            ]}>
            <FastImage
              style={ReactionPickerStyle.imgIcon}
              source={images.like_gif}
            />
          </Animated.View>
        ) : null}
        {this.whichIconUserChoose === 2 && !this.isDragging ? (
          <Animated.View
            style={[
              ReactionPickerStyle.box,
              {
                left: this.moveLeftIconLoveWhenRelease,
                bottom: moveUpDownIcon,
                transform: [{scale: this.zoomIconWhenRelease}],
              },
            ]}>
            <FastImage
              style={ReactionPickerStyle.imgIcon}
              source={images.love_gif}
            />
          </Animated.View>
        ) : null}
        {this.whichIconUserChoose === 3 && !this.isDragging ? (
          <Animated.View
            style={[
              ReactionPickerStyle.box,
              {
                left: this.moveLeftIconHahaWhenRelease,
                bottom: moveUpDownIcon,
                transform: [{scale: this.zoomIconWhenRelease}],
              },
            ]}>
            <FastImage
              style={ReactionPickerStyle.imgIcon}
              source={images.haha_gif}
            />
          </Animated.View>
        ) : null}
        {this.whichIconUserChoose === 4 && !this.isDragging ? (
          <Animated.View
            style={[
              ReactionPickerStyle.box,
              {
                left: this.moveLeftIconWowWhenRelease,
                bottom: moveUpDownIcon,
                transform: [{scale: this.zoomIconWhenRelease}],
              },
            ]}>
            <FastImage
              style={ReactionPickerStyle.imgIcon}
              source={images.wow_gif}
            />
          </Animated.View>
        ) : null}
        {this.whichIconUserChoose === 5 && !this.isDragging ? (
          <Animated.View
            style={[
              ReactionPickerStyle.box,
              {
                left: this.moveLeftIconSadWhenRelease,
                bottom: moveUpDownIcon,
                transform: [{scale: this.zoomIconWhenRelease}],
              },
            ]}>
            <FastImage
              style={ReactionPickerStyle.imgIcon}
              source={images.sad_gif}
            />
          </Animated.View>
        ) : null}
        {this.whichIconUserChoose === 6 && !this.isDragging ? (
          <Animated.View
            style={[
              ReactionPickerStyle.box,
              {
                left: this.moveLeftIconAngryWhenRelease,
                bottom: moveUpDownIcon,
                transform: [{scale: this.zoomIconWhenRelease}],
              },
            ]}>
            <FastImage
              style={ReactionPickerStyle.imgIcon}
              source={images.angry_gif}
            />
          </Animated.View>
        ) : null}
      </View>
    );
  }

  render() {
    return (
      <View style={ReactionPickerStyle.viewContainer}>
        <View
          style={ReactionPickerStyle.viewBody}
          {...this.rootPanResponder.panHandlers}>
          <View style={ReactionPickerStyle.viewTopSpace} />
          <View style={ReactionPickerStyle.viewContent}>
            <Animated.View
              style={[
                ReactionPickerStyle.viewBox,
                {
                  opacity: this.fadeBoxAnim,
                  transform: [{scale: this.scaleDefault()}],
                },
              ]}
            />
            {this.renderGroupIcon()}
            {this.renderGroupJumpIcon()}
            {this.renderButton()}
          </View>
        </View>
      </View>
    );
  }
}

export default ReactionPicker;
