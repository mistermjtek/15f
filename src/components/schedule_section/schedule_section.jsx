var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <section className='ScheduleSection page-section'>
        <h2 className='title'>Event Schedule</h2>
        <ul className='days'>
          <li className='day'>
            <h3 className='day-title'>Saturday, May 16, 2015</h3>
            <ul className='times'></ul>
          </li>
          <li className='day'>
            <h3 className='day-title'>Sunday, May 17, 2015</h3>
            <ul className='times'></ul>
          </li>
        </ul>
      </section>
    );
  }
});
