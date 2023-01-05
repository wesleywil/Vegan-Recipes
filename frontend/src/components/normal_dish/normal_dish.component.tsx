type DishInfo = {
    name:string;
    description:string;
    category:string;
    preparation_time:number;
}

const NormalDish = ({...info}:DishInfo)=>{
    return(
        <div className="w-64 h-64 p-4 rounded-2xl border-2 border-[#358546]" style={{backgroundImage:"url('https://dummyimage.com/600x300')"}}>
            <div className="w-full h-full text-[#070804] bg-[#358546] flex flex-col items-center justify-between  rounded-xl">
            <h1 className="text-3xl font-semibold">{info.name}</h1>
            <h2 className="hidden">{info.description}</h2>
            <h3>{info.category} - {info.preparation_time}m</h3>
            </div>
           
        </div>
    )
}

export default NormalDish;