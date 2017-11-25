// test3 문자 바꾸기 11/25


/*  CountStringSwap
    두 문자열을 받아서 strA를 strB로 바꾸는데 
    인접한 두 문자를 서로 바꾸는 연산을 할거다 그 연산수를 리턴하는 함수
    params: (strA: 바꿔질 string, strB: 목표 string)
    return: 스왑 연산수 number
*/
function CountStringSwap(strA, strB){ 

    var count = 0; // 몇번 바꿨는지 센다. 결과값

    var pass = strA.length; // 아직 검사를 통과안함. 다 통과해야 완벽히 바꾼거
    var check = pass-1; // 지금 검사하는 위치

    var arrA = strA.split(""); // Converting a String to an Array 문자 잘라서 배열에 저장
    var arrB = strB.split("");

    
    while(pass >= 0) { // 다 pass할때까지 검사. pass가 0이되면 0까지 패스된거니까 성공!

        if(arrA[check] == arrB[check]){ // 같으면 통과해서 다음꺼 본다
            pass--; // 통과해서
            check = pass-1; // 다음꺼 볼거다
        }else{

            // 바꿀 수 있을 때까지 체크
            while(arrA[check] == arrA[check-1])
                check--;

            // bubble. 바꾸고
            temp = arrA[check];
            arrA[check] = arrA[check-1];
            arrA[check-1] = temp;

            count++; // 카운트도 업!
            check = pass-1; // 다시 통과 안한데로 돌아갈거다

            console.log('☞', arrA.join(" "));
        }
    }

    return count;
}

// 끝




// 문제푼 과정
// 버블소트랑 비슷하게 하면 될것같다
// 조건
    // 두 문자열의 길이는 같아야한다
    // 총 a와 b의 개수도 같아야한다


// -- 일단

    // 오른쪽에서부터 비교한다 a와 b를.
    // 어 같네? 7통과! 다음꺼 
    // 어 다르네? 여긴 a인데 앞에가 b네? 바꿔. aabbaabb
    // 바꿨으니 통과 안한데로 다시돌아가
    // 이제 같네? 6통과! 다음꺼
    // 어 다르네? 근데 a인데 앞에도 a네? 바꿀필요없으니 통과없이 다음꺼
    // 앞에가 b네 바꿔. aabababb
    // 바꿨으니 다시 돌아가 
    
    // 어 다르네?겠지 바꿨으니 다시돌아가겠지 같겠지 통과하겠지.. 
    // 계속..

// -- 이제 컴퓨터한테 시키기
    // 오른쪽부터 비교해서 같으면 통과해서 다음꺼보고 다르면
    // 스왑할 수 있을때까지 다음껄로 넘어가서
    // 스왑하면 다시 돌아가서 통과 안한데부터 또 확인한다
    // 를 반복한다!!








// 아래는 실행코드..

function test3(){
    console.log(`
    
----------- test 3 ---------
    `);

    // ---------------- 입력
    var strA = document.getElementById("input-test3-A").value;
    var strB = document.getElementById("input-test3-B").value;

    // default
    if(!strA) strA = "aabbabab"; // 0~7
    if(!strB) strB = "aaaabbbb";

    
    var result = `이거에서 ${strA} → ${strB} 이것이 되려면, `;
    console.log(`이거에서 ${strA} → ${strB} 이것이 되는 과정`);

    // 오류처리
    if(strA.split('').sort().join('') != strB.split('').sort().join('')){
        document.getElementById("result").innerHTML = result + `그거는 안돼요`; // html
        console.log(`안 됨`);
        return -1;
    }
 

    // ---------------- 실행
    var output = CountStringSwap(strA, strB);


    // ---------------- 출력
    console.log('output', output);
    result += `총 ${output}번 스왑! 과정은 콘솔을 봐주세요`;
    document.getElementById("result").innerHTML = result;
}