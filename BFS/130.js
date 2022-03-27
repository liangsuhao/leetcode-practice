/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 题目：
给你一个 m x n 的矩阵 board ，由若干字符 'X' 和 'O' ，找到所有被 'X' 围绕的区域，并将这些区域里所有的 'O' 用 'X' 填充。
 

示例 1：


输入：board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
输出：[["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]
解释：被围绕的区间不会存在于边界上，换句话说，任何边界上的 'O' 都不会被填充为 'X'。 任何不在边界上，或不与边界上的 'O' 相连的 'O' 最终都会被填充为 'X'。如果两个元素在水平或垂直方向相邻，则称它们是“相连”的。
示例 2：

输入：board = [["X"]]
输出：[["X"]]
 */
var solve = function(board) {
 const judge = function(i,j) {
        if((i==0 || i==m-1) && (j==0 || j==n-1) && board[i][j] == 'O') {
            return false;
        } else if((i==0 || i==m-1) && (j==0 || j==n-1) && board[i][j] == 'X') {
            return true;
        } else {
            result.push(i.toString() + '_' + j.toString());
            return 'goOn';
        }
    }

    const BFC = function(i,j) {
        let result = [],flag =  true;
        result.push(i.toString() + '_' + j.toString());
        for(let kk=0;kk<result.length;kk++) {
            let ii = result[kk].split('_')[0],jj = result[kk].split('_')[1];
            if((ii==0||ii==m-1) && (jj==0||jj==n-1) && board[ii][jj]=='O') {
                flag = false;
                continue;
            } else if((ii==0||ii==m-1) && (jj==0||jj==n-1) && board[ii][jj]=='X') {
                continue;
            } else if(ii>=m || jj>=n) {
                result.splice(kk,1);
                kk--;
                continue;
            }
            console.log(ii,jj)
            if(result.indexOf((parseInt(ii)-1).toString()+'_'+jj.toString())==-1 && board[parseInt(ii)-1][jj]=='O') {
                result.push((parseInt(ii)-1).toString()+'_'+jj.toString());
            }
            if(result.indexOf((parseInt(ii)+1).toString()+'_'+jj.toString())==-1) {
                result.push((parseInt(ii)+1).toString()+'_'+jj.toString());
            }
            if(result.indexOf(parseInt(ii).toString()+'_'+(parseInt(jj)-1).toString())==-1 && board[ii][parseInt(jj)-1]=='O') {
                result.push(parseInt(ii).toString()+'_'+(parseInt(jj)-1).toString());
            }
            if(result.indexOf(parseInt(ii).toString()+'_'+(parseInt(jj)+1).toString())==-1 && board[ii][parseInt(jj)+1]=='O') {
                result.push(parseInt(ii).toString()+'_'+(parseInt(jj)+1).toString());
            }
        }
        console.log(result);
        if(flag) {
            for(let i=0;i<result.length;i++) {
                let tmpi = result[i].split('_')[0],tmpj = result[i].split('_')[1];
                board[tmpi][tmpj] = 'X';
            }
        } else {
            for(let i=0;i<result.length;i++) {
                let tmpi = result[i].split('_')[0],tmpj = result[i].split('_')[1];
                noArr[tmpi][tmpj] = false;
            }
        }
    }

    let m = board.length,n=board[0].length,noArr = [];
    for(let i=0;i<m;i++) {
        noArr[i] = [];
        for(let j=0;j<n;j++) {
            noArr[i][j] = true;
        }
    }
    for(let i=1;i<m-1;i++) {
        for(let j=1;j<n-1;j++) {
            if(board[i][j] == 'O' && noArr[i][j]) {
                BFC(i,j);
            }
        }
    }


    return board;
};