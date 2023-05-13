export default function getFullResponseFromAPI(success) {
  return Promise((resolve, reject) => {
    const data = {
      status: 200,
      body: 'Success',
    }
    resolve(data);
    const errormsg = 'The fake API is not working currently';
    reject(errormsg);
  })
}
