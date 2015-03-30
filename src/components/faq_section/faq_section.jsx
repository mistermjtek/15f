var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <section className='FAQSection page-section'>
        <h2 className='title'>FAQ</h2>
        <ul className='faq'>
          <li className='qa'>
            <h4 className='question'>Who can attend?</h4>
            <p>Current undergraduate university students and high school students</p>
          </li>
          <li className='qa'>
            <h4 className='question'>Travel Reimbursement?</h4>
            <p>We are <strong>not</strong> providing travel reimbursement.</p>
          </li>
          <li className='qa'>
            <h4 className='question'>What Should I bring?</h4>
            <p>Please bring your student id, laptop, charger and passion! Besides that, a toothbrush, sleeping bag/blanket, and change of clothes is recommended.</p>
          </li>
          <li className='qa'>
            <h4 className='question'>How Big are Teams?</h4>
            <p>A team can be as big as 5 people. We'll help with pairing team members if you don't come with one.</p>
          </li>
          <li className='qa'>
            <h4 className='question'>I have a different question. Who can I ask?</h4>
            <p>Reach out to us at via <a href='twitter.com/dubhacks'>Twitter</a>, <a href='facebook.com/uwhacks'>Facebook</a>, or send an email to <a href='contact@dubhacks.co'>contact@dubhacks.co</a></p>
          </li>
        </ul>
      </section>
    );
  }
});
