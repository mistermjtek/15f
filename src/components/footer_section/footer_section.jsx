var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <section className='FooterSection page-section'>
        <div className='main footer'>
          <div className='col organizers'>
            <h5 className='title'>Spring 2015 DubHacks Organizers</h5>
            <ul className='organizers-list'>
              <li>Grant Timmerman</li>
              <li>Skyler Kidd</li>
              <li>Mahir Kothary</li>
              <li>Naomi Musgrave</li>
              <li>Navid Azodi</li>
              <li>David Coven</li>
              <li>Karan Goel</li>
              <li>Anwell Wang</li>
              <li>Christopher Su</li>
              <li>Lucas Colusso</li>
              <li>Malia Imayama</li>
            </ul>
          </div>
          <div className='col logo'>
            <img className='logo' src='/images/logo.svg' />
          </div>
          <div className='col links'>
            <h5 className='title'>Links</h5>
            <ul className='links-list'>
              <li><a href='http://hackcodeofconduct.org/dubhacks_f14'>Code of Conduct</a></li>
              <li><a href='contact@dubhacks.co'>Contact Us</a></li>
              <li><a href='dubhacks.pr.co'>Press</a></li>
            </ul>
          </div>
        </div>
        <div className='sub footer'>
          <div className='love'>Made with <span className='heart'>❤</span> in Seattle</div>
          <p className='TOS'>DubHacks is a student event. Our sponsors are sponsors of the event and not of the University of Washington.<br/>There is no implied endorsement of these companies by the University.</p>
        </div>
      </section>
    );
  }
});
