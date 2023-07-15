if (!Array.prototype.max) {
    Array.prototype.max = function () {
      if (this.length === 0) {
        return undefined;
      }
      
      let max = this[0];
      for (let i = 1; i < this.length; i++) {
        if (this[i] > max) {
          max = this[i];
        }
      }
      
      return max;
    };
  }
  
  console.log([6, 5, 8, 7].max()); // 8