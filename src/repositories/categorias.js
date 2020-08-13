import config from '../config';
const ULR_CATEGORIES = `${config.URL_API}/categorias`;
function getAllWithVideos() {
  return fetch(`${ULR_CATEGORIES}?_embed=videos`)
    .then(async(response)=>{
      if(response.ok){
        return await response.json();
      }
      throw new Error('Não foi possível pegar os dados');
    })
}
function getAll() {
  return fetch(`${ULR_CATEGORIES}`)
    .then(async(response)=>{
      if(response.ok){
        return await response.json();
      }
      throw new Error('Não foi possível pegar os dados');
    })
}
function create(categoria) {
  return fetch(`${ULR_CATEGORIES}`, {
    method:'POST',
    headers:{
      'Content-type':'application/json'
    },
    body:JSON.stringify(categoria)
  })
  .then(async(response)=>{
    if(response.ok){
      return await response.json();
    }
    throw new Error('Não foi possível pegar os dados');
  })
}
export default {
  getAllWithVideos,
  getAll,
  create
}