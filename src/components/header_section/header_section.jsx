var React = require('react');
var Button = require('../button/button.jsx');
var smoothScroll = require('smoothscroll');

module.exports = React.createClass({

  scrollToSection: function(sectionName) {
    return function() {
      // window.scrollTo(0, 0);
      // window.scrollTo(0, document.getElementById(sectionName).getBoundingClientRect().top - 60);
      smoothScroll(document.getElementById(sectionName));
    };
  },

  render: function() {
    var d = new Date();
    var n = d.getHours();
    var time = "HeaderSection page-section";
    var dayTime = "";
    if (n >= 20 || n < 6) {
      time += " night";
      dayTime = "night-nav";
    }
    else if (n > 16 && n < 20) {
      time += " evening";
      dayTime = "evening-nav";
    }
    else {
      time += " morning";
      dayTime = "morning-nav";
    }
// <a target='_blank' href='/apply'><li className='register-button'><Button content='Apply!' flavor={Button.flavors.solid} /></li></a>
// <a target='_blank' href='/mentor'><li className='register-button'><Button content='Mentor!' flavor={Button.flavors.solid} /></li></a>
// <a target='_blank' href='/volunteer'><li className='register-button'><Button content='Volunteer!' flavor={Button.flavors.solid} /></li></a>
    return (
      <section className={time}>
        <img className='logo' src='images/m-logo.png' />
        <nav className='nav'>
          <ul className='nav-buttons'>
              <li onClick={this.scrollToSection('schedule')}><Button day={dayTime} content='Skills' /></li>
              <li onClick={this.scrollToSection('faq')}><Button day={dayTime} content='Experience' /></li>
          </ul>
        </nav>
        <ul className='social-buttons'>
          <li><a href='mailto:michaeljeffreywu@gmail.com'><Button icon='mail' /></a></li>
          <li><a href='http://www.facebook.com/l1tethen1te'><Button icon='facebook' /></a></li>
          <li><a href='http://www.twitter.com/mistermjtek'><Button icon='twitter' /></a></li>
        </ul>
      </section>
    );
  }
});
