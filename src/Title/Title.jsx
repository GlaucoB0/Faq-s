import './Title.css'
const Title = ({title}) => {
  return (
    <div className="title-container">
      <img src=".././images/icon-star.svg" alt="" /> <h1>{title}</h1>
    </div>
  )
}
export default Title