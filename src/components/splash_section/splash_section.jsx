var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <section className='SplashSection page-section'>
        <div className='center'>
          <img className='logo' src='images/logo.svg' />
          <h3 className='subtitle'>UW, Seattle</h3>
          <h5 className='subtitle'>May 17-18, 2015</h5>
        </div>
        <ul className='clouds'>
          <img className='cloud form1' src='images/cloud1.svg' />
          <img className='cloud form2' src='images/cloud2.svg' />
          <img className='cloud form3' src='images/cloud3.svg' />
        </ul>
        <ul className='planes'></ul>
        <img className='skyline' src='images/skyline.svg' />
      </section>
    );
  }
});
