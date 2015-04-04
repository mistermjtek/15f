var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <section className='SponsorSection page-section' id='sponsor'>
        <h2 className='section title'>Our Sponsors</h2>
        <h5 className='subtitle'>A huge thanks to all our amazing DubHacks sponsors! Become a <a href='/sponsor'>sponsor</a>.</h5>
        <div className='tiers'>
          <ul className='standard'>
            <a href=''><li>Microsoft</li></a>
            <a href=''><li>Amazon</li></a>
          </ul>
          <ul className='lite'>
            <a href=''><li>Startup 1</li></a>
            <a href=''><li>Startup 2</li></a>
          </ul>
        </div>
      </section>
    );
  }
});
