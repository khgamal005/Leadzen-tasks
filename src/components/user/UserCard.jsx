import styles from "./UserCard.module.css";
import Button from './../UI/Button';
import Card from "../UI/Card";
import { useNavigate } from 'react-router-dom';


const UserCard = ({ data}) => {
 const navigate= useNavigate()
 


  return (
    <>
       <Card>
    <div className={styles.userCard}>
    <h5>{data.name}</h5>
    <div>
      <h5>contact</h5>
      {data.username}
    </div>
    <div>
    <h5>city</h5>
      {data.address.city}
    </div>
    <div>
    <h5>state</h5>
      {data.company.name}
    </div>
    <div className={styles.btn}>
      <Button onClick={() => navigate(`user/${data.id}`)}>View Details</Button>
    </div>
     
    </div>
    
    </Card>
    
   
    </>
 
  );
};

export default UserCard;






