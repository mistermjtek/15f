var React = require('react');

module.exports = React.createClass({
  propTypes: {
    experience: React.PropTypes.object
  },

  getDefaultProps: function() {
    return {
      experience: {
        1: [{
          company: 'Spotlike' ,
          jobTitle: 'Lead Frontend Developer',
          link: 'http://www.spotlike.com/',
          date: 'February 2016 - Present',
          description: 'Designing and implementing a ranking-based social networking web application. Converting the application from jQuery to AngularJS and using task managers like Gulp for a clean and secure codebase.'
        }],
        2: [{
          company: 'SmileyFace Studio' ,
          jobTitle: 'Founder & CTO',
          link: 'http://www.smileyface.space/',
          date: 'February 2016 - Present',
          description: 'Started a disruptive design and development studio focused on bringing beauty to the world in unconventional mediums. Generated leads and secured a consistent revenue model. Hired, screened, and managed a team of 5 designers and developers. Work ranges from web and mobile designs to virtual reality and visual projections.'
        }],
        3: [{
          company: 'Adventure Bucket List',
          jobTitle: 'Frontend Developer',
          link: 'http://www.adventurebucketlist.com/',
          date: 'August 2014 - November 2015',
          description: 'Developed the MVP front-end web application for clients to begin using to process transactions. Built out the travel operator dashboard for clients to manage their customers, metrics and activities. Used AngularJS, REST, NodeJS, MongoDB, Jade, LiveScript, Sass, Material Design to create a scalable product. Integrated the application widget to several travel operators around the world. Started off as an intern and promoted to a full-time position. Led a small team of developers & designers and tracked their workflow via Github & Trello.'
        }],
        4: [{
          company: 'SynergySuite' ,
          jobTitle: 'Mobile Developer',
          link: 'http://www.synergysuite.com/',
          date: 'June 2014 - July 2015',
          description: 'Built an enterprise mobile app from the ground up deployed to all devices using Cordova/Phonegap, Ionic, Angular.js. Created interactive graphs using D3.js for clients to view analytics. Joined the team as an intern and promoted to a year-round part-time position. Discussed with customers about feature requests and bug fixes. Released private beta mobile app onto Google Play Store and App Store.'
        }],
        5: [{
          company: 'Statim Health' ,
          jobTitle: 'Interim CTO',
          link: 'http://www.statimhealth.com/',
          date: 'June 2014 - August 2014',
          description: 'Created a website demo designed to pitch to venture capitalists in the Silicon Valley. Redesigned and developed the pending landing page.'
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
            {getJobTitles(5)}
      </section>
    );
  }
});
