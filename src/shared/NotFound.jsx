import { useNavigate } from "react-router-dom"

const NotFound = () => {
    let content
    const navigate = useNavigate()
    const divHolder = {
      width: '100%',
      height: '90vh',
      background:`linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2)), url(https://images.pexels.com/photos/8251058/pexels-photo-8251058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
      padding:'20px',
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
      backgroundSize:'cover',
      backgroundPosition:'center'
    }

    const textStyle = {
      textAlign:'center',
      fontSize:'55px',
      color:'white'
    }

    content = (
      <div style={divHolder}>
          <p style={textStyle}>404 not found</p>
          <button onClick={()=>navigate('/')} className='btn btn-md'>Go Home</button>
      </div>
    )
    return content
}

export default NotFound