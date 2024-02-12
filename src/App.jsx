import WeatherBoard from "./components/weather/WeatherBoard"
import Header from "./layout/Header"
import MainContent from "./layout/MainContent"
import Page from "./layout/Page"

function App() {

  return (
    <Page>
      <Header />
      <MainContent>
        <WeatherBoard />
      </MainContent>
    </Page>
  )
}

export default App
