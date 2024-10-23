// 判断每一个宫格可以填哪些数字
function shudu(arr) {
	let flag = false;
	for(let i=0; i<arr.length;i++) {
		for(let j=0;j<arr[i].length;j++) {
			if(arr[i][j] === 0 || Array.isArray(arr[i][j])) {
				const tmpArr  = [];
				for(let l=0;l<=8;l++) {
					if(typeof arr[i][l] === "number" && arr[i][l] !== 0) {
						tmpArr.push(arr[i][l]);
					}
					if(typeof arr[l][j] === "number" && arr[l][j] !== 0) {
						tmpArr.push(arr[l][j]);
					}
				}
				let index1 = Math.floor(i/3);
				let index2 = Math.floor(j/3)+1;
				let num = index1*3 + index2;
				for(let b = smallGrid[num][0]; b <= smallGrid[num][1]; b++) {
					for(let t = smallGrid[num][2]; t <= smallGrid[num][3]; t++) {
						if(typeof arr[b][t] === "number" && arr[b][t] !== 0) {
							tmpArr.push(arr[b][t]);
						}
					}
				}
				let newArr = [];
				for(let p = 1;p <= 9; p++) {
					if(tmpArr.indexOf(p) === -1) {
						newArr.push(p);
					}
				}
				if(newArr.length === 1) {
					arr[i][j] = newArr[0];
					flag = true;
				} else {
					arr[i][j] = newArr;
				}
			}
		}
	}
	nameArr = JSON.parse(JSON.stringify(arr));
	if(flag) {
		shudu(arr);
	}
	return nameArr;
}

function judgeArr(arr, nameArr) {
	// 找到第一个数组
	let first,row, col;
	for(let i=0; i<arr.length;i++) {
		for(let j=0;j<arr[i].length;j++) {
			if(Array.isArray(arr[i][j])) {
				first = nameArr[i][j];
				row = i;
				col = j;
				break;
			}
		}
		if(first) {
			break;
		}
	}
	for(let i=0;i<first.length;i++) {
		let newArr = JSON.parse(JSON.stringify(arr));
		newArr[row][col] = first[i];
		const aaa = shudu(newArr);
		if(isError(newArr)) {
			continue;
		} else {
			if(isEnd(newArr)) {
				outPut(newArr);
			} else {
				judgeArr(newArr, aaa);
			}
		}
	}
}

function isEnd(arr) {
	for(let i=0; i<arr.length;i++) {
		for(let j=0;j<arr[i].length;j++) {
			if(Array.isArray(arr[i][j]) || arr[i][j] === 0) {
				return false;
			}
		}
	}
	return true;
}

function isError(arr) {
	for(let i=0; i<arr.length;i++) {
		for(let j=0;j<arr[i].length;j++) {
			if(Array.isArray(arr[i][j]) && arr[i][j].length === 0) {
				return true;
			}
		}
	}
	return false;
}

const smallGrid = {
	1: [0,2,0,2],
	2: [0,2,3,5],
	3: [0,2,6,8],
	4: [3,5,0,2],
	5: [3,5,3,5],
	6: [3,5,6,8],
	7: [6,8,0,2],
	8: [6,8,3,5],
	9: [6,8,6,8],
}

// const arr = [
// 	[4,9,0,0,0,0,0,0,1],
// 	[3,0,0,8,0,0,0,6,0],
// 	[0,5,0,0,0,9,7,0,0],
// 	[0,0,0,0,1,0,0,4,0],
// 	[0,8,0,0,3,0,0,7,0],
// 	[0,6,0,0,5,0,0,0,0],
// 	[0,0,9,6,0,0,0,3,0],
// 	[0,3,0,0,0,7,0,0,6],
// 	[6,0,0,0,0,0,0,1,2],
// ]

const arr = [
	[0,7,0,0,0,0,0,1,8],
	[5,0,0,0,0,0,0,7,0],
	[0,1,0,0,0,6,2,5,0],
	[0,0,2,9,0,0,0,0,0],
	[4,3,0,1,8,2,0,0,9],
	[1,8,0,4,6,0,0,0,0],
	[6,0,0,3,5,0,0,0,1],
	[0,0,0,8,0,0,0,9,0],
	[8,0,0,6,0,4,0,0,5],
]

let nameArr;

const outPut = function (arr) {
	for(let i=0; i<arr.length;i++) {
		let str = '';
		for(let j=0;j<arr[i].length;j++) {
			if(Array.isArray(arr[i][j])) {
				str += JSON.stringify(arr[i][j]) + ' ';
				// console.log(JSON.stringify(arr[i][j]))
			} else {
				str += arr[i][j] + ' ';
				// console.log()
			}
		}
		console.log(str);
	}
	console.log("==================")
}

const aaa = shudu(arr, true);
if(isEnd(arr)) {
	outPut(arr);
} else {
	judgeArr(arr, aaa);
}