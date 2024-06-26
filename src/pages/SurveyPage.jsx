import { Helmet } from 'react-helmet';

import Button1 from '../components/HostEvent/Button1';
import mezami from '../icons/mezami.png';
import person1 from '../icons/About/person1_small.png';
import person2 from '../icons/About/person2_small.png';
import person3 from '../icons/hostIntro/image2.svg';
import person4 from '../icons/hostIntro/image3.svg';
import hand from '../icons/About/matchmaking.png';
import yes from '../icons/About/yes.png';

const SurveyPage = () => {
	return (
		<div className='surveyPage'>
			<Helmet>
				<title>Survey Page | Mezami</title>
			</Helmet>
			<section className='signup'>
				<span>
					<img src={mezami} alt='mezami logo' />
				</span>
				<span>Help us to change how people meet.</span>
				<span>
					Sign up now to gain a chance to access Mezami, a member-exclusive Community!
				</span>
				<Button1 text={'Sign Up'} />
				<span>Takes less than a minute! No, we don’t spam your inbox.</span>
			</section>
			<section className='survey1'>
				<div className='image1'>
					<img src={person3} alt='person' />
				</div>
				<div className='question'>
					<div className='heading'>Do you like meeting new people?</div>
					<div className='content'>
						<Button1 text='Hell yes! 100%' width='230px' height='55px' />
						<Button1 text='Don’t hate it, don’t love it' width='230px' height='55px' />
						<Button1 text='Okay in small doses' width='230px' height='55px' />
						<Button1 text='Nope. Nope. Nope' width='230px' height='55px' />
					</div>
				</div>
			</section>
			<section className='survey2'>
				<div className='question'>
					<div className='heading'>
						What kind of interesting person do you most like to meet?
					</div>
					<div className='content'>
						<Button1 text='Someone I can learn from' width='330px' height='55px' />
						<Button1
							text='If they have experiences to share'
							width='330px'
							height='55px'
						/>
						<Button1 text='Anyone is good!' width='330px' height='55px' />
						<Button1 text='A person I can team up with' width='330px' height='55px' />
					</div>
				</div>
				<div className='image2'>
					<img src={person4} alt='person' />
				</div>
			</section>
			<section className='survey3'>
				<div className='content'>
					<div className='heading'>Please tell us a bit about yourself</div>
					<form className='surveyForm'>
						<label>Name</label>
						<input type='text'></input>
						<label>Email</label>
						<input type='text'></input>
						<label>Phone Number</label>
						<input type='text'></input>
						<label>
							Tell us a little about things you find interesting - anything goes!
						</label>
						<input type='text'></input>
						<Button1 text='Count me in!' width='140px' height='40px' />
					</form>
				</div>
				<div className='image3'>
					<img src={person1} alt='person' />
					<img src={person2} alt='person' />
				</div>
			</section>
			<section className='fitIn'>
				<div className='text'>
					<div className='heading'>Wondering if you fit?</div>
					<div className='content'>
						<div>
							<strong>Short answer</strong> - Yes, you do.
						</div>
						<div>
							<strong>Slightly longer answer</strong> - Yes, you do! We want the Mezami
							community to be as diverse and as welcoming as possible. No matter how niche
							your interests, we’ll find a place for you.
						</div>
					</div>
				</div>
				<div className='rightPics'>
					<img src={yes} alt='yes' />
					<img src={hand} alt='handshake' />
				</div>
			</section>
			<section className='surveyPage_about'>
				<div className='text'>
					<div className='header'>About Mezami.</div>
					<div className='content'>
						We want to create a space to encourage dialogue, for ideas to grow together.
						We’re starting with the way people meet. With Mezami, we’re cutting through
						the clutter - networking that’s more people-centric. We’re here to preserve
						time.
					</div>
				</div>
			</section>
		</div>
	);
};

export default SurveyPage;
