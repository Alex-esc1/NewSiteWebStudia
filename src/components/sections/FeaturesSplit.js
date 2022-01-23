import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

class FeaturesSplit extends React.Component {

  render() {

    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      invertMobile,
      invertDesktop,
      alignTop,
      imageFill,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'features-split section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'features-split-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const splitClasses = classNames(
      'split-wrap',
      invertMobile && 'invert-mobile',
      invertDesktop && 'invert-desktop',
      alignTop && 'align-top'
    );

    const sectionHeader = {
      title: 'CREATING TURNKEY WEBSITES',
      paragraph: 'Our difference is ready-made solutions for Internet projects in 2-4 weeks! Full product support! Warranty and technical support for a month for free! The service is a remote site administrator or programmer!'
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content reveal-from-top" />
            <div className={splitClasses}>

              <div className="split-item">
                <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                  <h3 className="mt-0 mb-16">
                    Creating unique websites
                  </h3>
                  <p className="m-0">
                    Online stores, landing pages, corporate websites! Full product support! Warranty and technical support!
                  </p>
                </div>
                <div className={
                  classNames(
                    'split-item-image center-content-mobile illustration-element-01 reveal-rotate-from-left',
                    imageFill && 'split-item-image-fill'
                  )}
                  data-reveal-container=".split-item">
                  <Image
                    src={require('./../../assets/images/features-split-image.svg')}
                    alt="Features split 01"
                    width={528}
                    height={396} />
                  <div style={imgOddStyle}>
                    <Image
                      src={require('./../../assets/images/features-split-top-01.png')}
                      alt="Features split top 01"
                      width={624}
                      height={512} />
                  </div>
                </div>
              </div>

              <div className="split-item">
                <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                  <h3 className="mt-0 mb-16">
                    Mobile app
                  </h3>
                  <p className="m-0">
                    Development of mobile applications for android and IOS
                  </p>
                </div>
                <div className={
                  classNames(
                    'split-item-image center-content-mobile illustration-element-02 reveal-rotate-from-right',
                    imageFill && 'split-item-image-fill'
                  )}
                  data-reveal-container=".split-item">
                  <Image
                    src={require('./../../assets/images/features-split-image.svg')}
                    alt="Features split 02"
                    width={528}
                    height={396} />
                  <div style={imgEvenStyle}>
                    <Image
                      src={require('./../../assets/images/features-split-top-02.png')}
                      alt="Features split top 02"
                      width={624}
                      height={512} />
                  </div>
                </div>
              </div>

              <div className="split-item">
                <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                  <h3 className="mt-0 mb-16">
                    E-commerce development
                  </h3>
                  <p className="m-0">
                    The choice of software for your online store!
                  </p>
                </div>
                <div className={
                  classNames(
                    'split-item-image center-content-mobile illustration-element-03 reveal-rotate-from-left',
                    imageFill && 'split-item-image-fill'
                  )}
                  data-reveal-container=".split-item">
                  <Image
                    src={require('./../../assets/images/features-split-image.svg')}
                    alt="Features split 03"
                    width={528}
                    height={396} />
                  <div style={imgOddStyle}>
                    <Image
                      src={require('./../../assets/images/features-split-top-03.png')}
                      alt="Features split top 03"
                      width={624}
                      height={512} />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    );
  }
}

const imgOddStyle = {
  position: 'absolute',
  width: '132.95%',
  maxWidth: '132.95%',
  top: '-13.89%',
  left: '-16.47%'
}

const imgEvenStyle = {
  position: 'absolute',
  width: '132.95%',
  maxWidth: '132.95%',
  top: '-13.89%',
  left: '-16.47%'
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;