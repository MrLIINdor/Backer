import React , { Component } from 'react'
import Ymap from '../comp/Ymap/Ymap'
import './contact.css'

class Contact extends Component {
    render() {
        return (
            <div className="ConteinerContact">
                <h2>Контакты</h2>
                <div className="MapConteiner">
                    <Ymap />
                    <div className="PageConteiner">
                        <p>Наш адрес <br /> и часы работы</p>
                        <p>Email: zakaz.pp@gmail.ru</p>
                        <p>Телефон: +7 (495) 000-00-00</p>
                        <p>Адрес: Город Москва, ул. Малинова 12, м. Орехово</p>
                        <p>Понедельник — четверг:  7:00–17:00</p>
                        <p>Воскресенье: выходной</p>
                    </div>
                </div>
            
            </div>
        )
    }
}

export default Contact
