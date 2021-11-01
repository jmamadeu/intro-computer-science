class ArrayList {
  data: any;
  length: number = 0;

  constructor() {
    this.data = {};
    this.length = 0;
  }

  push(value: any) {
    this.data[this.length] = value;
    this.length++;
  }

  pop() {
    return this.delete(this.length - 1);
  }

  get(index: number) {
    return this.data[index];
  }

  _collapseTo(index: number) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;
  }

  delete(index: number) {
    const response = this.data[index];
    this._collapseTo(index);

    return response;
  }
}

describe('Array List', () => {
  test('Should return the value', () => {
    const list = new ArrayList();

    list.push('teste');
    expect(list.get(0)).toEqual('teste');
  });
});
