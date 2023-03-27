import { MoreNews } from './../Components/MoreNews'
import { AsideNews } from './../Components/AsideNews'
import { MainNews } from './../Components/MainNews'
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
					<MainNews />
					<aside className='content__aside'>
						<AsideNews />
					</aside>
				</section>
				<section className='content__botton-section'>
					<MoreNews />
				</section>
			</main>
			<footer className='layout__footer'>footer</footer>
		</>
	)
}
