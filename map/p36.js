/**
 * @param {character[][]} board
 * @return {boolean}
 * 题目：
 * 请你判断一个 9 x 9 的数独是否有效。只需要 根据以下规则 ，验证已经填入的数字是否有效即可。

数字 1-9 在每一行只能出现一次。
数字 1-9 在每一列只能出现一次。
数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。（请参考示例图）
 

注意：

一个有效的数独（部分已被填充）不一定是可解的。
只需要根据以上规则，验证已经填入的数字是否有效即可。
空白格用 '.' 表示。
 

示例 1：


输入：board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
输出：true
 */
 var isValidSudoku = function(board) {
    let tmp = {};
    //先验证行
    for(let i=0;i<9;i++) {
        tmp = {};
        for(let j=0;j<9;j++) {
            if(board[i][j] === '.'){

            } else if(!tmp[board[i][j]]){
                tmp[board[i][j]] = true;
            } else {
                return false;
            }
        }
    }
    //再验证列
    for(let i=0;i<9;i++) {
        tmp = {};
        for(let j=0;j<9;j++) {
            if(board[j][i] === '.'){

            } else if(!tmp[board[j][i]]){
                tmp[board[j][i]] = true;
            } else {
                return false;
            }
        }
    }
    //再验证小格
    for(let i=0;i<9;i=i+3){
        for(let j=0;j<9;j=j+3) {
            tmp = {};
            for(let m=i;m<i+3;m++){
                for(let n=j;n<j+3;n++){
                    if(board[m][n] === '.'){

                    } else if(!tmp[board[m][n]]){
                        tmp[board[m][n]] = true;
                    } else {
                        return false;
                    }
                }
            }
        }
    }
    return true;
};