var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <section className='DescriptionSection page-section'>
        <div className='text'>
          <h2 className='section title'>Educate Yourself</h2>
          <p className='description'>This spring, join 200 other college hackers at Mary Gates Hall to build the next generation of innovative software and hardware hacks. This time, we're featuring a <strong>50-50 female/male ratio</strong> and focusing on bringing <strong>mentorship and resources</strong> to new developers, designers, and makers.</p>
        </div>
        <img className='trees' src='images/trees.svg' />
      </section>
    );
  }
});
