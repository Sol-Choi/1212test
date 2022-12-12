import{NavLink} from "react-router-dom"
const Navbar = () => {
    // about, product 동일하게 스타일 달아줄 것
    return (<div> 
        <NavLink to ="/" style={ ({isActive })=> isActive ? {color:"green",fontSize:"1.5em",fontWeight:"bold"} : undefined }>Home</NavLink>{" "}
        <NavLink to ="/about" style={ ({isActive })=> isActive ? {color:"green",fontSize:"1.5em",fontWeight:"bold"} : undefined }>About</NavLink>{" "}
        <NavLink to ="/product"style={ ({isActive })=> isActive ? {color:"green",fontSize:"1.5em",fontWeight:"bold"} : undefined }>Product</NavLink>{" "}
    </div>  );
}
 
export default Navbar;