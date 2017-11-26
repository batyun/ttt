// test2 미로 찾기 
// 간단하게 수정 11/26


/*  fillSnailSquare
    사각형을 달팽이순서로 채우는 함수
    params: (input_N: 사각형의 크기, input_x: 채우기 시작할 모서리 위치)
    return: 채워진 사각형 array[][]
*/
function fillSnailSquare(input_N, input_x){
    // ----------------------- 변수선언
    var count = 1; // 채울 숫자

    // 빈칸 2차원 배열 만들기: 한 줄 만들고 각각에 또 줄 추가
    var square = new Array(input_N);
    for(let i = 0; i< square.length; i++){
        square[i] = new Array(input_N);
    }

    var dir = 1; // 진행방향 1 right, 2 down, 3 left, 4 up
    // input_x와 숫자를 일치시켰음!!! 예) x가 2면 down부터 시작

    var row = 0; // 평면 좌표
    var col = 0; 

    // 시작모서리에 따라 초기화!!!!!! 계획한거 그대로 적기!
    switch(input_x){
        case 1: // 1일때 0,0         
            break;
        case 2: // 2일때 N-1,0
            dir = 2;
            row = input_N-1;
            break;
        case 3: // 3일때 N-1, N-1
            row = input_N-1;
            col = input_N-1;
            dir = 3;
            break;
        case 4: // 4일때 0, N-1
            col = input_N-1;
            dir = 4;
            break;
        default:
            return -1;        
    }


    // ---------------------------- 초기화 끝, 알고리즘 시작


    // 5x5일 때 5 4 4 3 3 2 2 1 이 순서로 거리가 짧아지는데
    // 두개씩 잘라서 반바퀴씩돌면 5 4, 4 3, 3 2, 2 1
    // 이렇게 묶으면 n-1로 줄어들고 규칙도 n, n-1로 간단하므로 반바퀴씩 돌것이다!
    for(let n = input_N; n >= 1; n--){
        
        // n칸 채우기, turn해서 n-1칸 채우기: 총 2n-1칸 채우기
        for(let m = 1; m <= 2*n-1; m++){
            // debugger;
            square[col][row] = count++; // 칸에 값을 채운다


            // n까지 채웠을 때 turn right해서 남은 n-1채울거다
            if(m == n || m == 2*n-1 ){ // 2n-1까지 다 채웠을 때도 turn right
                if(++dir > 4) dir -= 4; // turn right
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
        } // ㄱ자를 채웠다

    } // 반복

    return square;
}








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



