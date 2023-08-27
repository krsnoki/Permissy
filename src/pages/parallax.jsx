import  { Component } from 'react';
import _ from 'lodash'; // Make sure to install lodash if you haven't already

class ParallaxComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ticking: false,
      isFirefox: (/Firefox/i.test(navigator.userAgent)),
      isIe: (/MSIE/i.test(navigator.userAgent)) || (/Trident.*rv\:11\./i.test(navigator.userAgent)),
      scrollSensitivitySetting: 30,
      slideDurationSetting: 600,
      currentSlideNumber: 0,
      totalSlideNumber: 0,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    const totalSlideNumber = document.querySelectorAll('.background').length;
    this.setState({ totalSlideNumber });

    const mousewheelEvent = this.state.isFirefox ? 'DOMMouseScroll' : 'wheel';
    window.addEventListener(mousewheelEvent, _.throttle(this.handleScroll, 60), false);
  }

  componentWillUnmount() {
    const mousewheelEvent = this.state.isFirefox ? 'DOMMouseScroll' : 'wheel';
    window.removeEventListener(mousewheelEvent, this.handleScroll);
  }

  slideDurationTimeout(slideDuration) {
    setTimeout(() => {
      this.setState({ ticking: false });
    }, slideDuration);
  }

  handleScroll(evt) {
    const { isFirefox, isIe, scrollSensitivitySetting, ticking, currentSlideNumber, totalSlideNumber } = this.state;
    let delta;

    if (isFirefox) {
      delta = evt.detail * (-120);
    } else if (isIe) {
      delta = -evt.deltaY;
    } else {
      delta = evt.wheelDelta;
    }

    if (!ticking) {
      if (delta <= -scrollSensitivitySetting) {
        this.setState({ ticking: true });
        if (currentSlideNumber !== totalSlideNumber - 1) {
          this.setState({ currentSlideNumber: currentSlideNumber + 1 });
          this.nextItem();
        }
        this.slideDurationTimeout(this.state.slideDurationSetting);
      }
      if (delta >= scrollSensitivitySetting) {
        this.setState({ ticking: true });
        if (currentSlideNumber !== 0) {
          this.setState({ currentSlideNumber: currentSlideNumber - 1 });
          this.previousItem();
        }
        this.slideDurationTimeout(this.state.slideDurationSetting);
      }
    }
  }

  nextItem() {
    const $previousSlide = document.querySelectorAll('.background')[this.state.currentSlideNumber - 1];
    $previousSlide.classList.remove('up-scroll');
    $previousSlide.classList.add('down-scroll');
  }

  previousItem() {
    const $currentSlide = document.querySelectorAll('.background')[this.state.currentSlideNumber];
    $currentSlide.classList.remove('down-scroll');
    $currentSlide.classList.add('up-scroll');
  }

  render() {
    return (
      <div className="container">
        {/* Define your background sections here */}
      </div>
    );
  }
}

export default ParallaxComponent;
