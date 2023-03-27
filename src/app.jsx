import MainLayout from './Layouts/mainLayout'
import Header from './Components/header'
import MainNews from './Components/mainNews'
import Aside from './Components/asideNews'
import MoreNews from './Components/moreNews'
import Foooter from './Components/footer'

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
