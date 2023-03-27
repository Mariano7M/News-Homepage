import MainLayout from './layouts/mainlayout'
import Header from './components/header'
import MainNews from './components/mainNews'
import Aside from './components/asideNews'
import MoreNews from './components/moreNews'
import Foooter from './components/footer'

function App() {
	return (
		<>
			<MainLayout>
				<Header />
				<MainNews />
				<Aside />
				<MoreNews />
				<Foooter />
			</MainLayout>
		</>
	)
}

export default App
