import './ButtonModal.css'

const ButtonModal = ({ texto, modal, setModal }) => {
  return (
    <button className='ButtonModal' onClick={() => setModal(!modal)}>
      {texto}
      <img className='icon' src={modal ? '.././images/icon-minus.svg' : '.././images/icon-plus.svg'} alt="" />
    </button>
  )
}
export default ButtonModal