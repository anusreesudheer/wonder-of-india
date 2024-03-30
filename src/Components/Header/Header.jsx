import React from 'react'
import './Header.css'
import { Container,Row,Button} from 'reactstrap'
import { NavLink,Link } from 'react-router-dom'
import { SiYourtraveldottv } from "react-icons/si"
import { BsThreeDotsVertical } from "react-icons/bs";

const nav_links=[
  {
    path:'/home',
    display:'Home'
  },

  {
    path:'/About',
    display:'About'
  },

  {
    path:'/travel',
    display:'Travelplan'
  },

]

function Header() {
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav_wrapper d-flex align-items-center  justify-content-between">
             {/*-----------------------logo----------------------------- */}   
             <div className="logo">
              <h2><SiYourtraveldottv  className="icon"/>Wonders of india</h2>
              </div> 
              {/*-----------------------logo end----------------------------- */}   
               {/*  -----------------------menu----------------------------- */   }
              <div className="navigation">
                <ul className="menu d-flex align-items-center gap-5 ">
                  {
                    nav_links.map((item,index)=>(
                      <li className="nav_item" key={index}>
                        <NavLink to={item.path}className={navClass=>navClass.isActive ? "active_link" : ""
                        }
                        >
                        {item.display}</NavLink>
                      </li>
                    )
                    )
                  }
                </ul>
              </div>
               {/*-----------------------menu end----------------------------- */}   

                <div className="nav_right d-flex align-item-center gap-4 ">
                <div className="nav_btns d-flex align-item-center gap-4 ">
                  <Button className="btn secondary__btn"><Link to='/login'>Login</Link></Button>
                  <Button className="btn secondary__btn"><Link to='/signup'>Resigter</Link></Button>
                </div>
                <span className="logo_menu">
                <i><BsThreeDotsVertical  className="icon"/></i>
                </span>
               </div>  
          </div>
        </Row>
      </Container>
    </header>
  )
    
}

export default Header