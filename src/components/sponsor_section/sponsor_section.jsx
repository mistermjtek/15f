var React = require('react');
var Bubble = require('../bubble/bubble.jsx');

module.exports = React.createClass({
  render: function() {

    var bubbleOrigin = {
      right: '18%',
      bottom: '3%'
    };

    return (
      <section className='SponsorSection page-section' id='sponsor'>
        <h2 className='section title'>Our Sponsors</h2>
        <h5 className='subtitle'>A huge thanks to all our amazing DubHacks sponsors! <a href='mailto:sponsor@dubhacks.co' className='sponsor-cta'>Become a sponsor</a>.</h5>
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
        <div className='bubbles'>
        </div>
        <img className='anchor' src='images/anchor.svg' />
      </section>
    );
    // <Bubble origin={bubbleOrigin} />
  }
});
