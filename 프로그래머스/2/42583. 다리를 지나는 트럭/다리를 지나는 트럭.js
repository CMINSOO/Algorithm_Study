function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    let bridge = Array.from({length: bridge_length}, () => 0);
    let currentWeight = 0
    
    //1단계
    //1초를 증가시킴과동시에 트럭이동시작
    answer++ 
    bridge.shift() //다리에 들어갈자리를 만들기위해 첫번째요소지워주기
    currentWeight += truck_weights[0] //다리가 버틸수있는 무게가 있기때문에 현재중량체크용
    bridge.push(truck_weights.shift())// 다리에 첫번째 트럭을 올리기
    
    //2단계
    //이제 다리의 중량이 오바되지않았다면 시간을 증가시키면서 트럭을 하나하나 더 올려주기
    while(currentWeight > 0){
        answer++ //시간을 증가시켜주고
        currentWeight -=  bridge.shift() //다음 들어갈자리 확보를 위해 현재 무게에서 맨앞의무게빼기
        
        //만약 중량이 오바되지 않았다면 트럭더 넣어주기
        if(currentWeight+truck_weights[0] <= weight && truck_weights.length > 0){
            currentWeight += truck_weights[0]
            bridge.push(truck_weights.shift())
        } else {
            bridge.push(0)
        }
    }
    
    
    return answer;
}