import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

class Dishdetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedDish: props.selectedDish
        }
    }

    renderComments() {
        const comments = this.state.selectedDish.comments.map((comm) => {
                return <ListGroup>
                    <ListGroupItem >
                        <ListGroupItemText>
                            {comm.comment}
                        </ListGroupItemText>

                        <ListGroupItemText>--{comm.author}, {comm.date}
                        </ListGroupItemText>
                    </ListGroupItem>
                </ListGroup>
            }
        );
        return (
            <div>
                {comments}
            </div>
        );
    }

    render() {
        if (this.state.selectedDish != null){
            return (
                <div  className="row">
                    <div  className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg top src={this.state.selectedDish.image} alt={this.state.selectedDish.name} />
                            <CardBody>
                                <CardTitle>{this.state.selectedDish.name}</CardTitle>
                                <CardText>{this.state.selectedDish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div  className="col-12 col-md-5 m-1">
                        <Card>
                            <CardTitle> Comments: </CardTitle>
                            <CardBody>

                                {this.renderComments()}
                            </CardBody>
                        </Card>
                    </div>
                </div>
            );
        }  else
            return(
                <div></div>
            );

    }
}

export default Dishdetail;
