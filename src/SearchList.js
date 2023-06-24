import React from 'react'

const SearchList = ({search, setSearch})  => {
  return (
    <form style={{marginTop: "7%"}} className='searchform' onSubmit={(e) => e.preventDefault()}>
        <label style={{paddingRight: "2%"}} htmlFor='search'>Search</label>
        <input style={{ borderRadius: "10%", width: '30%', height: "30px"}}
        type="text" 
        id='search'
        role='searchbox'
        placeholder='search for goods you selected here'
        value={search}
        onChange={(e) => setSearch(e.target.value)}/>
        


    </form>

   
  )
}

export default SearchList
