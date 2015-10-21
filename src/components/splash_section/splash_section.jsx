var React = require('react');
var Button = require('../button/button.jsx');

module.exports = React.createClass({
  render: function() {
    var d = new Date();
  	var n = d.getHours();
    var time = "SplashSection page-section";
    var sunAndMoon = "";
  	if (n >= 20 || n < 6) {
  	  time += " night";
      sunAndMoon = "images/moon.svg";
    }
  	else if (n > 16 && n < 20) {
  	  time += " evening";
      sunAndMoon = "images/sun.svg";
    }
  	else {
  	  time += " morning";
      sunAndMoon = "images/sun.svg";
    }

    return (
      <section className={time}>
        <img className='skyline' src='images/skyline.png' />
        <div className='center'>
          <h1 className='subtitle'>Michael Jeffrey Wu</h1>
          <hr></hr>
          <h3 className='subtitle date'>Front End Developer</h3>
          <h4 className='subtitle location'>Based in Los Angeles</h4>
          <h5 className='subtitle applications'>Raised in the Silicon Valley</h5>
        </div>
        <ul className='clouds'>
          <img className='sun' src={sunAndMoon}/>
          <img className='cloud form1' src='images/cloud1.svg' />
          <img className='cloud form2' src='images/cloud2.svg' />
          <img className='cloud form3' src='images/cloud3.svg' />
        </ul>
        <ul className='planes'>
          <img className='plane' src='images/plane.svg' />
        </ul>
      </section>
    );
  }
});
