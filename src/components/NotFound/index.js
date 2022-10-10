import './index.css'

const NotFound = () => (
  <>
    <div className="not-found-page">
      <img
        className="not-found-img"
        src="https://assets.ccbp.in/frontend/react-js/ebank-not-found-img.png"
        alt="not found"
      />
      <h1 className="not-found-heading">Page Not Found</h1>
      <p className="description">
        We are sorry, the page you requested could not be found
      </p>
    </div>
  </>
)

export default NotFound
