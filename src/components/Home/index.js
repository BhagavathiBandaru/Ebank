import Header from '../Header'

import './index.css'

const Home = () => (
  <>
    <div className="app-container">
      <Header />
      <div className="home-card-section">
        <h1 className="heading">Your Flexibility, Our Excellence</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/ebank-digital-card-img.png "
          alt="digital card"
          className="card-img"
        />
      </div>
    </div>
  </>
)

export default Home
