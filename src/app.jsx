import MainLayout from './Layouts/MainLayout'
import Header from './Components/Header'
import MainNews from './Components/MainNews'
import Aside from './Components/AsideNews'
import MoreNews from './Components/MoreNews'
import Foooter from './Components/Footer'

export default function App() {
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
