// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannerCardsList} = props
  const {headerText, description, className} = bannerCardsList

  return (
    <li className={`${className} card-to-all`}>
      <h1 className="header-text"> {headerText}</h1>
      <p className="para-text">{description}</p>
      <div>
        <button className="btn-design" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
