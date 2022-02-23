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

class Team extends React.Component {

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
      'team section center-content',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'team-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const tilesClasses = classNames(
      'tiles-wrap',
      pushLeft && 'push-left'
    );

    const sectionHeader = {
      title: 'Company history.',
      paragraph: 'The companys history Our Web studio opened in January 2016 (the site domain was: Veb-Studija.by). This decision was made by a team of freelancers who have been working together for more than one year, solving interesting tasks together, making high-quality projects. Not many people knew us, everyone who worked with us remained friends, colleagues. Our project was created in order to help your business grow, and we do our favorite hobby!'
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content reveal-from-top" />
            <div className={tilesClasses}>

              <div className="tiles-item">
                <div className="tiles-item-inner">
                  <div className="team-item-header">
                    <div className="team-item-image mb-24 illustration-element-07 reveal-from-top" data-reveal-container=".tiles-item">
                      <Image
                        src={require('./../../assets/images/team-member-01.jpg')}
                        alt="Team member 01"
                        width={180}
                        height={180} />
                    </div>
                  </div>
                  <div className="team-item-content">
                      <h5 className="team-item-name mt-0 mb-4 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="100">
                          Andrew Shilenkov
                      </h5>
                      <div className="team-item-role text-xxs tt-u fw-700 text-color-secondary mb-8 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="200">
                          Founder & Sales manager
                      </div>
                      <p className="m-0 text-sm reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="300">
                      </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item">
                <div className="tiles-item-inner">
                  <div className="team-item-header">
                    <div className="team-item-image mb-24 illustration-element-05 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="100">
                      <Image
                        src={require('./../../assets/images/team-member-02.jpg')}
                        alt="Team member 02"
                        width={180}
                        height={180} />
                    </div>
                  </div>
                  <div className="team-item-content">
                      <h5 className="team-item-name mt-0 mb-4 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="200">
                        Alex Shilenkov
                      </h5>
                      <div className="team-item-role text-xxs tt-u fw-700 text-color-secondary mb-8 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="300">
                        PO & Front-end developer
                      </div>
                      <p className="m-0 text-sm reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="400">
                      </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item">
                <div className="tiles-item-inner">
                  <div className="team-item-header">
                    <div className="team-item-image mb-24 illustration-element-05 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="200">
                      <Image
                        src={require('./../../assets/images/team-member-03.jpg')}
                        alt="Team member 03"
                        width={180}
                        height={180} />
                    </div>
                  </div>
                  <div className="team-item-content">
                      <h5 className="team-item-name mt-0 mb-4 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="300">
                          Alex Petrovich
                      </h5>
                      <div className="team-item-role text-xxs tt-u fw-700 text-color-secondary mb-8 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="400">
                          CTO & Back-end developer
                      </div>
                      <p className="m-0 text-sm reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="500">
                      </p>
                  </div>
                </div>
              </div>

              
              <div className="tiles-item">
                <div className="tiles-item-inner">
                  <div className="team-item-header">
                    <div className="team-item-image mb-24 illustration-element-05 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="200">
                      <Image
                        src={require('./../../assets/images/team-member-04.jpg')}
                        alt="Team member 04"
                        width={180}
                        height={180} />
                    </div>
                  </div>
                  <div className="team-item-content">
                      <h5 className="team-item-name mt-0 mb-4 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="300">
                          Ilyi Vinikov
                      </h5>
                      <div className="team-item-role text-xxs tt-u fw-700 text-color-secondary mb-8 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="400">
                          Co-founder & Team Lead
                      </div>
                      <p className="m-0 text-sm reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="500">
                      </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item">
                <div className="tiles-item-inner">
                  <div className="team-item-header">
                    <div className="team-item-image mb-24 illustration-element-05 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="200">
                      <Image
                        src={require('./../../assets/images/team-member-06.jpg')}
                        alt="Team member 06"
                        width={180}
                        height={180} />
                    </div>
                  </div>
                  <div className="team-item-content">
                      <h5 className="team-item-name mt-0 mb-4 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="300">
                        Vladimir Gorelko
                      </h5>
                      <div className="team-item-role text-xxs tt-u fw-700 text-color-secondary mb-8 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="400">
                        Java Developer
                      </div>
                      <p className="m-0 text-sm reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="500">
                      </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item">
                <div className="tiles-item-inner">
                  <div className="team-item-header">
                    <div className="team-item-image mb-24 illustration-element-06 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="200">
                      <Image
                        src={require('./../../assets/images/team-member-05.jpg')}
                        alt="Team member 05"
                        width={180}
                        height={180} />
                    </div>
                  </div>
                  <div className="team-item-content">
                      <h5 className="team-item-name mt-0 mb-4 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="300">
                        Andrey Kobyak
                      </h5>
                      <div className="team-item-role text-xxs tt-u fw-700 text-color-secondary mb-8 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="400">
                        Web Developer
                      </div>
                      <p className="m-0 text-sm reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="500">
                      </p>
                  </div>
                </div>
              </div>
{/*
              <div className="tiles-item">
                <div className="tiles-item-inner">
                  <div className="team-item-header">
                    <div className="team-item-image mb-24 illustration-element-07 reveal-from-top" data-reveal-container=".tiles-item">
                      <Image
                        src={require('./../../assets/images/team-member-04.jpg')}
                        alt="Team member 04"
                        width={180}
                        height={180} />
                    </div>
                  </div>
                  <div className="team-item-content">
                      <h5 className="team-item-name mt-0 mb-4 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="100">
                          Clifford Kennedy
                      </h5>
                      <div className="team-item-role text-xxs tt-u fw-700 text-color-secondary mb-8 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="200">
                          CEO & Co-Founder
                      </div>
                      <p className="m-0 text-sm reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="300">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                      </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item">
                <div className="tiles-item-inner">
                  <div className="team-item-header">
                    <div className="team-item-image mb-24 illustration-element-08 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="100">
                      <Image
                        src={require('./../../assets/images/team-member-05.jpg')}
                        alt="Team member 05"
                        width={180}
                        height={180} />
                    </div>
                  </div>
                  <div className="team-item-content">
                      <h5 className="team-item-name mt-0 mb-4 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="200">
                          Clifford Kennedy
                      </h5>
                      <div className="team-item-role text-xxs tt-u fw-700 text-color-secondary mb-8 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="300">
                          CEO & Co-Founder
                      </div>
                      <p className="m-0 text-sm reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="400">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                      </p>
                  </div>
                </div>
              </div>

              <div className="tiles-item">
                <div className="tiles-item-inner">
                  <div className="team-item-header">
                    <div className="team-item-image mb-24 illustration-element-04 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="200">
                      <Image
                        src={require('./../../assets/images/team-member-06.jpg')}
                        alt="Team member 06"
                        width={180}
                        height={180} />
                    </div>
                  </div>
                  <div className="team-item-content">
                      <h5 className="team-item-name mt-0 mb-4 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="300">
                          Clifford Kennedy
                      </h5>
                      <div className="team-item-role text-xxs tt-u fw-700 text-color-secondary mb-8 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="400">
                          CEO & Co-Founder
                      </div>
                      <p className="m-0 text-sm reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="500">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                      </p>
                  </div>
                </div>
              </div>*/}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Team.propTypes = propTypes;
Team.defaultProps = defaultProps;

export default Team;