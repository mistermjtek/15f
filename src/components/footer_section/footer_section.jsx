var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <section className='FooterSection page-section'>
        <div className='sub footer'>
          <a href="/resume.pdf">View My Resume</a>
          <div className='love'>Made with <span className='heart'>❤</span> in Los Angeles</div>
          <p className='TOS'>Design inspired by DubHacks, developed by Michael Jeffrey Wu</p>
        </div>
      </section>
    );
  }
});
