import { useState } from "react";

function PetItem({ pet,handleAdopt }) {
  const [petImg,setpetImg] = useState(pet.image);
  const handlClick =()=>{
    if(petImg ===pet.image){
    setpetImg(pet.image2)}
    else{
      setpetImg(pet.image)
    }

  }
  return (
    <div className="col-lg-4 col-md-8 col-sm-10">
      <div className="single-doctor">
        <img className="image" alt={pet.name} src={petImg} />
        <div className="content">
          <h3>{pet.name}</h3>
          <button type="button" className="btn btn-info" onClick={handlClick}>
            Pet
          </button>
          <button type="button" class="btn btn-info  m-2" onClick={handleAdopt}>
            Adopt
          </button>
        </div>
      </div>
    </div>
  );
}

export default PetItem;
