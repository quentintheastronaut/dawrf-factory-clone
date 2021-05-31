import React from 'react'

function Header() {
    return (
        <div class="header">
        <div class="header__body">

            <div class="header__left">
                <div class="header__logo">
                    <img src="https://www.dwarf-factory.com/wp-content/uploads/2019/04/logo-0423.png" class="logo"/>
                </div>
                <div class="header__name">
                    <h4 class="name1">Dwarf Factory</h4>
                    <h6 class="name2">Artisan Factory</h6>
                </div>
            </div>
    
            <div class="header__navbar">
                <a href="hello" class="header__navabar__opt">all product</a>
                <div class="separator"></div>
                <a href="hello" class="header__navabar__opt">ready to buy</a>
                <div class="separator"></div>
                <a href="hello" class="header__navabar__opt">collaboration</a>
                <div class="separator"></div>
                <a href="hello" class="header__navabar__opt">drop exclusive</a>
                <div class="separator"></div>
                <a href="hello" class="header__navabar__opt">news</a>
                <div class="separator"></div>
                <a href="hello" class="header__navabar__opt">about us</a>
                <div class="separator"></div>
                <a href="hello" class="header__navabar__opt">shipping & return policy</a>
                <div class="separator"></div>
                <a href="hello" class="header__navabar__opt">faq</a>
            </div>
    
            <div class="header__right">
                <div class="header__search">
                    <i class="fas fa-search" color="black"></i>
                </div>
                <div class="header__login">
                    <i class="far fa-1x fa-user icon__user"></i>
                    <button class="login__btn">
                        
                        Login
                        <div class="down__arrow"></div>
                        
                    </button>
                </div>
                <div class="header__cart">
                    <i class="fas fa-shopping-cart"></i>
                    <div class="item__number">0</div>
                </div>
            </div>
           
        </div>
    </div>
    )
}

export default Header
