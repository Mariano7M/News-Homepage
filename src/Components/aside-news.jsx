import './aside-news.css'
const asideNews = [
	{
		id: '01',
		title: 'Hydrogen VS Electric Cars',
		content: 'Will hydrogen-fueled cars ever catch up to EVs?',
	},
	{
		id: '02',
		title: 'The Downsides of AI Artistry',
		content:
			' What are the possible adverse effects of on-demand AI image generation?',
	},
	{
		id: '03',
		title: 'Is VC Funding Drying Up?',
		content:
			'Private funding by VC firms is down 50% YOY. We take a look at what that means.',
	},
]
export default function AsideNews() {
	return (
		<section className='aside-news'>
			<h1 className='aside-news__title'>New</h1>
			<ul>
				{asideNews.map(asideNew => {
					return (
						<li key={asideNew.id} className='aside-news__item'>
							<h3 className='aside-news__item-title'>{asideNew.title}</h3>
							<p className='aside-news__item-content'>{asideNew.content}</p>
						</li>
					)
				})}
			</ul>
		</section>
	)
}
