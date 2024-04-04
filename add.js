const b = {
  func: function () {
    return this
  }
};

// 객체를 반환
console.log(b);
// 마찬가지로 객체를 반환
// 이유는 return에 있는 this 때문
console.log(b.func())

// 동적 객체 생성
const obj = new Object();
console.log(obj);

function add(x, y) {
  this.x = x;
  this.y = y;
}

const addOne = new add(1, 2);
console.log(addOne);