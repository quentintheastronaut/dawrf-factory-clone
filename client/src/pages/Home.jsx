import React from 'react'
import banner1 from '../assets/img/Banner/banner1.png'
import banner2 from '../assets/img/Banner/banner2.png'
import banner3a from '../assets/img/Banner/banner3a.png'
import banner3b from '../assets/img/Banner/banner3b.png'
import banner4 from '../assets/img/Banner/banner4.png'

import figure0 from '../assets/img/Figure/figure0.png'
import figure1 from '../assets/img/Figure/figure1.png'
import figure2 from '../assets/img/Figure/figure2.png'
import figure3 from '../assets/img/Figure/figure3.png'

import "../styles/Home.css" 

function Home() {
    return (
        <div class="body">
    
        <div class="main__body">
            <a href="hello"><img src={banner1} class="banner"/></a>

            <div class="new__arrived banner">
                <div class="banner__title">
                    New arrived
                </div>
                <div class="list__figure">
                    <div class="figure_box">
                        <img src={figure0} class="banner figure"/>
                        <h1 class="figure__name">Mystic Dragon The Figure</h1>
                        <a href="hello" class="banner__btn">See More</a>
                    </div>
                    <div class="figure_box">
                        <img src={figure2} class="banner figure"/>
                        <h1 class="figure__name">Ice Dragon The Figure</h1>
                        <a href="hello" class="banner__btn">See More</a>
                    </div>
                    <div class="figure_box">
                        <img src={figure3} class="banner figure"/>
                        <h1 class="figure__name">Flame Dragon The Figure</h1>
                        <a href="hello" class="banner__btn">See More</a>
                    </div>
                    <div class="figure_box">
                        <img src={figure1} class="banner figure"/>
                        <h1 class="figure__name">River Dragon The Figure</h1>
                        <a href="hello" class="banner__btn">See More</a>
                </div>
                    
                    
                </div>
            </div>

        
            <div class="banner__title">
                Featured
            </div>
            <a href="hello"><img src={banner2} class="banner"/></a>
        
            <div class="duo__banner">
                <a href="hello"><img src={banner3a} class="duo banner"/></a>
                <a href="hello"><img src={banner3b}  class="duo banner"/></a>
            </div>

            <div class="banner__title">
                Collaboration
            </div>
            <a href="hello"><img src={banner4}class="banner"/></a>

        </div>  
        
    </div>
    )
}

export default Home
