import { useState,useEffect } from 'react';
import UserCard from './UserCard';
import Card from './../UI/Card';
import ReactPaginate from 'react-paginate';


const UserList = () => {
  const [users ,setUsers] =  useState([])
  const [isLoading, setIsLoading] = useState(false);

  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage=3
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = users.length && users.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(users.length / itemsPerPage);
 
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % users.length;
    
    setItemOffset(newOffset);
  };

  useEffect(()=>{
    (async()=>{
      setIsLoading(true)

      try {
          const res = await fetch('https://jsonplaceholder.typicode.com/users')
          const data = await res.json()
          setUsers(data)
          setIsLoading(false)
    
      }
       catch (error) { 
        setIsLoading(false)
    
      }})()
    },[])
    const userData= currentItems && currentItems.map((user)=>(
      <UserCard key={user.id} data={user}/>
    ))

 
 
  return (
  <>
  <Card>
    {isLoading?<p>loading</p>:<>
    {userData} 
   <ReactPaginate
   breakLabel="..."
   nextLabel="next >"
   onPageChange={handlePageClick}
   pageRangeDisplayed={3}
   pageCount={pageCount}
   previousLabel="< previous"
   renderOnZeroPageCount={null}
   pageClassName='page-num'	
   pageLinkClassName='page-num'		
   activeClassName='page-num'	
   activeLinkClassName='active'
 />
    </>}
 
 </Card>
  
  </>);
};

export default UserList;
