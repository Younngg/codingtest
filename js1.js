/* 
첫번째 시도

const participant = ["marina", "josipa", "nikola", "vinko", "filipa"];
const completion = ["josipa", "filipa", "marina", "nikola"];

function solution(participant, completion) {
  let concat = participant.concat(completion);
  let filter = concat.filter(item => 
    !completion.includes(item)
);
  var answer = filter.join('')
  
  return answer;
}

solution(participant, completion); 

* participant와 completion의 차집합은 찾았지만 동명이인은 걸러내지 못함
*/



const participant = ["marina", "josipa", "nikola", "vinko", "filipa"];
const completion = ["josipa", "filipa", "marina", "nikola"];

function solution(participant, completion) {
  const n = participant.length;
  let answer = ''

  participant.sort();
  completion.sort();

  for (let i = 0; i < n; i++) {
    if(participant[i] !== completion[i]) {
      answer = participant[i];

      return answer;
    }
  }

}

solution(participant, completion);