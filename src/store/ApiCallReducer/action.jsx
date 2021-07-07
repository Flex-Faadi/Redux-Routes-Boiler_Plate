const getData=()=>{
    return(dispatch)=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json =>  dispatch({type:"GETTODOS",todos:json}))
    }
}

export {
    getData
}