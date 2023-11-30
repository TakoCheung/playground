function pairSum(nums, k) {
	const ret = [];
	const seen = new Set(); // To track numbers we've seen
	const addedPairs = new Set(); // To track pairs we've added to result

	for (const num of nums) {
		const complement = k - num;
		// console.log("num-complement", `${num}-${complement}`);
		// console.log("addedPairs", addedPairs);
		// console.log("seen", seen);
		// console.log("--------------------");
		if (
			seen.has(complement) &&
			!addedPairs.has(`${num}-${complement}`) &&
			!addedPairs.has(`${complement}-${num}`)
		) {
			ret.push([Math.min(num, complement), Math.max(num, complement)]);
			addedPairs.add(`${num}-${complement}`);
		}
		seen.add(num);
	}

	return ret;
}

function isPalindrome(s) {
	let normalizedString = s.replaceAll(/\W||\D/g, "").toLowerCase();
	const reverseS = normalizedString.split("").reverse().join("");
	// console.log(s , normalizedString, reverseS)
	return reverseS === normalizedString;
}

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function mergeIntervalsFromMe(intervals) {
	// Your code here
	let ret = [];
	const arrage = [];
	for (let i = 0; i < intervals.length; i++) {
		intervals[i].sort((a, b) => {
			return a > b ? 1 : 0;
		});
		arrage.push(intervals[i][0]);
		arrage.push(intervals[i][1]);
	}
	for (let index = 0; index < arrage.length - 1; index++) {
		if (arrage[index] >= arrage[index + 1]) {
			arrage.splice(index, index + 1);
		}
	}

	ret = arrage.reduce((accumulator, currentValue, index, array) => {
		if (index % 2 == 0 && index < array.length - 1) {
			accumulator.push([array[index], array[index + 1]]);
		}
		return accumulator;
	}, []);

	return ret;
}

function mergeIntervals(intervals) {
	// Sort intervals by starting times
	intervals.sort((a, b) => a[0] - b[0]);

	const merged = [];
	for (let i = 0; i < intervals.length; i++) {
		// If the list of merged intervals is empty or if the current
		// interval does not overlap with the previous, simply append it.
		if (merged.length === 0 || merged[merged.length - 1][1] < intervals[i][0]) {
			merged.push(intervals[i]);
		} else {
			// Otherwise, there is overlap, so we merge the current and previous
			// intervals by updating the end time of the previous interval if needed.
			merged[merged.length - 1][1] = Math.max(
				merged[merged.length - 1][1],
				intervals[i][1]
			);
		}
	}

	return merged;
}

// document.addEventListener("DOMContentLoaded", function () {
// 	const lazyImages = [].slice.call(document.querySelectorAll("img.lazy-load"));
// 	lazyImages.forEach(function (lazyImage) {
// 		lazyImage.src = lazyImage.dataset.src;
// 		lazyImage.classList.remove("lazy-load");
// 	});
// });

function sortEvenNumbers(arr) {
	// Your code here
	return arr.filter((n) => n % 2 === 0).sort((a, b) => a - b);
}

function stringStats(str) {
	const totalChars = str.length;
	const lowerCaseStr = str.toLowerCase();
	const hashMap = new Map();

	for (const char of lowerCaseStr) {
		const currentCount = hashMap.get(char) || 0;
		hashMap.set(char, currentCount + 1);
	}

	let popular = "";
	let max = 0;
	for (const [char, count] of hashMap) {
		if (count > max) {
			max = count;
			popular = char;
		}
	}

	return {
		totalChars: totalChars,
		uniqueChars: hashMap.size,
		mostFrequentChar: popular,
	};
}

function rotateArray(arr, num) {
	const normalizedNum = num % arr.length;
	// console.log(normalizedNum);
	const ret = [];
	for (let index = normalizedNum - 1; index < arr.length; index++) {
		const element = arr[index];
		// console.log(element)
		ret.push(element);
	}
	for (let index = 0; index < normalizedNum - 1; index++) {
		const element = arr[index];
		// console.log(element)
		ret.push(element);
	}
	return ret;
}

function secondHighestAndLowest(arr) {
	arr.sort((a, b) => a - b);
	return [arr[1], arr[arr.length - 2]];
}
function flattern(arr) {//[1, [2, [3, [4, 5]]], 6]
	const ret = [];
	flatternHelper(arr, ret);
	console.log(ret);
}

function flatternHelper(nestedArr, ret) {
	for (const ele of nestedArr) {
		// console.log(ele);
		if (Array.isArray(ele)) {
			flatternHelper(ele, ret);
		} else {
			ret.push(ele);
		}
	}
}

