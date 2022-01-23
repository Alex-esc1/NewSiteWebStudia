import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

class FeaturesTiles extends React.Component {

  render() {

    const {
      className,
      topOuterDivider,
      bottomOuterDivider,      
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      pushLeft,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'features-tiles section center-content',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'features-tiles-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const tilesClasses = classNames(
      'tiles-wrap',
      pushLeft && 'push-left'
    );

    const sectionHeader = {
      title: '',
      paragraph: ''
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            <div className={tilesClasses}>

              <div className="tiles-item">
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-16 reveal-from-top" data-reveal-container=".tiles-item">
                      <Image
                        src={require('./../../assets/images/feature-tile-icon-01.svg')}
                        alt="Features tile icon 01"
                        width={128}
                        height={72} />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="h5 mt-0 mb-8 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="100">
                      E-COMERCE
                    </h4>
                    <p className="m-0 text-sm reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="200">
                    The development of an online store is an important stage of the company's development. Most often, this is a broader infrastructure issue than the usual site development
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item">
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-16 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="100">
                      <Image
                        src={require('./../../assets/images/feature-tile-icon-02.svg')}
                        alt="Features tile icon 02"
                        width={128}
                        height={72} />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="h5 mt-0 mb-8 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="200">
                      MOBILE APP
                    </h4>
                    <p className="m-0 text-sm reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="300">
                    Application development for mobile devices is a process in which applications are developed for small portable devices, such as PDAs, smartphones or cell phones.
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item">
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-16 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="200">
                      <Image
                        src={require('./../../assets/images/feature-tile-icon-03.svg')}
                        alt="Features tile icon 03"
                        width={128}
                        height={72} />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="h5 mt-0 mb-8 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="300">
                        PLATFORM
                    </h4>
                    <p className="m-0 text-sm reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="400">
                        This is a complete solution, a portal or a large website with great functionality
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item">
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-16 reveal-from-top" data-reveal-container=".tiles-item">
                      <Image
                        src={require('./../../assets/images/feature-tile-icon-04.svg')}
                        alt="Features tile icon 04"
                        width={128}
                        height={72} />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="h5 mt-0 mb-8 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="100">
                        WEB DEVELOPMENT
                    </h4>
                    <p className="m-0 text-sm reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="200">
                      Web development is the process of creating a website or web application. The main stages of the process are web design, page layout, client-side and server-side programming, as well as web server configuration.
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item">
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-16 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="100">
                      <Image
                        src={require('./../../assets/images/feature-tile-icon-05.svg')}
                        alt="Features tile icon 05"
                        width={128}
                        height={72} />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="h5 mt-0 mb-8 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="200">
                      TECHNICAL SUPPORT
                    </h4>
                    <p className="m-0 text-sm reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="300">
                      Support and maintenance of the site around the clock
                    </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item">
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-16 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="200">
                      <Image
                        src={require('./../../assets/images/feature-tile-icon-06.svg')}
                        alt="Features tile icon 06"
                        width={128}
                        height={72} />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="h5 mt-0 mb-8 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="300">
                      DESIGNER
                    </h4>
                    <p className="m-0 text-sm reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="400">
                      Banners, logos, design layouts of websites, applications, creation of corporate identity.
                    </p>
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

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;