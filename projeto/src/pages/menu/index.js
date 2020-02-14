import React, { Component, Image } from "react";
import api from '../../Services/api';
import { Link } from 'react-router-dom';
import './styles.css';
import Counter from '../../components/Counter/Counter';

export default class Menu extends Component {

    state = {
        menus: [],

    };

    componentDidMount() {
        this.loadMenus();
    }

    loadMenus = async () => {

        const { id } = this.props.match.params;
        const response = await api.get(`/restaurants/${id}/menu`);

        this.setState({ menus: response.data });

    };

    render() {
        const { menus } = this.state;
        return (
            <div>

                <div className="menu-info">
                    <div className="cardapio">
                        <strong>CARDÁPIO</strong>
                    </div>
                    {menus.map(menu => (
                        <article key={menu.restaurantId}>

                            <div className="titlecard">
                                <strong>{menu.name}</strong>
                            </div>
                            <div className="redimin">
                                <div>
                                    <img src={menu.image} />
                                </div>
                                <div>
                                    <p>Preço R$ {menu.price},00</p>
                                    <p>{menu.group}</p>
                                </div>
                                <div>
                                    <p className="try">Promoção: {}</p>
                                    <p className="try">Preço: R$ {}</p>
                                </div>
                            </div>
                            <div className="btnbtn">
                                <div>
                                    <Counter />
                                </div>
                                <button className="btnad">Adicionar R$ {menu.price},00</button>
                               
                            </div>
                            <p className="line"></p>

                        </article>
                    ))}

                </div>
            </div>
        )
    }
}
