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