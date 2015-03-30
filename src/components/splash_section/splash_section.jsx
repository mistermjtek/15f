var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <section className='SplashSection page-section'>
        <div className='center'>
          <img src='images/main-logo.svg' />
          <h3>UW, Seattle</h3>
          <h5>May 17-18, 2015</h5>
        </div>
        <ul className='clouds'></ul>
        <ul classname='planes'></ul>
      </section>
    );
  }
});
