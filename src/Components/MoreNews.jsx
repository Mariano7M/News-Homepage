import './MoreNews.css'

const moreNews = [
	{
		id: '01',
		img: '/assets/images/image-retro-pcs.jpg',
		title: 'Reviving Retro PCs',
		content: 'What happens when old PCs are given modern upgrades?',
	},
	{
		id: '02',
		img: '/assets/images/image-top-laptops.jpg',
		title: 'Top 10 Laptops of 2022',
		content: 'Our best picks for various needs and budgets.',
	},
	{
		id: '03',
		img: '/assets/images/image-gaming-growth.jpg',
		title: 'The Growth of Gaming',
		content: 'How the pandemic has sparked fresh opportunities.',
	},
]

export default function MoreNews() {
	return (
		<ul className='more-news__items'>
			{moreNews.map(moreNew => {
				return (
					<li key={moreNew.id} className='more-news__item'>
						<img
							className='more-news__item-image'
							src={moreNew.img}
							alt='Image for Reviving Retro PCs'
						/>
						<div className='more-news__item-container'>
							<h1 className='more-news__item-title'>{moreNew.id}</h1>
							<h3 className='more-news__item-subtitle'>{moreNew.title}</h3>
							<p className='more-news__item-content'>{moreNew.content}</p>
						</div>
					</li>
				)
			})}
		</ul>
	)
}
