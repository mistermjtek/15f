var React = require('react');

module.exports = React.createClass({
  propTypes: {
    eventsByDay: React.PropTypes.object
  },

  getDefaultProps: function() {
    return {
      eventsByDay: {
        1: [{
          number: 10,
          period: 'am',
          title: 'Check-in'
        }, {
          number: 12,
          period: 'pm',
          title: 'Opening Ceremony'
        }, {
          number: 1,
          period: 'pm',
          title: 'Start Hacking!'
        }, {
          number: 2,
          period: 'pm',
          title: 'Lunch'
        }, {
          number: 7,
          period: 'pm',
          title: 'Dinner'
        }, {
          number: 10,
          period: 'pm',
          title: 'Surprise Activity'
        }],
        2: [{
          number: 12,
          period: 'am',
          title: 'Midnight Snack Attack'
        }, {
          number: 7,
          period: 'am',
          title: 'Breakfast'
        }, {
          number: 11,
          period: 'am',
          title: 'Lunch'
        }, {
          number: 12,
          period: 'pm',
          title: 'Submit Your Hack!'
        }, {
          number: 1,
          period: 'pm',
          title: 'Judging'
        }, {
          number: 3,
          period: 'pm',
          title: 'Closing Ceremony'
        }]
      }
    };
  },

  render: function() {
    var self = this;

    // Returns the html for a single event
    var getEvent = function(eventData) {
      return (
        <li className='event'>
          <time className='time'>
            <div className='number'>{eventData.number}</div>
            <div className='period'>{eventData.period}</div>
          </time>
          <div className='event-title'>{eventData.title}</div>
        </li>
      );
    };

    // Returns the list of events for a day
    var getEvents = function(dayNumber) {
      var events = self.props.eventsByDay[dayNumber];
      return (
        <ul className='events'>
          {events.map(function(eventData) {
            return getEvent(eventData);
          })}
        </ul>
      );
    };

    return (
      <section className='ScheduleSection page-section' id='schedule'>
        <h2 className='section title'>Schedule</h2>
        <ul className='days'>
          <li className='day'>
            <h3 className='day-title'>Saturday, May 16, 2015</h3>
            {getEvents(1)}
          </li>
          <li className='day'>
            <h3 className='day-title'>Sunday, May 17, 2015</h3>
            {getEvents(2)}
          </li>
        </ul>
        <img className='water' src='images/water.svg' />
      </section>
    );
  }
});
