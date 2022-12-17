import './index.css'

const AppDetailsItem = props => {
  const {appItem, deleteApp} = props
  const {id, website, username, password, showPassword} = appItem

  const onDeleteAppDetails = () => {
    deleteApp(id)
  }

  return (
    <li className="list-item-style">
      <div className="profile-container">{website[0]}</div>
      <div className="details">
        <p>{website}</p>
        <p>{username}</p>
        {showPassword ? (
          <p>{password}</p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="stars-style"
          />
        )}
      </div>
      <div>
        <button type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="deleteIcon"
            onClick={onDeleteAppDetails}
          />
        </button>
      </div>
    </li>
  )
}

export default AppDetailsItem
