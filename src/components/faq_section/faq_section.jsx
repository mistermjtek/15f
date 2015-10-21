var React = require('react');

module.exports = React.createClass({
  propTypes: {
    experience: React.PropTypes.object
  },

  getDefaultProps: function() {
    return {
      experience: {
        1: [{
          company: 'Adventure Bucket List',
          jobTitle: 'Frontend Developer',
          link: 'http://www.adventurebucketlist.com/',
          date: 'August 2014 - October 2015',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum vel leo et posuere. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam et cursus felis, at sodales nibh. Sed non nunc ultrices, consequat libero mollis, maximus felis. Phasellus justo sapien, consectetur at hendrerit vitae, finibus vitae lacus. '
        }],
        2: [{
          company: 'SynergySuite' ,
          jobTitle: 'Mobile Developer',
          link: 'http://www.synergysuite.com/',
          date: 'June 2014 - July 2015',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum vel leo et posuere. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam et cursus felis, at sodales nibh. Sed non nunc ultrices, consequat libero mollis, maximus felis. Phasellus justo sapien, consectetur at hendrerit vitae, finibus vitae lacus. '
        }],
        3: [{
          company: 'Statim Health' ,
          jobTitle: 'Lead Software Developer',
          link: 'http://www.statimhealth.com/',
          date: 'June 2014 - August 2014',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum vel leo et posuere. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam et cursus felis, at sodales nibh. Sed non nunc ultrices, consequat libero mollis, maximus felis. Phasellus justo sapien, consectetur at hendrerit vitae, finibus vitae lacus. '
        }],
        4: [{
          company: 'Monte Jade Science and Technology' ,
          jobTitle: 'Web Developer',
          link: 'http://www.montejade.org/',
          date: 'January 2014 - April 2014',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum vel leo et posuere. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam et cursus felis, at sodales nibh. Sed non nunc ultrices, consequat libero mollis, maximus felis. Phasellus justo sapien, consectetur at hendrerit vitae, finibus vitae lacus. '
        }]
      }
    };
  },

  render: function() {
    var self = this;
    // Returns the html for a single event
    var getJobInfo = function(jobData) {
      return (
        <div className = 'wd-4'>
          <div className='qa'>
          <h4 className='header'>{jobData.company}</h4>
          <h5 className='date'>{jobData.date}</h5>
          <a href={jobData.link}>{jobData.link}</a>
          </div>
        </div>
      );
    };

    var getJobDescription = function(jobData) {
      return (
        <div className= 'wd-6'>
          <div className='qa'>
          <h4 className='question'>{jobData.jobTitle}</h4>
          <p>{jobData.description}</p>
          </div>
        </div>
      );
    };

    // Returns the list of events for a day
    var getJobTitles = function(jobNumber) {
      var jobInfo = self.props.experience[jobNumber];
      return (
        <div className='row'>
          {jobInfo.map(function(jobInfoData) {
            return getJobInfo(jobInfoData);
          })}
          {jobInfo.map(function(jobInfoData) {
            return getJobDescription(jobInfoData);
          })}
      </div>
      );
    };
    return (
      <section className='FAQSection page-section' id='faq'>
        <h2 className='section title'>Experience</h2>
            {getJobTitles(1)}
            {getJobTitles(2)}
            {getJobTitles(3)}
            {getJobTitles(4)}
      </section>
    );
  }
});
