import {Component} from 'react'
import {v4} from 'uuid'
import AppDetailsItem from '../AppDetailsItem/index'
import './index.css'

class PasswordManager extends Component {
  state = {
    appDetailsList: [],
    website: '',
    username: '',
    password: '',
    showPassword: false,
  }

  onAddAppDetails = event => {
    event.preventDefault()
    const {website, username, password, showPassword} = this.state
    const newAppDetails = {id: v4(), website, username, password, showPassword}
    this.setState(prevState => ({
      appDetailsList: [...prevState.appDetailsList, newAppDetails],
      website: '',
      username: '',
      password: '',
    }))
  }

  onAddWebsite = event => {
    this.setState({website: event.target.value})
  }

  onAddUsername = event => {
    this.setState({username: event.target.value})
  }

  onAddPassword = event => {
    this.setState({password: event.target.value})
  }

  onSelectShowPassword = () => {
    this.setState(prevState => ({
      appDetailsList: prevState.appDetailsList.map(item => ({
        ...item,
        showPassword: !item.showPassword,
      })),
    }))
  }

  onSearchFilter = event => {
    const {appDetailsList} = this.state

    const filteredSearchList = appDetailsList.filter(item =>
      item.website.toLowerCase().includes(event.target.value.toLowerCase()),
    )

    this.setState({appDetailsList: filteredSearchList})
  }

  deleteApp = id => {
    const {appDetailsList} = this.state
    const filteredDetails = appDetailsList.filter(item => item.id !== id)
    this.setState({appDetailsList: filteredDetails})
  }

  render() {
    const {appDetailsList, website, username, password} = this.state

    return (
      <div className="main-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="logo-style"
        />
        <div className="top-card-container">
          <div className="top-sub-cards">
            <form className="form-container" onSubmit={this.onAddAppDetails}>
              <h1 className="form-heading">Add New Password</h1>
              <div className="input-content">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="input-background-icon"
                />
                <input
                  type="text"
                  className="input-style"
                  placeholder="Enter Website"
                  onChange={this.onAddWebsite}
                  value={website}
                />
              </div>
              <div className="input-content">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="input-background-icon"
                />
                <input
                  type="text"
                  className="input-style"
                  placeholder="Enter Username"
                  onChange={this.onAddUsername}
                  value={username}
                />
              </div>
              <div className="input-content">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="input-background-icon"
                />
                <input
                  type="password"
                  className="input-style"
                  placeholder="Enter Password"
                  onChange={this.onAddPassword}
                  value={password}
                />
              </div>
              <button type="submit" className="btn-style">
                Add
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="image-style"
            />
          </div>
        </div>
        <div className="top-card-container top-sub-cards">
          <div className="bottom-top">
            <h1 className="form-heading">Your Passwords</h1>
            <p className="counts">{appDetailsList.length}</p>
          </div>
          <div className="input-content">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              alt="search"
              className="input-background-icon"
            />
            <input
              type="search"
              className="input-style"
              placeholder="Search"
              onChange={this.onSearchFilter}
            />
          </div>
        </div>
        <hr />
        <div className="show-password-content">
          <input
            type="checkbox"
            className="check-box"
            id="show-password"
            onChange={this.onSelectShowPassword}
          />
          <label htmlFor="show-password" className="form-heading">
            Show Passwords
          </label>
        </div>
        <div className="stored-password-container">
          {appDetailsList.length <= 0 ? (
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="image-style"
              />
              <p className="form-heading">No Passwords</p>
            </div>
          ) : (
            <ul className="all-details">
              {appDetailsList.map(appDetailsItem => (
                <AppDetailsItem
                  appItem={appDetailsItem}
                  deleteApp={this.deleteApp}
                  key={appDetailsItem.id}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default PasswordManager
