import React , { Component } from 'react'
import Ymap from '../comp/Ymap/Ymap'
import './contact.css'

class Contact extends Component {
    render() {
        return (
            <div>
                <div className="ConteinerContact">
                    <h2 className="Title">Контакты</h2>
                    <div className="MapConteiner">
                        <Ymap className="Ymap"/>
                        <div className="PageConteiner">
                            <p className="Adders">Наш адрес <br /> и часы работы</p>
                            <p>Email: zakaz.pp@gmail.ru</p>
                            <p>Телефон: +7 (495) 000-00-00</p>
                            <p>Адрес: Город Москва,<br /> ул. Малинова 12,<br /> м. Орехово</p>
                            <p>Понедельник — четверг:  7:00–17:00</p>
                            <p>Воскресенье: выходной</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact
