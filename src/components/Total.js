const Total = (props) => {
    const partArray = [...props.parts]; // Creates a new array for parts
    const total = partArray.reduce((total,num)=>{   // Use reduce function to  find sum total of the exercies
        return total+num.exercises;
    },0)

    return(
      <div>
        <p>Number of exercises : {total}</p>
      </div>
    )
  }
  
export default Total;