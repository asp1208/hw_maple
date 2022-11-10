import { diff } from "../src/miniMaple";

describe("Diff function", () => {
    it('should take x, x and return 1', () => {
        expect(diff('x','x')).toEqual('1');
    });
});

describe("Diff function", () => {
    it('should take 4, x and return 0', () => {
        expect(diff('4','x')).toEqual('0');
    });
}); 

describe("Diff function", () => {
    it('should take -x, x and return -1', () => {
        expect(diff('-x','x')).toEqual('-1');
    });
});

describe("Diff function", () => {
    it('should take 4 + x, x and return 1', () => {
        expect(diff('4 + x','x')).toEqual('0 + 1');
    });
});

describe("Diff function", () => {
    it('should take 4*x, x and return 4', () => {
        expect(diff('4*x','x')).toEqual('4');
    });
});

describe("Diff function", () => {
    it('should take 40* x, x and return 40', () => {
        expect(diff('40* x','x')).toEqual('40');
    });
});

describe("Diff function", () => {
    it('should take x^3, x and return 3*x^2', () => {
        expect(diff('x^3','x')).toEqual('3*x^2');
    });
});

describe("Diff function", () => {
    it('should take 4*x^3, x and return 12*x^2', () => {
        expect(diff('4*x^3','x')).toEqual('12*x^2');
    });
});

describe("Diff function", () => {
    it('should take 40*x^30, x and return 1200*x^29', () => {
        expect(diff('40*x^30','x')).toEqual('1200*x^29');
    });
});


describe("Diff function", () => {
    it('should take -4*x^3, x and return -12*x^2', () => {
        expect(diff('-4*x^3','x')).toEqual('-12*x^2');
    });
});

describe("Diff function", () => {
    it('should take 4*x^3-x^2, x and return 12*x^2 - 2*x', () => {
        expect(diff('4*x^3-x^2','x')).toEqual('12*x^2 - 2*x');
    });
});

describe("Diff function", () => {
    it('should take 4*x^3+x^2, x and return 12*x^2 + 2*x', () => {
        expect(diff('4*x^3+x^2','x')).toEqual('12*x^2 + 2*x');
    });
});

describe("Diff function", () => {
    it('should take 4*x^3+x^2+x, x and return 12*x^2 + 2*x', () => {
        expect(diff('4*x^3+x^2+x','x')).toEqual('12*x^2 + 2*x + 1');
    });
});

describe("Diff function", () => {
    it('should take 123+7, x args and return 0', () => {
        expect(diff('123+7','x')).toEqual('0 + 0');
    });
});


describe("Diff function: incorrect args", () => {
    it('should take empty args and return null', () => {
        expect(diff('','')).toBeNull();
    });
});

describe("Diff function: incorrect args", () => {
    it('should take empty second arg and return null', () => {
        expect(diff('4*x^3','')).toBeNull();
    });
});

describe("Diff function: incorrect args", () => {
    it('should take empty first arg and return null', () => {
        expect(diff('','x')).toBeNull();
    });
});

describe("Diff function: incorrect args", () => {
    it('should take 4*x^3, y and return null', () => {
        expect(diff('4*x^3','y')).toBeNull();
    });
});

describe("Diff function: incorrect args", () => {
    it('should take incorrect 4**x^3, x args and return null', () => {
        expect(diff('4**x^3','x')).toBeNull();
    });
});

describe("Diff function: incorrect args", () => {
    it('should take incorrect 4*xx^3, x args and return null', () => {
        expect(diff('4*xx^3','x')).toBeNull();
    });
});


describe("Diff function: incorrect args", () => {
    it('should take incorrect 03*x, x args and return null', () => {
        expect(diff('03*x','x')).toBeNull();
    });
});

describe("Diff function: incorrect args", () => {
    it('should take incorrect 4*x*x^3, x args and return null', () => {
        expect(diff('4*x*x^3','x')).toBeNull();
    });
});

describe("Diff function: incorrect args", () => {
    it('should take incorrect 4*x*y, x args and return null', () => {
        expect(diff('4*x*y','x')).toBeNull();
    });
});

describe("Diff function: incorrect args", () => {
    it('should take incorrect cucumber, x args and return null', () => {
        expect(diff('cucumber','x')).toBeNull();
    });
});

describe("Diff function: incorrect args", () => {
    it('should take incorrect *+^, x args and return null', () => {
        expect(diff('*+^','x')).toBeNull();
    });
});

describe("Diff function: incorrect args", () => {
    it('should take incorrect 4*x, xx args and return null', () => {
        expect(diff('4*x','xx')).toBeNull();
    });
});

describe("Diff function: incorrect args", () => {
    it('should take incorrect 4*x, 3 args and return null', () => {
        expect(diff('4*x','3')).toBeNull();
    });
});

describe("Diff function: incorrect args", () => {
    it('should take incorrect 4*x^3+y^2, x and return null', () => {
        expect(diff('4*x^3+y^2','x')).toBeNull();
    });
});

//----------------------- тесты Аэлины ----------------------

test('2', () => {
    expect(diff("4*x^3", "y")).toBeNull();
});

test('3', () => {
    expect(diff("4*x^3-x^2", "x")).toEqual("12*x^2 - 2*x");
});


test('4', () => {
    expect(diff("4*x", "x")).toEqual("4");
});

test('5', () => {
    expect(diff("4*x", "y")).toBeNull();
});

test('6', () => {
    expect(diff("4*x^3-x^2-8*x^6", "x")).toEqual("12*x^2 - 2*x - 48*x^5");
});

test('7', () => {
    expect(diff("4*x^3+x^2+8*x^6", "x")).toEqual("12*x^2 + 2*x + 48*x^5");
});

test('8', () => {
    expect(diff("4*x^3-x^2+8*x^6", "x")).toEqual("12*x^2 - 2*x + 48*x^5");
});

test('9', () => {
    expect(diff("4*x^3*y-x^2", "x")).toBeNull();
});

test('10', () => {
    expect(diff("4*x^3*y-x^2", "x")).toBeNull();
});

test('12', () => {
    expect(diff("y", "y")).toEqual("1");
});

test('13', () => {
    expect(diff("45", "y")).toEqual("0");
});

test('14', () => {
    expect(diff("45+98", "y")).toEqual("0 + 0");
});

test('15', () => {
    expect(diff("45*x+98", "y")).toBeNull();
});

test('16', () => {
    expect(diff("-4*x^3", "x")).toEqual("-12*x^2");
});
