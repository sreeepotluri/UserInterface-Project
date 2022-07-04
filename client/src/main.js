export async function fetchData(route='', data={}, methodType) {
    
    const response = await fetch(`http://localhost:5000${route}`, {
      method: methodType, // *GET, POST, PUT, DELETE etc.
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) //body data type must match "Content-Type" header
    });
  
    
    if(response.ok) {
      return await response.json(); // parses JSON response into native JavaScript objects
    } else {
      throw await response.json();
    }
  }