export const Card = (props) =>{

    return (
        <div className="border rounded-lg border-gray-400 p-6 flex max-w-max items-center">
            <img className="border rounded-md" src = {props.image}/>
            <div className="space-y-3 pl-6 text-left">
                <h2 className="font-medium text-2xl">{props.firstName} {props.lastName}</h2>
                <p className="text-lg">Gender: {props.gender}</p>
                <p className="text-lg">Phone Number: {props.phoneNumber}</p>
            </div>
        </div>
    )
}