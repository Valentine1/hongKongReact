import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';
import { ListGroup, ListGroupItem, ListGroupItemText } from 'reactstrap';

class Dishdetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedDish: props.selectedDish
        }
        console.log("Dishdetail construcor");
    }

    renderComments() {
        const comments = this.props.selectedDish.comments.map((comm) => {
                return <ListGroup key={comm.id}>
                    <ListGroupItem >
                        <ListGroupItemText>
                            {comm.comment}
                        </ListGroupItemText>

                        <ListGroupItemText>--{comm.author},
                            {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comm.date)))}
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
        console.log("Dishdetail render");
        if (this.props.selectedDish != null){
            return (
                <div  className="row">
                    <div  className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg top src={this.props.selectedDish.image} alt={this.props.selectedDish.name} />
                            <CardBody>
                                <CardTitle>{this.props.selectedDish.name}</CardTitle>
                                <CardText>{this.props.selectedDish.description}</CardText>
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
                <div>I I am null</div>
            );

    }
}

export default Dishdetail;
