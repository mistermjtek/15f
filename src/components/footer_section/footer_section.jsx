var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <section className='FooterSection page-section'>
        <div className='col organizers'>
          <h5 className='title'>Spring 2015 DubHacks Organizers</h5>
          <ul className='organizers'>
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
        <div className='col'>
          <h5 className='links'>Links</h5>
          <ul>
            <li><a href='http://hackcodeofconduct.org/dubhacks_f14'>Code of Conduct</a></li>
            <li><a href='dubhacks.pr.co'>Press</a></li>
            <li><a href='contact@dubhacks.co'>Contact Us</a></li>
          </ul>
        </div>
        <div className='col'>
          <span>Made with ❤ in Seattle</span>
        </div>
      </section>
    );
  }
});
