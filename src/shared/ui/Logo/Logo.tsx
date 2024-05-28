import {images} from '@/shared/assets'
import { useNavigate } from 'react-router-dom';

const Logo = () => {
    const navigate = useNavigate()
    
    return <img src={images.logo} alt="shoppy" onClick={() => navigate('/')}/>
}

export default Logo;