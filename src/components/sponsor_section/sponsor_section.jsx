var React = require('react');

module.exports = React.createClass({
  render: function() {


    return (
      <section className='SponsorSection page-section' id='sponsor'>
        <h2 className='section title'>Sponsors</h2>
        <div className='tiers'>
          <ul className='platinum'>
            <a href="http://microsoft.com" target="_blank"><img ref='img' src='images/company_logos/microsoft.png' /></a>
          </ul>
          <ul className='gold'>
            <a href="http://qumulo.com/" target="_blank"><img ref='img' src='images/company_logos/qumulo_color.png' /></a>
            <a href="http://concur.com" target="_blank"><img ref='img' src='images/company_logos/logos_concur_horizontal.png' /></a>
            <a href="http://ibm.com" target="_blank"><img ref='img' src='images/company_logos/ibm_blue.jpg' /></a>
            <a href="http://developers.facebook.com" target="_blank"><img ref='img' className='extraSmall' src='images/company_logos/facebook.png' /></a>
            <a href="https://developers.google.com/" target="_blank"><img ref='img' src='images/company_logos/google.png' /></a>
          </ul>
          <ul className='silver'>
            <a href="http://zillow.com" target="_blank"><img ref='img' src='images/company_logos/ZillowLogo.png' /></a>
            <a href="http://libertymutual.com" target="_blank"><img ref='img' src='images/company_logos/libertymutual.png' /></a>
          </ul>
          <ul className='bronze'>
            <a href="http://epic.com" target="_blank"><img ref='img' src='images/company_logos/epic_logo.jpg' /></a>
            <a href="http://extrahop.com" target="_blank"><img ref='img' className='extraLarge' src='images/company_logos/extrahop.png' /></a>
            <a href="http://algorithmia.com" target="_blank"><img ref='img' className='extraLarge' src='images/company_logos/algorithmia_textonly.svg' /></a>
          </ul>
          <ul className='partners'>
            <h2 className='section title'>Partners</h2>
            <a href="http://mlh.io" target="_blank"><img ref='img' src='images/company_logos/mlh.png' /></a>
          </ul>
        </div>
      </section>
    );
  }
});