function findByKey(arr, key) {//[{"b":"banana"}, {"a":"apple"}, {"k":"kiwi"}, {"g":"grape"}, {"g":"google"}]
	const result = [];
	for (const ele of arr) {
		if (key in ele) {
			result.push(ele[key]);
		}
	}
	return result;
}

function dateComparison(date1, date2) {
  if (isNaN(Date.parse(date1)) || isNaN(Date.parse(date2))) {
    console.error("Invalid date format. Please use 'YYYY-MM-DD'.");
    return null; // or another appropriate value indicating an error
  } 

  const dateObject1 = new Date(date1).getTime();
  const dateObject2 = new Date(date2).getTime();
  return Math.abs(dateObject1 - dateObject2) / (3600000 * 24);
}

function reverse(str){
  return str.split('').reverse().join('');
}

function ordinalForm(num) {//1111
  const lastDigit = num % 10;
  const lastTwoDigits = num % 100;

  if (lastTwoDigits === 11 || lastTwoDigits === 12 || lastTwoDigits === 13) {
    return `${num}th`;
  }

  switch (lastDigit) {
    case 1:
      return `${num}st`;
    case 2:
      return `${num}nd`;
    case 3:
      return `${num}rd`;
    default:
      return `${num}th`;
  }
}

function theUniqueChar(str) {//"Hollow Woorld!!"
  const charArray = str.split('');
  const hashMap = new Map();

  for (const char of charArray) {
    const currentCount = hashMap.get(char) || 0;
    hashMap.set(char, currentCount + 1);
  }

  for (const [char, count] of hashMap) {
    if (count === 1) {
      return char;
    }
  }

  return null;
}

// function longestConsecutiveSequences(arr){
//   arr.sort((a,b) => a-b);
//   let result = 1;
//   let prev = arr[0];
//   for(const ele of arr){
//     if(ele - prev === 1){
//       result++;
//     }
//     prev = ele;
//   }
//   return result;
// }

function longestConsecutiveSequence(arr) {
  const numSet = new Set(arr);
  let longestStreak = 0;
  console.log(numSet);
  for (const number of arr) {
    if (!numSet.has(number - 1)) { // Check if it's a start of a new sequence
      let currentNumber = number;
      let currentStreak = 1;

      while (numSet.has(currentNumber + 1)) {
        currentNumber += 1;
        currentStreak += 1;
      }

      longestStreak = Math.max(longestStreak, currentStreak);
    }
  }

  return longestStreak;
}

function sortWithDistinctCharsAndLengthT(arr){//["banana", "apple", "kiwi", "grape"]
  return arr.sort((a , b) => {
    const distinctCharsOfa = new Set();
    const distinctCharsOfb = new Set();
    for(const letter of a){
      if(!distinctCharsOfa.has(letter))
        distinctCharsOfa.add(letter)
    }
    for(const letter of b){
      if(!distinctCharsOfb.has(letter))
        distinctCharsOfb.add(letter)
    }
    if(distinctCharsOfa.size == distinctCharsOfb.size){
      return a.length - b.length
    }else{
      return distinctCharsOfa.size - distinctCharsOfb.size
    }
  })
}

function sortWithDistinctCharsAndLength(arr) {//["banana", "apple", "kiwi", "grape"]
  // Precompute distinct character counts
  const charCountMap = new Map();
  arr.forEach(str => {
    const distinctChars = new Set(str);
    charCountMap.set(str, distinctChars.size);
  });

  return arr.sort((a, b) => {
    const distinctA = charCountMap.get(a);
    const distinctB = charCountMap.get(b);

    if (distinctA === distinctB) {
      if (a.length === b.length) {
        return a.localeCompare(b); // Lexicographical sort in case of a complete tie
      }
      return a.length - b.length;
    }
    return distinctA - distinctB;
  });
}

