var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <section className='SponsorSection page-section'>
        <h2 className='section title'>Our Sponsors</h2>
        <h5 className='subtitle'>A huge thanks to all our amazing DubHacks sponsors! Become a <a href='/sponsor'>sponsor</a>.</h5>
        <ul className='standard'>
          <li>Microsoft</li>
          <li>Amazon</li>
        </ul>
        <ul className='lite'>
          <li>Startup 1</li>
          <li>Startup 2</li>
        </ul>
      </section>
    );
  }
});
