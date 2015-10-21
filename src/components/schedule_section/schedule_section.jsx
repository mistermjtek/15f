var Boat = require('../boat/boat.jsx');
var React = require('react');

module.exports = React.createClass({
  propTypes: {
    eventsByDay: React.PropTypes.object
  },

  getDefaultProps: function() {
    return {
      eventsByDay: {
        1: [{
          path: 'images/angularJS.png',
          title: 'AngularJS'
        }, {
          path: 'images/html5.png',
          title: 'HTML5'
        }, {
          path: 'images/css3.png',
          title: 'CSS3'
        }, {
          path: 'images/js.png',
          title: 'Javascript'
        }, {
          path: 'images/reactJS.png',
          title: 'ReactJS'
        }],
        2: [{
          path: 'images/mongoDB.png',
          title: 'MongoDB'
        }, {
          path: 'images/nodeJS.png',
          title: 'NodeJS'
        }, {
          path: 'images/java.png',
          title: 'Java'
        }, {
          path: 'images/sass.png',
          title: 'Sass'
        }, {
          path: 'images/git.png',
          title: 'Git'
        }],
        3: [{
          path: 8,
          title: 'Ionic'
        }, {
          path: 12,
          title: 'Livescript'
        }, {
          path: 5,
          title: 'Phonegap'
        }, {
          path: 'images/stylus.png',
          title: 'Stylus'
        }, {
          path: 'images/d3.png',
          title: 'D3.js'
        }]
      }
    };
  },

  render: function() {
    var self = this;

    // Returns the html for a single event
    var getEvent = function(eventData) {
      return (
        <li className='event' key={eventData.title}>
            <img src={eventData.path} className='logo'/>
          <div className='event-title'>{eventData.title}</div>
        </li>
      );
    };

    // Returns the list of events for a day
    var getEvents = function(daypath) {
      var events = self.props.eventsByDay[daypath];
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
        <h2 className='section title'>Skills</h2>
        <ul className='days'>
          <li className='day'>
            {getEvents(1)}
          </li>
          <li className='day'>
            {getEvents(2)}
          </li>
          <li className='day'>
            {getEvents(3)}
          </li>
        </ul>
        <Boat />
        <img className='sea' src='images/sea.svg' />
        <img className='sea' src='images/sea.svg' />
      </section>
    );
  }
});
