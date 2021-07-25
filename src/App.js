import {useState } from 'react';
import './App.css';
import JsonData from './Data.json';
//import axios from 'axios' ;
import ReactPaginate from 'react-paginate';
import Header from './Header';

function App() {
const[users]=useState(JsonData);
const[currentPage, setCurrentPage]=useState(0);

const usersPerPage=2
const pageVisited= currentPage * usersPerPage;

const displayUsers= users.slice(pageVisited, pageVisited +usersPerPage).map((user)=>{
return(
  <div className="user">
      <h2>{user.first_name} {user.last_name}</h2>
      <h3>{user.email}</h3>
      <img src={user.avatar} alt=""/>
      </div>
)})
const pageCount= Math.ceil(users.length/usersPerPage)
const changePage=({selected})=>{

  setCurrentPage(selected);
}

  return (
    <div className="App">
    <Header/>
       {displayUsers}
       <ReactPaginate
       previousLabel={"Previous"}
       nextLabel={"Next"}
       pageCount={pageCount}
       onPageChange={changePage}
      containerClassName={"paginationBttns"}
      previousLinkClassName={"previousBttn"}
      nextLinkClassName={"nextBtnn"}
      disabledClassName={"paginationDisabled"}
      activeClassName={"paginationActive"}

       />
    </div>
  );
}

export default App;
