import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import { Link } from 'react-router-dom';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

class SignupForm extends React.Component {

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
      'signin section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'signin-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const sectionHeader = {
      title: 'Contacts',
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader tag="h1" data={sectionHeader} className="center-content" />
            <div className="tiles-wrap">
              <div className="tiles-item">
                <div className="tiles-item-inner">
                <div className="mb-12">
                  Phone: <a href="tel:+375333423230"> +375 33 342 3230</a>
                  </div>
                  <div className="mb-12">
                  Telegram: <a href="https://t.me/alex_esc1"> Click Here</a>
                  </div>
                  <div className="mb-12">
                  Viber: <a href="viber://chat?number=%2B375296829673"> Click Here</a>
                  </div>
                  <div className="mb-12">
                  Email:<a href="mailto:info@i-next.by"> info@i-next.by</a>
                  </div>
                  <div className="signin-bottom has-top-divider">
                    <div className="pt-32 text-xs center-content text-color-low">
                      <Link to="/" className="func-link">Back</Link>
                    </div>
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

SignupForm.propTypes = propTypes;
SignupForm.defaultProps = defaultProps;

export default SignupForm;