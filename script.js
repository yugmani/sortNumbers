//Array of numbers to sort
const array = [65, -6, 55, 96, 85, 12]


//function calls to sort the numbers
originalArray(array);
sorting(array);
deSorting(array);

//function to sort the numbers in ascending order.
function sorting(arr){

    for (let i=0; i<arr.length; i++){

        for (let j=i; j<arr.length; j++){
            if (arr[i] > arr[j]){
                let bigger = arr[i];
                arr[i] = arr[j];
                arr[j] = bigger;
            }
        } 
    }
    const ascendingEl = document.getElementById("ascending");
    let html = `<ul>`;
    arr.forEach((item, index)=> {
        html += `<li>${item}</li>`;
    });
    // html += `<ul>`;
    ascendingEl.innerHTML = html;    
}   

//function to sort the numbers in descencing order
function deSorting(arr){

    for (let i=0; i<arr.length; i++){
        for (let j=i; j<arr.length; j++){
            if (arr[i] < arr[j]){
                let bigger = arr[i];
                arr[i] = arr[j];
                arr[j] = bigger;
            }
        } 
    }
    const descendingEl = document.getElementById("descending");
    let html = `<ul>`;
    arr.forEach((item, index)=> {
        html += `<li>${item}</li>`;
    });
    // html += `<ul>`;
    descendingEl.innerHTML = html;
} 

//function to display original array in the page
function originalArray(arr) {
    const originalEl = document.getElementById("original");
    let ht = `<ul>`; 
    arr.forEach((item, index)=> {
        ht += `<li>${item}</li>`;
    });
    // ht += `<ul>`;
    originalEl.innerHTML = ht;
}


