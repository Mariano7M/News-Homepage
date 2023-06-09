import './main-news.css'
import imageWeb3Desktop from '../assets/images/image-web-3-desktop.jpg'
import imageWeb3Mobile from '../assets/images/image-web-3-mobile.jpg'

export default function MainNews() {
	return (
		<section className='main-news'>
			<picture className='main-news__img'>
				<source srcSet={imageWeb3Mobile} media='(max-width: 455px)' />
				<source srcSet={imageWeb3Desktop} />
				<img
					src={imageWeb3Desktop}
					alt='This is the image of the new web 3.0'
				/>
			</picture>
			<section className='main-news__container'>
				<h1 className='main-news__title'>The Bright Future of Web 3.0?</h1>
				<div className='main-news__content-wrapper'>
					<p className='main-news__content'>
						We dive into the next evolution of the web that claims to put the
						power of the platforms back into the hands of the people. But is it
						really fulfilling its promise?
					</p>
					<button className='main-news__btn'>Read more</button>
				</div>
			</section>
		</section>
	)
}
