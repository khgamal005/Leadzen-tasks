import styles from "./Details.module.css";
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../UI/Button';
import Card from "../UI/Card";
import { useParams } from "react-router-dom";

const Details = () => {

  const { id } = useParams();
  const [userDetails ,setUsersDetails] =  useState([])
  const [isLoading, setIsLoading] = useState(false);
  const navigate= useNavigate()



  useEffect(()=>{
    (async()=>{
      setIsLoading(true)
      try {
          const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
          const data = await res.json()
          setUsersDetails(data)
          setIsLoading(false)
    
      }
       catch (error) { 
        setIsLoading(false)
    
      }})()
    },[id])

  return (
    <Card>
   {isLoading?<p>loading...</p>:(<>
    <div className={styles.userCard}>
    <h5>{userDetails?.name}</h5>
    <div>
      <h5>contact</h5>
      {userDetails?.username}
    </div>
    <div>
    <h5>city</h5>
    {userDetails?.address?.city}
    </div>
    <div>
    <h5>state</h5>
    {userDetails?.company?.name}
    </div>
    <div className={styles.btn}>
      <Button onClick={() => navigate('/')}>hide Details</Button>
    </div>
     
    </div>
    <Card className={styles.Description}>
      <h3>Description</h3>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, non esse facilis cumque, atque, ullam eos perferendis consectetur laborum nobis voluptatum quo? Nostrum numquam aut tenetur voluptatum repellat incidunt. Autem!</p>
      <div className={styles.Details}>
        <div className="left">
        <div>
      <h5>contactPerson</h5>
      {userDetails?.username}
    </div>
    <div>
      <h5>destination</h5>
      {userDetails?.address?.street}
    </div>
    <div>
      <h5>emails</h5>
      {userDetails?.email}
    </div>
    <div>
      <h5>phone</h5>
      {userDetails?.phone}
    </div>
        </div>
        <div className="right">
        <div>
      <h5>address</h5>
      {userDetails?.username}
    </div>
    <div>
      <h5>city</h5>
      {userDetails?.address?.city}
    </div>
    <div>
      <h5>state</h5>
      {userDetails?.address?.suite}
    </div>
    <div>
      <h5>country</h5>
      {userDetails?.company?.name}
    </div>
        </div>
       
      </div>

    </Card>

   </>)}
    </Card>
  );
};

export default Details;






