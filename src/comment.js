import Faker from "faker";

const Comment = (props) => {
 return( 
  <div className="ui cards" style={{paddingTop : "150px",marginLeft : "500px"}}>
    <div className="card">
      <div className="content">
        <img
          className="right floated mini ui image"
          src={Faker.image.people()}
        />
        <div className="header">{props.name}</div>
        <div className="meta">{props.meta}</div>
        <div className="description">
          {props.des}
        </div>
      </div>
         {props.children}
    </div> 
  </div>
 )
};
export default Comment;