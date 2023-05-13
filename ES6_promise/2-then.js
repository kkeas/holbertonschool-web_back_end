export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    if (promise) {
      const data = {
        status: 200,
        body: 'Success',
      }
      console.log('Got a response from the API')
      resolve(data).then((data) => {
        console.log(data);
      });
  } else {
    reject(new Error());
  }})};
