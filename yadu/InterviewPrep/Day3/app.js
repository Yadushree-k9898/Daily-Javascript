function sort012(arr){
    return arr.sort((a, b) => a - b)
}

console.log(sort012([0,2,1,2,0,1,0]))



function sort012(arr){
    let low = 0, mid = 0, high = arr.length - 1

    while(mid <= high){
        if(arr[mid] === 0){
            [arr[low], arr[mid]] = [arr[mid], arr[low]]
            low++; mid++
        }else if(arr[mid] === 1){
            mid++
        } else{
            [arr[mid], arr[high]] = [arr[high], arr[mid]]
            high--
        }
    }
    return arr
}

console.log(sort012([0,2,1,2,0,1,0]));


function moveNegatives(arr){
    let negatives = arr.filter(x => x < 0)
    let positives = arr.filter(x => x >= 0)
    return [...negatives, ...positives]
}

console.log(moveNegatives([-1,2,-3,4,-5]))

function moveNegatives(arr){
    let negatives = arr.filter(x => x < 0);
    let positives = arr.filter(x => x >= 0)
    return [...negatives, ...positives]
}

console.log(moveNegatives([-1,2,-3,4,-5]));


function moveNegatives(arr){
    let left = 0, right = arr.length - 1;

    while(left <= right){
        if(arr[left] < 0 && arr[right] >=0){
            left++; right--;

        }else if (arr[left] >= 0 && arr[right] < 0){
            [arr[left], arr[right]] = [arr[right], arr[left]]
            left++; right--
        } else if (arr[left] < 0){
            left++
        }else{
            right--
        }
    }
    return arr
}

console.log(moveNegatives([-1, 2, -3, 4, -5]));


function moveNegatives(arr){
    let left =0, right= arr.length-1;

    while(left <= right){
        if(arr[left] < 0 && arr[right] >=0){
            left++; right--
        } else if(arr[left] >= 0 && arr[right] < 0){
            [arr[left], arr[right]] = [arr[right], arr[left]]
            left++; right--
        } else if(arr[left] < 0){
            left++
        }else{
            right--
        }
    }
    return arr
}

console.log(moveNegatives([-1,2,-3,4,-5]));


function union(arr1, arr2){
    let i = 0, j = 0, result = [];

    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]) result.push(arr1[i++])
        else if  (arr1[i] > arr2[j]) result.push(arr2[j++])
        else { result.push(arr1[i]); i++; j++}
    }

    while(i < arr1.length) result.push(arr1[i++])
    while(j < arr2.length) result.push(arr2[j++])

    return [...new Set(result)]
}


console.log(union([1,2,4,5], [2,3,5,6]));


function intersection(arr1, arr2){
    let i = 0, j = 0, result = [];

    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            i++
        }else if(arr1[i] > arr2[j]){
            j++
        }else{
            result.push(arr1[i])
            i++; j++
        }
    }
    return result
}

console.log(intersection([1,2,4,5], [2,3,5,6]));
