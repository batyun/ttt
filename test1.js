// test1 짱구의 진수변환 11/24


/*  toBinaryNum 
    십진수를 이진수로 바꿔주는 함수
    params: (input: 십진수 number)
    return: 이진수 string
*/
function toBinaryNum(input){

    // ---------------- 변수선언!
    var sstack = []; // 스택
    var changed = '';


    // ---------------- 알고리즘!
    while(input >= 1){
        sstack.push(input%2); // 스택에 2로 나눈 나머지 push
        input = Math.floor(input/2); // 2로 나눈 몫 저장 (소수점 버리기)
    }

    var ssize = sstack.length; // 저장 해놔야 pop해서 길이 줄어들어도 잘 작동
    for(let i = 0; i<ssize; i++){ // pop pop pop pop..
        changed += sstack.pop();
    }

    return changed; // 숫자로 리턴하려면 parseInt(changed);
}


// 끝






// 문제푼 과정

/*
스택에 2로 나눈 나머지 push하고
몫은 1이 될 때까지 몫 /= 2 해서 계속 계산
나중에 스택에 저장된 거 한번에 팝해서 읽을 예정

javascript array에는 push, pop 메서드가 있다
push는 array의 맨 뒤에 element 추가,
pop은 array의 맨뒤 element 삭제하며 리턴
https://www.w3schools.com/js/js_array_methods.asp 참고
*/






// -------------- 아래는 함수 실행하는 코드에요! 중요하지는 않아용
function test1(){
    console.log(`
    
----------- test 1 ---------
    `);

    // ---------------- 입력
    var input = document.getElementById("input-test1").value; // html input
    if(!input) input = 150; // default;
    console.log('input', input);

    var output;
    
    // 함수 실행
    output = toBinaryNum(input);


    // ---------------- 출력
    var result = `${input} 이것을 2진법으로 바꾸면 ${output}`; // 출력스트링
    if(isNaN(input)) result += '그러지 마세요 숫자만 바꿔줍니다';
    if(input < 0) result += '죄송해요 양수만 바꿔줍니다';

    console.log('output', output);
    document.getElementById("result").innerHTML = result; // html

}

