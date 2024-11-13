import { useState } from "react";
import pets from "../petsData";
import PetItem from "./PetItem";
import PetSearch from "./PetSearch";
import PetSelector from "./PetSelector";

function PetsList() {
  const [petsState,setpetsState] = useState(pets)
  const [query,setQuery] = useState("");
  const [type,setType] =useState("");

const handleAdopt =(petId)=> {
  console.log("first")
 

 setpetsState( petsState.filter(pet=>pet.id!==petId));
};

  const petList = petsState.filter((pet)=>(pet.name.toLowerCase().includes(query))&&pet.type.includes(type)).map((pet) => <PetItem pet={pet} key={pet.id} handleAdopt={()=>handleAdopt(pet.id)} />);
const petSearch = (e)=>(setQuery(e.target.value.toLowerCase()));
const petSelector =(e)=>(setType(e.target.value));
  return (
    <section id="doctors" className="doctor-section pt-140">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xxl-5 col-xl-6 col-lg-7">
            <div className="section-title text-center mb-30">
              <h1 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
                Fur-ends
              </h1>
        <PetSearch petSearch={petSearch}/>
              <br />
              Type:
             <PetSelector petSelector={petSelector}/>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">{petList}</div>
      </div>
    </section>
  );
}

export default PetsList;
