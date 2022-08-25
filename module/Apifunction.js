 class Api {
   static setData = (url,Name,Score)=>{
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({ 
        "user": `${Name.value}`,
        "score": Score.value
    }),
      headers: {
          'Content-type': 'application/json; charset=UTF-8',
      },
  })
      .then((response) => response.json())
      .then((json) => console.log(json));
   }

   static getData = async (url) => {
        let response= await fetch(url)
        response = await response.json();
         return response;
     }

     static deleteApi = (url)=>{
        fetch(url, {
          method: 'DELETE',
       });
       console.log('in delte');
    }
}

export default Api;