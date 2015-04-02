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

/** Anwell's work

# FAQ
## What is DubHacks?
DubHacks is a student-run college hackathon. The first of its kind in the Pacific Northwest, student developers and designers gather twice a year at the University of Washington in Seattle to work together in teams and build projects with the goal of creating solutions to real-world problems and learning. This is the second of bi-annual DubHacks events.
## When is DubHacks?
The gates will open on Saturday, May 16th, at 10:00am and the event will continue onto the following day until 2:00pm, when prizes will be given out. The full schedule will be posted soon.

## Who can attend?
We strongly encourage undergraduate students from local Northwest universities to attend DubHacks.

## How do I register?
We are looking for people with a passion of making or contributing to projects: mobile, hardware, web, design or anything else cool. We are looking for people who are passionate about making things. This can be evident from their social profiles (Github, portfolio, resume) or experience in other hackathons. If you are new to the hackathon scene, we encourage you to still apply.

## What about travel reimbursement?
No travel reimbursements will be provided for this event.

## How much does this event cost?
Absolutely free. We will provide your WiFi, meals, caffeine, swag, and the workspace.

## What should I bring?
All your hack gear. Passion, keyboard, mouse, laptop, and other necessary hardware (don't forget your chargers!). Along with that, you are free to bring toiletries, sleeping bags, and a change of clothes. You should also bring any valid form of identification and your ticket for security purposes.

## How big are teams?
A team can be as big as 5 people or could consist of a couple of people. You can do it alone, but it'll be less fun!

## What should I build?
Anything really. The project is up to you and your team. You have 24 hours to make anything, ranging from web apps, desktop apps, mobile apps, or even traditional software.

## Are we allowed to build on past projects?
A hackathon is an experience to build on something completely new within a set amount of time. With that in mind, you cannot work on past projects. Using your own APIs or third-party APIs is alright as long as the project is a fresh start.

<--- (depends on MLH support?)
## Will you have hardware prototyping equipment?
Yes. Our partners at MLH will have limited stock of Oculus Rifts, Myo arm-bands, Leap Motions, Arduinos, 3D printers and more to give out to hackers for the duration of the hackathon.
--->

## I have a different question. Who can I ask?
Please feel free to reach out to us via [Facebook](https://www.facebook.com/uwhacks), [Twitter](https://twitter.com/dubhacks), or send an email to [info@dubhacks.co](mailto:info@dubhacks.co).

 */