function sumWIthNoAdjacent(arr){//[2, 4, 6, 2, 5]
  const distinctNums = new Map();
  let result = 0;
  const idxAdded = new Set();
  for(const ele of arr){
    distinctNums.set(ele, []);
  }
  for (let index = 0; index < arr.length; index++) {
    const currentElement = distinctNums.get(arr[index])
    // console.log("arr[index]", arr[index] , "distinctNums.get(arr[index])", distinctNums.get(arr[index]));
    currentElement.push(index)
    distinctNums.set(arr[index], currentElement);
  }
  arr.sort((a,b)=>b-a)
  // console.log(arr);
  
  for(let index = 0; index < arr.length; index++){
    const next = distinctNums.get(arr[index])[0] + 1;
    const prev = distinctNums.get(arr[index])[0] - 1;
    const currentIndex = distinctNums.get(arr[index])[0];
    // console.log(`next:${next} | prev:${prev} | currentIndex:${currentIndex}`)
    if(!idxAdded.has(currentIndex + 1) && !idxAdded.has(currentIndex - 1)){
      result += arr[index];
      idxAdded.add(distinctNums.get(arr[index]).shift())
    }
  }
  // console.log(distinctNums);
  // console.log(idxAdded);
  return result;
  // console.log("distinctNums", distinctNums, "arr", arr, "distinctNums.get(2)", distinctNums.get(2));
}
function sumWIthNoAdjacentGuided(arr){//[2, 4, 6, 2, 5]
  let include = 0;
  let exclude = 0;

  for (let i = 0; i < arr.length; i++) {
    let newInclude = exclude + arr[i];
    console.log("i", i, "currentValue" , arr[i], "include", include, "exclude", exclude, "exclude + arr[i]", newInclude)
    exclude = Math.max(include, exclude);
    // console.log("i", i, "exclude", exclude)
    include = newInclude;
    // console.log("i", i, "include", include)
  }

  return Math.max(include, exclude);
}

const longestSubstring = str => {
  let map = new Map();
  let start = 0; // start of the current window
  let maxLength = 0;
  let longestSubstr = '';

  for (let end = 0; end < str.length; end++) {
    if (map.has(str[end])) {
      // Move the start of the window past the first occurrence of str[end]
      start = Math.max(start, map.get(str[end]) + 1);
    }
    map.set(str[end], end);

    // Update maxLength and longestSubstr if a longer substring is found
    if (end - start + 1 > maxLength) {
      maxLength = end - start + 1;
      longestSubstr = str.substring(start, end + 1);
    }
  }
  return longestSubstr;
};

const ls = str => {
  let map = new Map(), start = 0, current = '';
  for (let i = 0; i < str.length; i++) {
    console.log("map.has(str[i]):", map.has(str[i]), "map:", map,"map.get(str[i])")
    start = map.has(str[i]) ? Math.max(map.get(str[i])+1, longestStringLength) : start;
    map.set(str[i], i);
    current = i - start + 1 > current.length ? str.substring(longestStringLength, i + 1) : current;
    console.log("str[i]:", str[i], map.get(str[i]), "current:" , current, "i:", i, "longestStringLength:", start, "i - start + 1:", i - longestStringLength + 1 )
    console.log('-------------------------------')
  }
  return current;
};

function findSmallestMissingPositive(arr) {
  const nums = new Set(arr);
  
  for (let i = 1; ; i++) {
    if (!nums.has(i)) {
      return i;
    }
  }
}

function findDistinctQuadruplets(arr, target){
  const result = new Map();
  if (arr.length < 4){
    throw 'input arr is too small'
  }
  let a = 0,b = 1,c = 2,d = 3;
  arr.sort((a,b)=>a-b);
  console.log("arr",arr)
  while (d < arr.length) {
    // const toBeAdded = arr[a] + arr[b] + arr[c] + arr[d]
    // if(actual === target){
    const key = [ arr[a], arr[b], arr[c], arr[d]];
    const value = arr[a] + arr[b] + arr[c] + arr[d]
    if(!result.has(key))
      result.set(key, value)
    // }
    d++;
  }
  d--;
  while (c < d) {
    // const actual = arr[a] + arr[b] + arr[c] + arr[d]
    // if(actual === target){
      // result.add([ arr[a], arr[b], arr[c], arr[d]])
    // }
    const key = [ arr[a], arr[b], arr[c], arr[d]];
    const value = arr[a] + arr[b] + arr[c] + arr[d]
    if(!result.has(key))
      result.set(key, value)
    c++;
  }
  c--;
  while (b < c) {
    // const actual = arr[a] + arr[b] + arr[c] + arr[d]
    // if(actual === target){
      // result.add([ arr[a], arr[b], arr[c], arr[d]])
    // }
    const key = [ arr[a], arr[b], arr[c], arr[d]];
    const value = arr[a] + arr[b] + arr[c] + arr[d]
    if(!result.has(key))
      result.set(key, value)
    b++;
  }
  b--;
  while (a < b) {
    // const actual = arr[a] + arr[b] + arr[c] + arr[d]
    // if(actual === target){
      // result.add([ arr[a], arr[b], arr[c], arr[d]])
    // }
    const key = [ arr[a], arr[b], arr[c], arr[d]];
    const value = arr[a] + arr[b] + arr[c] + arr[d]
    if(!result.has(key))
      result.set(key, value)
    a++;
  }
  a--;
  return result;
}
console.log(findDistinctQuadruplets([1, 0, -1, 0, -2, 2], 0));
