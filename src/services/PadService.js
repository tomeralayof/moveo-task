export const PadService = {
query,
findById,
save
};

//array of objects for evrry pad.
const gPads =[
  {
    id:_makeId(),
    isActive: false,
    audio: new Audio('/media/media1.mp3')
  },
  {
    id:_makeId(),
    isActive: false,
    audio: new Audio('/media/media2.mp3')
  },
  {
    id:_makeId(),
    isActive: false,
    audio: new Audio('/media/media3.mp3')
  },
  {
    id:_makeId(),
    isActive: false,
    audio: new Audio('/media/media4.mp3')

  },
  {
    id:_makeId(),
    isActive: false,
    audio: new Audio('/media/media5.mp3')
  },
  {
    id:_makeId(),
    isActive: false,
    audio: new Audio('/media/media6.mp3')
  },
  {
    id:_makeId(),
    isActive: false,
    audio: new Audio('/media/media7.mp3')
  },
  {
    id:_makeId(),
    isActive: false,
    audio: new Audio('/media/media8.mp3')
  },
  {
    id:_makeId(),
    isActive: false,
    audio: new Audio('/media/media9.mp3')
  }
]

//provide randon id for every id key inside the array.
function _makeId(){
  let id = "";
  let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for(let i=0;i<5;i++){
    id+=possible.charAt(Math.floor(Math.random()*possible.length));
  }
  return id;
};

//return the array of objects.
function query(){
 return gPads;
}

function findById(id){
  return gPads.find(pad=>{
    return pad.id === id
  })
}

function save(padToSave){
  const idx = gPads.findIndex(pad =>{
    return pad.id === padToSave.id
  })
  gPads[idx] = padToSave
  return gPads
}


