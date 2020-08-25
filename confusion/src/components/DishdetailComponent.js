import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail  extends Component{

    renderDish(dish){
        if(dish != null)
            return(
                <div className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg width="100%" object src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            )
        else
            return(
                <div>Hola1</div>
            );    
    }

    renderComments(comments){
        if(comments == null)
            return(
                <div>Hola2</div>
            ); 

        const lst = comments.map((comment) => {
            return(
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author} ,&nbsp;
                       {new Intl.DateTimeFormat("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "2-digit"
                        }).format(new Date(comment.date))}
                    </p>
                </li>
            );
        })

        return(
            <div className='col-12 col-md-5 m-1'>
                <h4>Comments</h4>
                <ul className='list-unstyled'>
                    {lst}
                </ul>
            </div>
        );
    }

    render(){
        const dish = this.props.dish
        if (dish == null) {
            return (<div></div>)
        }
        const dishItem = this.renderDish(dish)
        const commentItem = this.renderComments(dish.comments)
        return(
            <div className="row">
                { dishItem }
                {commentItem}
            </div>            
        );
    }
}

export default DishDetail;