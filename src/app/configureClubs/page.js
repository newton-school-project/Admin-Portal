"use client"
import {useState, useEffect} from 'react'

const ConfigureClubs = () => {

    const [clubs, setClubs] = useState([]);
    const [filter, setFilter] = useState(0)
    const [filteredClub, setFilteredClub] = useState("Frontend");
    const [values, setValues] = useState({1:'',2:'',3:'',4:'',5:'',6:''})

    useEffect(() => {
        const fetchClubsData = async () => {
          const response = await fetch(
            "https://backend-newton-product-non-admin-1.onrender.com/api/clubs"
          );
          const data = await response.json();
          setClubs(data.data);
        //   console.log(data.data)
          console.log(clubs)
        };
        fetchClubsData();
      }, []);
function handleChange(e , index , type) {

    const updatedClubs = [...clubs]
    const selectedClubs  = updatedClubs[index];
    selectedClubs.devclub[0][type][e.target.name] =  e.target.value
    updatedClubs[index] = selectedClubs;
    setClubs(updatedClubs)  
}

    return (
        <div>

            {/* <nav className="w-[90vw] mx-auto mt-4 h-16 rounded-xl flex flex-row  bg-gradient-to-r from-purple-600/60 to-blue-500/60 items-center justify-evenly">
                
                {clubs?(
                    
                    clubs.map((club,idx)=>{
                        return(
                        <h1 key={idx} className="text-lg hover:bg-white cursor-pointer hover:text-sky-400 rounded-xl py-2 px-4 text-white font-bold">{club.devclub[0].Technology}</h1>
                        )
                    })
 
                ):(<></>)}

            </nav> */}

            

            <div className='w-full justify-evenly'>
    {clubs ? (

        clubs.map((club, idx) => {
            console.log(club.devclub[0]);
            return (
 
                <div key={idx} className='bg-slate-200'>
                    
                    <h1 key={idx} className="text-2xl mb-16 text-center underline bg-black/10 cursor-pointer hover:text-sky-400 rounded-xl py-2 px-4 text-slate-500 font-bold">{club.devclub[0].Technology}</h1>
                    
                    <div className='flex flex-row justify-evenly '>
                        <div className='flex flex-col items-center '>
                            <button className='absolute right-16 mt-[-20px] text-xl bg-red-500 text-white px-4 py-2 rounded-2xl'>Sync</button>
                        <img className=' rounded-full w-36 border border-gray-300' src={club.devclub[0].President.Image} alt='President'/>
                        <h1 className='text-black text-xl text-center font-bold mt-4' >President</h1>

                        {/* <input onChange={(e) => setClubs((prev) => ({...prev, devclub: [{ ...prev.devclub[0], President: { ...prev.devclub[0].President, Name: e.target.value } }],}))}
                                className="text-black text-xl text-center border border-gray-300 font-medium mt-4"
                                value={club?.devclub?.[0]?.President?.Name}
                        /> */}
                                <input onChange={(e)=>handleChange(e ,idx , 'President')}
                                name="Name"
                                className="text-black text-xl text-center border border-gray-300 font-medium mt-4"
                                value={club?.devclub?.[0]?.President?.Name}
                        />
           </div>
                        <div className='flex flex-col items-center '>
                        <img className='rounded-full w-36 border border-gray-300' src={club.devclub[0].Vice_President.Image} alt='President'/>
                        <h1 className='text-black text-xl text-center font-bold mt-4' >Vice-President</h1>
                        <input onChange={(e)=>handleChange(e ,idx , 'Vice_President')} className='text-black text-xl text-center border border-gray-300 font-medium mt-4' value={club.devclub[0].Vice_President.Name}/>
                        </div>
                    </div>
                    <div className='flex flex-row justify-evenly mt-16'>
 
                    <div className='flex flex-col items-center '>
                    <img className='rounded-full w-24 border border-gray-300' src={club.devclub[0].Core1.Image} alt='President'/>
                    <h1 className='text-black text-xl text-center font-bold mt-4' >Core Member 1</h1>
                    <input onChange={(e)=>handleChange(e ,idx , 'Core1')} className='text-black text-xl text-center border border-gray-300 font-medium mt-4' value={club.devclub[0].Core1.Name}/>
                    </div>
                    <div className='flex flex-col items-center '>
                    <img className='rounded-full w-24 border border-gray-300' src={club.devclub[0].Core2.Image} alt='President'/>
                    <h1 className='text-black text-xl text-center font-bold mt-4' >Core Member 2</h1>
                    <input  onChange={(e)=>handleChange(e ,idx , 'Core2')} className='text-black text-xl text-center border border-gray-300 font-medium mt-4' value={club.devclub[0].Core2.Name}/>
                    </div>
                    <div className='flex flex-col items-center '>
                    <img className='rounded-full w-24 border border-gray-300' src={club.devclub[0].Core3.Image} alt='President'/>
                    <h1 className='text-black text-xl text-center font-bold mt-4' >Core Member 3</h1>
                    <input onChange={(e)=>handleChange(e ,idx , 'Core3')} className='text-black text-xl text-center border border-gray-300 font-medium mt-4' value={club.devclub[0].Core3.Name}/>
                    </div>
                    <div className='flex flex-col items-center '>
                    <img className='rounded-full w-24 border border-gray-300' src={club.devclub[0].Core4.Image} alt='President'/>
                    <h1 className='text-black text-xl text-center font-bold mt-4' >Core Member 4</h1>
                    <input  onChange={(e)=>handleChange(e ,idx , 'Core4')} className='text-black text-xl text-center border border-gray-300 font-medium mt-4' value={club.devclub[0].Core4.Name}/>

                    </div>


                    </div>
                    <hr className='mt-8 mb-8'></hr>

                </div>
                
            );
        })
    ) : (

        <></>
    )}
</div>




        </div>
    )

}


export default ConfigureClubs