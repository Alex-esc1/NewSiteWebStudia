import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Image from '../elements/Image';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

class Clients extends React.Component {

  render() {
    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'clients section reveal-fade',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'clients-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div
            className={innerClasses}
          >
            <ul className="list-reset">
              <li className="reveal-rotate-from-left">
                <Image
                  src={require('./../../assets/images/1.png')}
                  alt="Client 01"
                  width={183}
                  height={75} />
              </li>
              <li className="reveal-rotate-from-left" data-reveal-delay="150">
                <Image
                  src={require('./../../assets/images/2.png')}
                  alt="Client 02"
                  width={183}
                  height={43} />
              </li>
              <li className="reveal-rotate-from-left" data-reveal-delay="300">
                <Image
                  src={require('./../../assets/images/3.png')}
                  alt="Client 03"
                  width={183}
                  height={47} />
              </li>
              <li className="reveal-rotate-from-left" data-reveal-delay="600">
                <Image
                  src={require('./../../assets/images/4.png')}
                  alt="Client 04"
                  width={183}
                  height={59} />
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

Clients.propTypes = propTypes;
Clients.defaultProps = defaultProps;

export default Clients;