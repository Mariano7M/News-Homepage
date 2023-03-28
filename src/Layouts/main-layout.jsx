import './main-layout.css'

// eslint-disable-next-line react/prop-types
function MainLayout() {
	// const [header, main, aside, more, footer] = children

	return (
		<>
			<section className='layout__header'>header</section>
			<main className='layout__content'>
				<section className='content__container'>
					main
					<aside className='content__aside'>aside</aside>
				</section>
				<section className='content__botton-section'>more</section>
			</main>
			<section className='layout__footer'>footer</section>
		</>
	)
}

export default MainLayout
