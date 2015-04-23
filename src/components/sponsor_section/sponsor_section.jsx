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
        <h2 className='section title'>Previous Sponsors</h2>
        <ul className='prev-sponsors'>
          <li>Microsoft</li>
          <li>Qumulo</li>
          <li>Tata Consultancy Services</li>
          <li>Amazon</li>
          <li>Evidence</li>
          <li>Google</li>
          <li>Cisco</li>
          <li>Dropbox</li>
          <li>Facebook</li>
          <li>C4C</li>
          <li>Liberty Mutual</li>
          <li>New Relic</li>
          <li>Slice</li>
          <li>Whitepages</li>
          <li>Zillow</li>
          <li>Codeship</li>
          <li>Extrahop</li>
          <li>Impact HUB</li>
          <li>Intel</li>
          <li>Leap Motion</li>
          <li>Hackster.io</li>
          <li>Intel Mashery</li>
          <li>Mojio</li>
          <li>Pebble</li>
          <li>Sendgrid</li>
          <li>Twilio</li>
          <li>Ziggeo</li>
          <li>MLH</li>
          <li>STF</li>
          <li>UW IT</li>
        </ul>
        <h5 className='subtitle'>A huge thanks to all our amazing DubHacks sponsors! Interested in sponsoring?<br/>Email us at <a href='mailto:sponsor@dubhacks.co' className='sponsor-cta'>sponsor@dubhacks.co</a>.</h5>
        <div className='tiers'>
          <ul className='standard'>
          </ul>
          <ul className='lite'>
          </ul>
        </div>
        <div className='bubbles'>
          <Bubble origin={bubbleOrigin} />
          <Bubble origin={bubbleOrigin} />
          <Bubble origin={bubbleOrigin} />
          <Bubble origin={bubbleOrigin} />
          <Bubble origin={bubbleOrigin} />
          <Bubble origin={bubbleOrigin} />
        </div>
        <img className='anchor' src='images/anchor.svg' />
      </section>
    );
  }
});
