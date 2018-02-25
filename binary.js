let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]

//search for element in array. Console logs position in array
console.log(binarySearch(primes,31))

//function that returns index for element n in an array
function binarySearch(array,n){
  //define the min and max index of the array in both extremes
  let min = 0;
	let max = array.length - 1;

  let guess;

    while(min <= max){
        //take the element in the middle between min and max as guess
        guess = min+Math.floor((max-min)/2);
        console.log("min: "+min+", max: "+max+", guess: "+guess+", array[guess]: "+array[guess])

        //if guess is correct, return the index
        if(array[guess]==n){
          return guess;
        }
        //if guess is smaler, redefine the min value
        else if(array[guess]<n){
            min = guess + 1;
        }
        else{
            max = guess - 1;
        }
    }
  //-1 if not present in the array
	return -1;
}
