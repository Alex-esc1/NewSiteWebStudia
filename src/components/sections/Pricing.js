import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Switch from '../elements/Switch';
import Button from '../elements/Button';

const propTypes = {
  ...SectionTilesProps.types,
  pricingSwitcher: PropTypes.bool,
  pricingSlider: PropTypes.bool
}

const defaultProps = {
  ...SectionTilesProps.defaults,
  pricingSwitcher: false,
  pricingSlider: false
}

class Pricing extends React.Component {

  state = {
    priceChangerValue: "1",
    priceInput: {
      // 0: "1,000",
      // 1: "1,250"
    },
    priceOutput: {
      plan1: {
        0: ["BYN", "300", "Without support"],
        1: ["BYN", "650", "Support 6 months"]
      },
      plan2: {
        0: ["BYN", "700", "Without support"],
        1: ["BYN", "1200", "Support 6 months"]
      },
      plan3: {
        0: ["BYN", "3000", "Without support"],
        1: ["BYN", "4500", "Support 6 months"]
      }
    }
  }

  slider = React.createRef();
  sliderValue = React.createRef();

  componentDidMount() {
    if (this.props.pricingSlider) {
      this.slider.current.setAttribute('min', 0);
      this.slider.current.setAttribute('max', Object.keys(this.state.priceInput).length - 1);
      this.thumbSize = parseInt(window.getComputedStyle(this.sliderValue.current).getPropertyValue('--thumb-size'), 10);
      this.handleSliderValuePosition(this.slider.current);
    }
  }

  handlePricingSwitch = (e) => {
    this.setState({ priceChangerValue: e.target.checked ? '1' : '0' });
  }

  handlePricingSlide = (e) => {
    this.setState({ priceChangerValue: e.target.value });
    this.handleSliderValuePosition(e.target);
  }

  handleSliderValuePosition = (input) => {
    const multiplier = input.value / input.max;
    const thumbOffset = this.thumbSize * multiplier;
    const priceInputOffset = (this.thumbSize - this.sliderValue.current.clientWidth) / 2;
    this.sliderValue.current.style.left = input.clientWidth * multiplier - thumbOffset + priceInputOffset + 'px';
  }

  getPricingData = (values, set) => {
    return set !== undefined ? values[this.state.priceChangerValue][set] : values[this.state.priceChangerValue];
  }

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
      pricingSwitcher,
      pricingSlider,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'pricing section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'pricing-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const tilesClasses = classNames(
      'tiles-wrap illustration-section-04',
      pushLeft && 'push-left'
    );

