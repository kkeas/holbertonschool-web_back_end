export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    const data = {
      status: 200,
      body: 'Success',
    }
    resolve(data);
    reject(console.log('The fake API is not working currently'));
  })
}
