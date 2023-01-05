type DishInfo = {
    name:string;
    description:string;
    category:string;
    preparation_time:number;
}

const MainDish = ({...info}:DishInfo)=>{
    return(
        <div className="w-full px-4 py-24" style={{backgroundImage:"url('https://dummyimage.com/600x300')"}}>
            <div className="w-11/12 mx-auto flex flex-col gap-2 items-center px-8 py-12 text-[white] bg-[#070804]/70 backdrop-blur-sm rounded-xl">
                <h1 className="self-center text-6xl font-bold uppercase">{info.name}</h1>
                <h2 className="self-center text-3xl">{info.description}</h2>
                <div className="flex gap-4 justify-center text-xl">
                    <h3>{info.category}</h3>
                    -
                    <h3>Time: {info.preparation_time}m</h3>
                </div>
                
            </div>
           
        </div>
    )
}

export default MainDish;