import config from '../config';
const ULR_VIDEOS = `${config.URL_API}/videos`;
function create(video) {
  return fetch(`${ULR_VIDEOS}?_embed=videos`, {
    method:'POST',
    headers:{
      'Content-type':'application/json'
    },
    body:JSON.stringify(video)
  })
    .then(async(response)=>{
      if(response.ok){
        return await response.json();
      }
      throw new Error('Não foi possível pegar os dados');
    })
}
export default {
  create,
}