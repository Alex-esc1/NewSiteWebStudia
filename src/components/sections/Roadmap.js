import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Timeline from '../elements/Timeline';
import TimelineItem from '../elements/TimelineItem';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

class Roadmap extends React.Component {

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
      'roadmap section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'roadmap-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const sectionHeader = {
      title: 'Product roadmap',
      paragraph: 'The formation of our company'
    };

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            <Timeline>
              <TimelineItem title="January 2016">
                The start of the web studio
              </TimelineItem>
              <TimelineItem title="July 2016">
                The first major order from an investment company
              </TimelineItem>
              <TimelineItem title="February 2017">
                Creating a box for online auto parts stores
              </TimelineItem>
              <TimelineItem title="February 2018">
                Growth of the customer base, creation of Internet platforms
              </TimelineItem>
              <TimelineItem title="October 2019">
                Creation of a large ecomers project
              </TimelineItem>,
              <TimelineItem title="June 2020">
                Obtaining a Bitrix business partner certificate
              </TimelineItem>
              <TimelineItem title="March 2021">
                Release of mobile applications
              </TimelineItem>
              <TimelineItem title="January 2022">
                Expansion of the team staff
              </TimelineItem>
            </Timeline>
          </div>
        </div>
      </section>
    );
  }
}

Roadmap.propTypes = propTypes;
Roadmap.defaultProps = defaultProps;

export default Roadmap;