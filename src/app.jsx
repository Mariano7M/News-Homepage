import MainLayout from './layout/main-layout'
import Header from './components/header'
import MainNews from './components/main-news'
import Aside from './components/aside-news'
import MoreNews from './components/more-news'
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
