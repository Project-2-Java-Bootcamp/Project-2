import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import {Cart} from "../reducers/items/actions"
import {
  Carousel,
  Button,
  Card,
  ListGroupItem,
  ListGroup,
} from "react-bootstrap";
import "../App.css";
import bag from "../image/bag.png";
import hart from "../image/heart.png";
import { useParams } from "react-router-dom";
import { Favorite } from "../reducers/items/actions";

function Items() {
    const {id} = useParams()
  const state = useSelector((state) => {
    return {
      item: state.ItemsReducer.Items,
      Favorites: state.ItemsReducer.Favorite,
    };
  });
  const dispatch = useDispatch();
  const [noOfElement, setNoOfElement] = useState(8);

  const slice = state.item.slice(0,noOfElement)

  function add (ele) {
    const action = Cart(ele);
    dispatch(action);

  }
  const loadmore = ()=>{
    setNoOfElement(noOfElement +noOfElement)
  }
  useEffect(()=>{
    loadmore()
  },[])
  return (
    <div className="items-div">
      {slice.map((element, index) => {
          if(id===element.type){

          
        return (
            
          <Card style={{ width: "23.9rem" }}>
            <Card.Img variant="top" src={element.img1} className="item-image" />
            <Card.Body>
              <Card.Title>{element.name}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>{element.price} :السعر</ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">
                <img className="iconSize" src={hart} onClick={() => dispatch(Favorite(element))} />
              </Card.Link>
              <Card.Link href="#">
                <img className="ImgSize" src={bag} onClick={()=>dispatch(Cart(element))}/>
              </Card.Link>
            </Card.Body>
          </Card>
        );
          }
      })}
      <button onClick={ ()=> loadmore()} > load more</button>
    </div>
  );
}

export default Items;
