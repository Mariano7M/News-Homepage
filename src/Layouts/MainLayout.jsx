import { Header } from './../Components/Header'
import './MainLayout.css'

export default function MainLayout() {
	return (
		<>
			<section className='layout__header'>
				<Header />
			</section>
			<main className='layout__content'>
				<section className='content__container'>
					<section className='content__main'></section>
					<aside className='content__aside'></aside>
				</section>
				<section className='content__botton-section'></section>
			</main>
			<footer className='layout__footer'>footer</footer>
		</>
	)
}