    const sectionHeader = {
      title: 'Simple pricing',
      paragraph: 'These prices are for informational purposes. '
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            {pricingSwitcher &&
              <div id="prices" className="pricing-switcher center-content">
                <Switch
                  checked={this.state.priceChangerValue === '1' ? true : false}
                  onChange={this.handlePricingSwitch}
                  rightLabel="With the support">
                    Without support
                </Switch>
              </div>
            }
            {pricingSlider &&
              <div className="pricing-slider center-content">
                <label className="form-slider">
                  <span className="mb-16">How many users do you have?</span>
                  <input
                    type="range"
                    ref={this.slider}
                    defaultValue={this.state.priceChangerValue}
                    onChange={this.handlePricingSlide}
                  />
                </label>
                <div ref={this.sliderValue} className="pricing-slider-value">
                  {this.getPricingData(this.state.priceInput)}
                </div>
              </div>
            }            
            <div className={tilesClasses}>

              <div className="tiles-item reveal-from-top">
                <div className="tiles-item-inner has-shadow">
                  <div className="pricing-item-content">
                    <div className="pricing-item-header pb-16 mb-24">
                      <div className="pricing-item-price mb-4">
                        <span className="pricing-item-price-currency h2 text-color-low">
                          {this.getPricingData(this.state.priceOutput.plan1, 0)}
                        </span>
                        <span className="pricing-item-price-amount h1">
                          {this.getPricingData(this.state.priceOutput.plan1, 1)}  
                        </span>
                      </div>
                      <div className="text-color-low text-xs">
                      {this.getPricingData(this.state.priceOutput.plan1, 2)}
                      </div>
                    </div>
                    <div className="pricing-item-features mb-40">
                      <div className="pricing-item-features-title text-xs fw-700 text-color-high mb-24">
                        Landing pages, business card sites
                      </div>
                      <ul className="pricing-item-features-list list-reset text-xs mb-32">
                        <li className="is-checked">Filling with content one page</li>
                        <li className="is-checked">Transferring a website to hosting</li>
                        <li className="is-checked">Transferring the site to your hosting</li>
                        <li>Free setup and installation of metrics</li>
                        <li>Support is free for the first month</li>
                      </ul>
                    </div>
                  </div>
                  <div className="pricing-item-cta mb-8">
                    <Button tag="a" color="primary" wide href="/signup/">To order</Button>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-top" data-reveal-delay="200">
                <div className="tiles-item-inner has-shadow">
                  <div className="pricing-item-content">
                    <div className="pricing-item-header pb-16 mb-24">
                      <div className="pricing-item-price mb-4">
                        <span className="pricing-item-price-currency h2 text-color-low">
                          {this.getPricingData(this.state.priceOutput.plan2, 0)}
                        </span>
                        <span className="pricing-item-price-amount h1">
                          {this.getPricingData(this.state.priceOutput.plan2, 1)}  
                        </span>
                      </div>
                      <div className="text-color-low text-xs">
                      {this.getPricingData(this.state.priceOutput.plan2, 2)}
                      </div>
                    </div>
                    <div className="pricing-item-features mb-40">
                      <div className="pricing-item-features-title text-xs fw-700 text-color-high mb-24">
                        The site of the company
                      </div>
                      <ul className="pricing-item-features-list list-reset text-xs mb-32">
                        <li className="is-checked">Filling 10 pages with content</li>
                        <li className="is-checked">Transferring a website to hosting</li>
                        <li className="is-checked">Transferring the site to your hosting</li>
                        <li className="is-checked">Free setup and installation of metrics</li>
                        <li>Support is free for the first month</li>
                      </ul>
                    </div>
                  </div>
                  <div className="pricing-item-cta mb-8">
                    <Button tag="a" color="primary" wide href="/signup/">To order</Button>
                  </div>
                </div>
              </div>

              <div className="tiles-item reveal-from-top" data-reveal-delay="200">
                <div className="tiles-item-inner has-shadow">
                  <div className="pricing-item-content">
                    <div className="pricing-item-header pb-16 mb-24">
                      <div className="pricing-item-price mb-4">
                        <span className="pricing-item-price-currency h2 text-color-low">
                          {this.getPricingData(this.state.priceOutput.plan3, 0)}
                        </span>
                        <span className="pricing-item-price-amount h1">
                          {this.getPricingData(this.state.priceOutput.plan3, 1)}  
                        </span>
                      </div>
                      <div className="text-color-low text-xs">
                      {this.getPricingData(this.state.priceOutput.plan3, 2)}
                      </div>
                    </div>
                    <div className="pricing-item-features mb-40">
                      <div className="pricing-item-features-title text-xs fw-700 text-color-high mb-24">
                        Online store
                      </div>
                      <ul className="pricing-item-features-list list-reset text-xs mb-32">
                        <li className="is-checked">Filling all pages with content</li>
                        <li className="is-checked">Transferring a website to hosting</li>
                        <li className="is-checked">Transferring the site to your hosting</li>
                        <li className="is-checked">Free setup and installation of metrics</li>
                        <li className="is-checked">Support is free for the first month</li>
                      </ul>
                    </div>
                  </div>
                  <div className="pricing-item-cta mb-8">
                    <Button tag="a" color="primary" wide href="/signup/">To order</Button>
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

Pricing.propTypes = propTypes;
Pricing.defaultProps = defaultProps;

export default Pricing;