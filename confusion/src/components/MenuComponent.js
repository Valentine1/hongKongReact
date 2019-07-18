import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
import Dishdetail from './DishdetailComponent'
class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null,
            dishes: props.dishes
        }
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }

    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }


    renderDish1(dish) {

        return(
            <Dishdetail key={dish===null? null:dish.id} selectedDish={dish}/>
        );
    }

    render() {
        const menu = this.state.dishes.map((dish) => {
            return (
                <div  className="col-12 col-md-5 m-1">
                    <Card key={dish.id}
                          onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                {this.renderDish1(this.state.selectedDish)}
            </div>
        );
    }
}

export default Menu;
