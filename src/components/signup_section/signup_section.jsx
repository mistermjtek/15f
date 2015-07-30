var React = require('react');

var MailChimpStyles = {
    hide: {
        display: 'none'
    },
    etc: {
      position: 'absolute',
      left: '-5000px'
    }
  };

module.exports = React.createClass({
getInitialState: function() {
    return {value: ''};
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },
  render: function() {
    var value = this.state.value;
    return (
      <section className='SignupSection page-section'>
        <div id="signup">
          <h2 className='section title'>SIGN UP FOR OUR MAILING LIST</h2>
          <div id="mc_embed_signup">
          <form action="//dubhacks.us9.list-manage.com/subscribe/post?u=18be1407915b0713dddc4da62&amp;id=1813ccd943" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" formNoValidate>
          <div id="mc_embed_signup_scroll">
            <label>Enter your email to be updated for our event this fall</label>
          <div className="mc-field-group">
          <input onChange={this.handleChange} value={value} type="email" name="EMAIL" className="required email" id="mce-EMAIL" />
          </div>
          <div id="mce-responses" className="clear">
          <div className="response" id="mce-error-response" style={MailChimpStyles.hide}></div>
          <div className="response" id="mce-success-response" style={MailChimpStyles.hide}></div>
          </div>
          <div style={MailChimpStyles.etc}><input type="text" name="b_18be1407915b0713dddc4da62_1813ccd943" tabindex="-1" value="" /></div>
          <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" /></div>
          </div>
          </form>
          </div>
        </div>
        </section>
      );
    }
});
