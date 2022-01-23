import React from 'react';
// import section header
import SectionHeader from '../components/sections/partials/SectionHeader';
// import sections
import HeroFull from '../components/sections/HeroFull';
import Team from '../components/sections/Team';
import GenericSection from '../components/sections/GenericSection';
import Roadmap from '../components/sections/Roadmap';
// import some required elements
import Accordion from '../components/elements/Accordion';
import AccordionItem from '../components/elements/AccordionItem';

class Secondary extends React.Component {

  state = {
    demoModalActive: false
  }

  openModal = (e) => {
    e.preventDefault();
    this.setState({ demoModalActive: true });
  }

  closeModal = (e) => {
    e.preventDefault();
    this.setState({ demoModalActive: false });
  }

  render() {
    const genericSection01Header = {
      title: 'Why choose us?'
    }

    return (
      <React.Fragment>
        <HeroFull className="illustration-section-02" />
        <Team />
        <GenericSection topDivider className="illustration-section-06">
          <div className="container-xs">
            <SectionHeader data={genericSection01Header} className="center-content" />
            <Accordion>
              <AccordionItem title="WE ARE WORKING ON THE RESULT!" active>
                The main thing is the result, a high-quality project without additional investments for development in the future.
              </AccordionItem>
              <AccordionItem title="WE WORK ONLY IN YOUR INTERESTS!">
                We delve into your business processes, we select the most ideal solution!
              </AccordionItem>
              <AccordionItem title="AFFORDABLE AND HIGH QUALITY!">
                We will find the optimal solution for you and make a work plan!
              </AccordionItem>
            </Accordion>
          </div>
        </GenericSection>

        <Roadmap topDivider />
      </React.Fragment>
    );
  }
}

export default Secondary;