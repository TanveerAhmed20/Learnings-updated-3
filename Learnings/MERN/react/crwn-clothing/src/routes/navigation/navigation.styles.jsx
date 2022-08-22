import styled from 'styled-components'
import { Link} from 'react-router-dom';

export const NavigationContainer = styled.div`
height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items:center;
    margin-bottom: 25px;  
`
export const LogoContainer = styled(Link)`
  height:100%;
  width:70px;
  padding: 25px;
`

export const NavLinks = styled.div`
      width: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      flex-wrap:wrap;

`

export const NavLink = styled(Link)`
padding: 10px 15px;
cursor: pointer;
text-decoration:none;
color:rgba(43, 43, 43,0.7);
transition :all 0.3s ease 0s;
&:hover{
  color: palevioletred;
}
&:active {
  color: red;
}

`
// export {NavigationContainer};
// .navigation {
   
//     .logo-container {
     
//     }
  
//     .nav-links-container {
      
      
  
//       .nav-link {
    
//       }
//       .nav-link:hover{
//         color:rgba(43, 43, 43,1);
//       }
//     }
//   }
  