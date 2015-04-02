var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <section className='DescriptionSection page-section'>
        <div className='text'>
          <h2 className='section title'>Educate Yourself</h2>
          <p className='description'> This Spring, 200 college hackers will gather at
          Mary Gates Hall to build<br/> the next generation of innovative software and hardware hacks.</p>
        </div>
        <img className='trees' src='images/trees.svg' />
      </section>
    );
  }
});
