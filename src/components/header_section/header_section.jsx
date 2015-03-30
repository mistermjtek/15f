var React = require('react');
var Button = require('../button/button.jsx');

module.exports = React.createClass({
  render: function() {
    return (
      <section className='HeaderSection page-section'>
        <img src='images/logo.png' />
        <nav>
          <ul className='nav-buttons'>
            <li><Button content='Register!' /></li>
            <li><Button content='Schedule' /></li>
            <li><Button content='Info' /></li>
            <li><Button content='Sponsors' /></li>
          </ul>
        </nav>
        <ul className='social-buttons'>
          <li><Button icon='mail' /></li>
          <li><Button icon='facebook' /></li>
          <li><Button icon='twitter' /></li>
        </ul>
      </section>
    );
  }
});
