import React, { Component } from "react";
import api from '../../Services/api';
import { Link } from 'react-router-dom';
import './styles.css';


export default class Main extends Component {
    state = {
        restaurants: [],

    };

    componentDidMount() {
        this.loadRestaurants();
    }

    loadRestaurants = async () => {
        const response = await api.get("/restaurants");

        this.setState({ restaurants: response.data });
     
    };

    render() {
        const { restaurants } = this.state;

        return (
            <div>
                <div className="group">
                  
                <div>
                <form >
                    <input className="" type="text" placeholder="Restaurante..." />
                    <input className="" type="submit" value="Pesquisar" />
                </form>
                </div>
                </div>
                <div className="restaurant-list">
                    {restaurants.map(restaurant => (
                        <article key={restaurant.id}>
                            <di>
                            <img src={restaurant.image} />
                            </di>
                            <div>
                            <strong>{restaurant.name}</strong>
                            <p>{restaurant.address}</p>
                            <p>Horário de funcionamento   </p>
                            <Link to={`/menu/${restaurant.id}`}>Ver Cardápio</Link>
                            </div>
                            <button className="btn" >Aberto</button>
                            
                        </article>
                    ))}

                </div>
            </div>
        )
    }
}


