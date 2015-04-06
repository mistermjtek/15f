var React = require('react');

module.exports = React.createClass({
  propTypes: {
    // The start position of the bubble
    origin: React.PropTypes.shape({
      bottom: React.PropTypes.string,
      right: React.PropTypes.string
    })
  },

  componentDidUpdate: function() {
    var domNode = this.refs.img.getDOMNode();
    domNode.style.right = this.props.right;
    domNode.style.bottom = this.props.bottom;
  },

  render: function() {
    return (
      <img ref='img' className='Bubble' src='images/bubble.svg' />
    );
  }
});
