import Pet from "./Pet"

const Result = ({pets}) => {


    return (
        <div className="search">
            {/* if pets array has no length */}
            {!pets.length ? (
                <h1>No Pets Found!</h1> 
            ) : 
            pets.map(pet => (
                <Pet 
                    name={pet.name}
                    animal={pet.animal}
                    breed={pet.breed}
                    images={pet.images}
                    location={`${pet.city}, ${pet.state}`}
                    key={pet.id}
                />
            ))}

        </div>
    )
}

export default Result;