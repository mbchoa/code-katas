export default class Vector {
  constructor(components) {
    this.data = components;
  }

  size() {
    return this.data.length;
  }

  add(vector) {
    if (vector.size() !== this.size()) {
      throw new Error('vector: Incompatible vectors.');
    }
    return new Vector(this.data.map((el, index) => el + vector.data[index]));
  }

  subtract(vector) {
    if (vector.size() !== this.size()) {
      throw new Error('vector: Incompatible vectors.');
    }
    return new Vector(this.data.map((el, index) => el - vector.data[index]));
  }

  dot(vector) {
    if (vector.size() !== this.size()) {
      throw new Error('vector: Incompatible vectors.');
    }
    return this.data.reduce(
      (product, el, i) => product + el * vector.data[i],
      0
    );
  }

  norm() {
    return Math.sqrt(
      this.data.reduce((output, el) => output + el ** 2),
      0
    );
  }

  toString() {
    return `(${this.data.join(',')})`;
  }

  equals(vector) {
    return this.data.every((el, i) => el === vector.data[i]);
  }
}

/**
export default function Vector(components) {
  this.data = components;
}

Vector.prototype.size = function () {
  return this.data.length;
};

Vector.prototype.add = function (vector) {
  if (vector.size() !== this.size()) {
    throw new Error('vector: Incompatible vectors.');
  }
  return new Vector(this.data.map((el, index) => el + vector.data[index]));
};

Vector.prototype.subtract = function (vector) {
  if (vector.size() !== this.size()) {
    throw new Error('vector: Incompatible vectors.');
  }
  return new Vector(this.data.map((el, index) => el - vector.data[index]));
};

Vector.prototype.dot = function (vector) {
  if (vector.size() !== this.size()) {
    throw new Error('vector: Incompatible vectors.');
  }
  return this.data.reduce((product, el, i) => product + el * vector.data[i], 0);
};

Vector.prototype.norm = function () {
  return Math.sqrt(
    this.data.reduce((output, el) => output + el ** 2),
    0
  );
};

Vector.prototype.toString = function () {
  return `(${this.data.join(',')})`;
};

Vector.prototype.equals = function (vector) {
  return this.data.every((el, i) => el === vector.data[i]);
};
 */
