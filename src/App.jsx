import WeatherBoard from "./components/weather/WeatherBoard"
import Header from "./layout/Header"
import MainContent from "./layout/MainContent"
import Page from "./layout/Page"
import { WeatherProvider } from "./provider"

function App() {

  return (
    <WeatherProvider>
      <Page>
        <Header />
        <MainContent>
          <WeatherBoard />
        </MainContent>
      </Page>
    </WeatherProvider>
  )
}

export default App
