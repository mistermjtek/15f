var React = require('react');

module.exports = React.createClass({
  render: function() {


    return (
      <section className='SponsorSection page-section' id='sponsor'>
        <h2 className='section title'>Sponsors</h2>
        <div className='tiers'>
          <ul className='platinum'>
            <img ref='img' src='images/company_logos/microsoft.png' />
          </ul>
          <ul className='gold'>
            <img ref='img' src='images/company_logos/qumulo_color.png' />
            <img ref='img' src='images/company_logos/logos_concur_horizontal.png' />
            <img ref='img' src='images/company_logos/ibm_logos/ibm_blue.jpg' />
          </ul>
          <ul className='silver'>
            <img ref='img' src='images/company_logos/ZillowLogo.png' />
          </ul>
          <ul className='bronze'>
            <img ref='img' src='images/company_logos/epic_logo.jpg' />
            <img ref='img' src='images/company_logos/extrahop.png' />
            <img ref='img' src='images/company_logos/algorithmia_textonly.svg' />
          </ul>
          <ul className='partners'>
            <li>MLH</li>
          </ul>
        </div>
      </section>
    );
  }
});
