import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';
import { ListGroup, ListGroupItem, ListGroupItemText } from 'reactstrap';

function RenderDish({dish}) {

    return (
    <Card>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
        </CardBody>
    </Card>
    )
}

function RenderComments({comments}) {
    const commentsView = comments.map((comm) => {
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
        <div >
            {commentsView}
        </div>
    );
}

const  DishDetail = (props) => {
    console.log("Dishdetail render");
    if (props.selectedDish != null){
        return (
            <div  className="col-8 col-md-5 m-1">
                <div  style={{display:'inline'} }>
                    <RenderDish dish={props.selectedDish} />
                </div>
                <div   style={{display:'inline'} }>
                    <Card>
                        <CardTitle> Comments: </CardTitle>
                        <CardBody>
                            <RenderComments comments={props.selectedDish.comments} />
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

export default DishDetail;
