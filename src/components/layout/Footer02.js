import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Logo from './partials/Logo';
import FooterNav from './partials/FooterNav';
import FooterSocial from './partials/FooterSocial';

const propTypes = {
  topOuterDivider: PropTypes.bool,
  topDivider: PropTypes.bool
}

const defaultProps = {
  topOuterDivider: false,
  topDivider: false
}

class Footer extends React.Component {

  render() {
    const {
      className,
      topOuterDivider,
      topDivider,
      ...props
    } = this.props;

    const classes = classNames(
      'site-footer invert-color',
      topOuterDivider && 'has-top-divider',
      className
    );

    return (
      <footer
        {...props}
        className={classes}
      >
        <div className="container">
          <div className={
            classNames(
              'site-footer-inner',
              topDivider && 'has-top-divider'
            )}>
            <div className="footer-top text-xxs">
              <div className="footer-blocks">
                <div className="footer-block">
                  <Logo className="mb-16" />
                  <div className="footer-copyright">&copy; 2022, Sole owner Shilenkov A.A. UNP193374200</div>
                </div>
                <div className="footer-block">
                  <div className="footer-block-title">Company</div>
                  <ul className="list-reset">
                    <li>
                      <a href="/">Main</a>
                    </li>
                  </ul>
                </div>
                <div className="footer-block">
                  <div className="footer-block-title">How to contact us</div>
                  <ul className="list-reset">
                    <li>
                      <a href="/signup/">Contacts</a>
                    </li>
                  </ul>
                </div>
                <div className="footer-block">
                  <div className="footer-block-title">Docs</div>
                  <ul className="list-reset mb-0">
                    <li>
                      <a href="/login/">Bitrix partner</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-bottom space-between center-content-mobile text-xxs">
              <FooterNav />
              <FooterSocial />
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;