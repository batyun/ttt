// test2 미로 찾기?? 11/25


/*  fillSnailSquare
    사각형을 달팽이순서로 채우는 함수
    params: (input_N: 사각형의 크기, input_x: 채우기 시작할 모서리 위치)
    return: 채워진 사각형 array[][]

    아.. array 
    1차원은 줄이라고하고
    2차원은 평면이라고하겠땅
*/
function fillSnailSquare(input_N, input_x){
    // ----------------------- 변수선언
    var dir = 1; // 진행방향 1 right, 2 down, 3 left, 4 up
    // 이거는 input_x에 일치시켰음!!! 예) x가 2면 down부터 시작

    var count = 1; // 채울 숫자

    // 빈칸평면만들기: 한 줄 만들고 각각에 또 줄 추가
    var square = new Array(input_N);
    for(let i = 0; i< square.length; i++){
        square[i] = new Array(input_N);
    }

    var row = 0; // 평면 좌표 가로
    var col = 0; // 평면 좌표 세로

    var dist = input_N; // 방향 바꾸기전 가야할 거리
    var distCount = 0; // 방향 바꾸기전 간 거리


    // 시작모서리에 따라 초기화!!!!!! 계획한거 그대로 적기!
    switch(input_x){
        case 1:
            break;
        case 2:
            dir = 2;
            row = input_N-1;
            break;
        case 3:
            row = input_N-1;
            col = input_N-1;
            dir = 3;
            break;
        case 4:
            col = input_N-1;
            dir = 4;
            break;
        default:
            return -1;        
    }


    // 5x5일때 한방향에 가야할거리가 5 4 4 3, 3 2 2 1 순이니까 
    // 첫시작방향에서 두번째일때는 가야할 거리가 줄어들면 안됨
    // 마지막도 마찬가지
    var two = input_x + 1; // x시작점에서 1을 더하면 두번째
    var four = input_x + 3;
    if(four > 4) four -= 4;
    if(two > 4) two -= 4;




    // 채우기 시작!!
    while(count <= input_N*input_N){

        square[col][row] = count++; // 값을 채운다        
        distCount++;

        if(distCount >= dist){ // 가야할 거리 다갔으면 방향 전환
            if(two != dir && four != dir) dist--; // 거리 줄어들기

            dir++; // 방향 전환
            
            if(dir > 4) dir -= 4; // 다시 방향이 초기화
            distCount = 0;
        }

        // 방향에 따라 좌표 증가 감소
        switch(dir){
            case 1: // right
                row++;
                break;
            case 2: // down
                col++;
                break;
            case 3: // left
                row--;
                break;
            case 4: // up
                col--;
                break;
            default:
                return -1;
        }

    }

    return square; // 채워진 사각형을 리턴
}


// 끝





// 문제푼 과정

/*
계획:

계획 전에 문제파악:
x = 1,2,3,4 중에 받을 수 있고
1일때 0,0
2일때 N-1,0
3일때 N-1, N-1
4일때 0, N-1
시작 위치는 이러하다 ㅋ

채울 값은 1부터 시작해서 N*N까지이고

진행방향을 정해주면서 채우면 좋겠다

*/


/*
채우는 개수 한방향에 몇개씩인지 1x1일 때부터
1
2 1 1
3 2 2 1 1
4 3 3 2 2 1 1
5 4 4 3 3 2 2 1 1

5 4 4 3, 3 2 2 1, 1
나는 이렇게 네개로 잘라서 사각형 한바퀴를 돌았는데

5 4, 4 3, 3 2, 2 1, 1
이렇게 잘라서 반바퀴씩 돌수도 있겠구나
*/









// 아래는 함수실행 코드

function test2(){
    console.log(`
    
----------- test 2 ---------
    `);

    // ---------------- 입력
    var N = document.getElementById("input-test2-N").value;
    var x = document.getElementById("input-test2-x").value;

    // default
    if(!N) N = 3;
    if(!x) x = 1;



    // 실행
    var filled = fillSnailSquare(parseInt(N), parseInt(x));



    // 출력
    var result = `input: ${N}, ${x}\n채워진 사각형은\n\n`;
    var tohtml = `<p>${N}x${N} 사각형을 모서리 ${x}부터 채우면</p>`;

    for(let i = 0; i<filled.length; i++){
        tohtml += `<p><pre>`;
        for(let j = 0; j<filled.length; j++){
            result += filled[i][j] + `\t`;
            tohtml +=  `${filled[i][j]}\t`;
        }
        result +='\n';
        tohtml +=`</pre></p>`;
    }


    console.log(result);
    document.getElementById("result").innerHTML = tohtml;
    
}



