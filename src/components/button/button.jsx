var React = require('react');

module.exports = React.createClass({
  propTypes: {
    content: React.PropTypes.string,
    icon: React.PropTypes.string
  },

  render: function() {
    return (
      <div className='Button'>
        {this.props.icon ?
          <img src={'./images/icons/' + this.props.icon} />
        : ''}
        {this.props.content ? this.props.content : ''}
      </div>
    );
  }
});
