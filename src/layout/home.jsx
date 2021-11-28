import React , { Component } from 'react'
import Card from '../comp/Card/Card'
import Cardicon from '../comp/Cardicon/Cardicon'

import five from '../images/five.svg'
import kurasan from '../images/kurasan.svg'
import truck from '../images/truck.svg'
import potholders from '../images/potholders.svg'

import rolls from '../images/rolls.png'
import bagel from '../images/bagel.png'
import bread from '../images/bread.png'
import desert from '../images/desert.png'
import lavash from '../images/lavash.png'
import matnakash from '../images/matnakash.png'
import './home.css'



class Home extends Component {

    activateCatalogs(){
        alert('В разработке :))')
    }
    


    render() {
        return (
            <div>
                <div className="Hed">
                    <h2 className="PagesTitle">Pani Provance</h2>
                    <p className="PagesParag">The hottes pastries you <br/> have ever seen</p>
                    <button className="BtnCatalog" onClick={this.activateCatalogs}>Каталог</button>
                </div>

                <div className="Dignities">
                    <Cardicon title={'Самые свежие ингридиенты'} className={'ContenerParag'} img={`${kurasan}`}/>
                    <Cardicon title={'Более 5 лет на рынке'} className={'ContenerParag D1'} img={`${five}`}/>
                    <Cardicon title={'Быстрая доставка'} className={'ContenerParag'} img={`${truck}`}/>
                    <Cardicon title={'Выпечка ручной работы'} className={'ContenerParag'} img={`${potholders}`}/>


                    {/* <div className="ContenerDig">
                        <img className="ImageDignities" src={kurasan} alt='' />
                        <p className="ContenerParag">Самые свежие ингридиенты</p>
                    </div> 

                    <div className="ContenerDig">
                        <img className="ImageDignities" src={five} alt='' />
                        <p className="ContenerParag D1">Более 5 лет на рынке</p>
                    </div>

                    <div className="ContenerDig">
                        <img className="ImageDignities" src={truck} alt='' />
                        <p className="ContenerParag">Быстрая доставка</p>
                    </div>

                    <div className="ContenerDig">
                        <img className="ImageDignities" src={potholders} alt='' />
                        <p className="ContenerParag">Выпечка ручной работы</p>
                    </div> */}
                </div>

                <div className="Kurasans">
                    <p className="P1">Выпечка</p>
                </div>

                <div className="ContenerCatalog">

                    <Card text={'Булочки'} img={`${rolls}`}/>
                    <Card text={'Курассаны'} img={`${bagel}`}/>
                    <Card text={'Хлебушек'} img={`${bread}`}/>
                    <Card text={'Десерт'} img={`${desert}`}/>
                    <Card text={'Лаваш'} img={`${lavash}`}/>
                    <Card text={'Матнакаш'} img={`${matnakash}`}/>


                    {/* <div className='CardCatalog'>
                        <img className='ImgCard' src={rolls} alt="" />
                        <p className='PageImage'>Булочки</p>
                    </div>

                    <div className='CardCatalog'>
                        <img className='ImgCard' src={bagel} alt="" />
                        <p className='PageImage'>Курассаны</p>
                    </div>

                    <div className='CardCatalog'>
                        <img className='ImgCard' src={bread} alt="" />
                        <p className='PageImage'>Хлебушек</p>
                    </div>

                    <div className='CardCatalog'>
                        <img className='ImgCard' src={desert} alt="" /> 
                        <p className='PageImage'>Десерт</p>
                    </div>

                    <div className='CardCatalog'>
                        <img className='ImgCard' src={lavash} alt="" />
                        <p className='PageImage'>Лаваш</p> 
                    </div>

                    <div className='CardCatalog'>
                        <img className='ImgCard' src={matnakash} alt="" /> 
                        <p className='PageImage'>Матнакаш</p>
                    </div> */} 
                </div>
            </div>
        )
    }
}

export default Home
