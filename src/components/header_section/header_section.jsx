var React = require('react');
var Button = require('../button/button.jsx');

module.exports = React.createClass({
  scrollToSection: function(sectionName) {
    return function() {
      console.log('hi');
    };
  },

  render: function() {
    return (
      <section className='HeaderSection page-section'>
        <img className='logo' src='images/logo-small.svg' />
        <nav className='nav'>
          <ul className='nav-buttons'>
            <a target='_blank' href='https://dubhacks15s.typeform.com/to/stUU5c'><li className='register-button'><Button content='Apply!' flavor={Button.flavors.solid} /></li></a>
            <li onClick={this.scrollToSection('schedule')}><Button content='Schedule' /></li>
            <li onClick={this.scrollToSection('faq')}><Button content='FAQ' /></li>
            <li onClick={this.scrollToSection('sponsor')}><Button content='Sponsors' /></li>
          </ul>
        </nav>
        <ul className='social-buttons'>
          <li><a href='info@dubhacks.co'><Button icon='mail' /></a></li>
          <li><a href='http://www.facebook.com/uwhacks'><Button icon='facebook' /></a></li>
          <li><a href='http://www.twitter.com/dubhacks'><Button icon='twitter' /></a></li>
        </ul>
      </section>
    );
  }
});
