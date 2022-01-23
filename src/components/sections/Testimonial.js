import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

class Testimonial extends React.Component {

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
      'testimonial section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'testimonial-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const tilesClasses = classNames(
      'tiles-wrap illustration-section-03',
      pushLeft && 'push-left'
    );

    const sectionHeader = {
      title: 'Development Tools',
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

              <div className="tiles-item reveal-from-top">
                <div className="tiles-item-inner has-shadow">
                  <div className="testimonial-item-content">
                    <p className="text-sm mb-16">
                    We are business participants of 1С Bitrix.
                    </p>
                  </div>
                  <div className="testimonial-item-footer h6 mt-0 mb-12">
                    <span className="testimonial-item-name">
                      <a href="#0">CMS BITRIX</a>
                    </span>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-top" data-reveal-delay="200">
                <div className="tiles-item-inner has-shadow">
                  <div className="testimonial-item-content">
                    <p className="text-sm mb-16">
                      Over 5 years of development experience on Laravel
                    </p>
                  </div>
                  <div className="testimonial-item-footer h6 mt-0 mb-12">
                    <span className="testimonial-item-name">
                      <a href="#0">PHP LARAVEL</a>
                    </span>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-top" data-reveal-delay="400">
                <div className="tiles-item-inner has-shadow">
                  <div className="testimonial-item-content">
                    <p className="text-sm mb-16">
                      Experience in maintaining and configuring WordPress sites
                    </p>
                  </div>
                  <div className="testimonial-item-footer h6 mt-0 mb-12">
                    <span className="testimonial-item-name">
                      <a href="#0">CMS WORDPRESS</a>
                    </span>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-top">
                <div className="tiles-item-inner has-shadow">
                  <div className="testimonial-item-content">
                    <p className="text-sm mb-16">
                        Data analytics, website parsing, mobile app development
                    </p>
                  </div>
                  <div className="testimonial-item-footer h6 mt-0 mb-12">
                    <span className="testimonial-item-name">
                      <a href="#0">PYTHON</a>
                    </span>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-top" data-reveal-delay="200">
                <div className="tiles-item-inner has-shadow">
                  <div className="testimonial-item-content">
                    <p className="text-sm mb-16">
                      Creation of websites, mobile applications
                    </p>
                  </div>
                  <div className="testimonial-item-footer h6 mt-0 mb-12">
                    <span className="testimonial-item-name">
                      <a href="#0">REACT</a>
                    </span>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-top" data-reveal-delay="400">
                <div className="tiles-item-inner has-shadow">
                  <div className="testimonial-item-content">
                    <p className="text-sm mb-16">
                      Cross-platform, rapid application development
                    </p>
                  </div>
                  <div className="testimonial-item-footer h6 mt-0 mb-12">
                    <span className="testimonial-item-name">
                      <a href="#0">FLUTTER</a>
                    </span>
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

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;