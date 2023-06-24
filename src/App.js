
import './App.css';
import Header from './Header';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import SearchList from './SearchList';
import apiRequest from './apiRequest';
import Component from './Component';


function App() {
  const API_URL = "http://localhost:3500/Goods";


  const [Goods, setGoods] = useState([]);
  const [search, setSearch] = useState('')
  const [newItem, setNewItem] = useState("");
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setisLoading ] = useState(true);
  const [message, setMessage] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if(!response.ok) throw Error("did not recieve the expected data")
        
        const listItems = await response.json();
        console.log(listItems)
        setGoods(listItems);
        setFetchError(null)
  
      } catch (error) {
        setFetchError(error.message);
        
      } finally{
        setisLoading(false)
      }
    }
    setTimeout(() => {
      (async() => await fetchItems())();
    }, 2000)
  }, []);
  





  const addItem = async (item) => {
    const id = Goods.length ? Goods[Goods.length - 1].id + 1: 1;
    const myNewItem = {id, item, img:true};
    const  listItems = [...Goods, myNewItem]
    setGoods(listItems);


    const  postOptions = {
      method: 'POST',
      headers: {
        'content-type' : "application/json"
      },
      body: JSON.stringify(myNewItem)
    }

    const result = await apiRequest(API_URL, postOptions);
    if(result) {
      setFetchError(result);
    setMessage('post added')
    } else {
      setMessage("post not added")

    }
    
  

  }



  




  const HandleCheck = async (id) => {
    const listItems = Goods.map((item) => item.id === id ? {...item,
    checked: !item.checked }: item);
    setGoods(listItems);


    const myItem = listItems.filter((item) => item.id ===id);
    const updateOptions = {
      method : 'PATCH',
      headers: {
        'content-Type' : 'application/json'
      },
      body: JSON.stringify({checked: myItem[0].checked})
    };

    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, updateOptions);
    if (result) setFetchError(result);
  }






  const HandleDelete = async(id) => {
    const listItems = Goods.filter((item) => item.id !==id);
    setGoods(listItems)

    const deleteOptions = { method: 'DELETE'};
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl,deleteOptions);
    if (result)setFetchError(result);
  }



  

  const HandleSubmit = async(e) => {
    e.preventDefault()
    if(!newItem) return;
    addItem(newItem)
    setNewItem('')
  }


  return (
    <div className="App" style={{overflowX:"hidden"}}>
      <Header title = "Available Goods" />

      <Component />

      <h4> You can please add your desired goods here</h4>
      <div className='a' style={{backgroundColor: "royalblue"}}>

        <br /> <br />




        <SearchList 
      search = {search}
      setSearch = {setSearch}
      
      />

      <br /> <br />

        
      <AddItem
      newItem = { newItem}
      setNewItem = { setNewItem }
      HandleSubmit = { HandleSubmit}

      />

      

      <main>
        {isLoading && <p> Loading goods...</p>}
        {fetchError && <p style={{color: "red"}}>'{fetchError}'</p>}

        {!fetchError && !isLoading && <Content
        Goods = {Goods.filter(item => ((item.item).toLowerCase()).includes
        (search.toLocaleLowerCase()))}
        HandleCheck={ HandleCheck}
        HandleDelete={ HandleDelete}
       
        />}
      </main>


      <Footer length={Goods.length} />

      </div>


    </div>
  );
}

export default App;
