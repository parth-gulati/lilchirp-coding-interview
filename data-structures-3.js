const expression = "{[({})]}";
// {[( ==> push

const checkIfValid = (expression) => {
  const stack = [];

  for (let i = 0; i <= expression.length - 1; i++) {
    let tbChecked = expression[i];

    if (tbChecked === "{" || tbChecked === "[" || tbChecked === "(") {
      stack.push(tbChecked);
    } else {
      if (stack.length === 0) {
        return false;
      }

      switch (tbChecked) {
        case ")": {
          let popOnce = stack.pop();
          if (popOnce === "{" || popOnce === "[") return false;
          break;
        }
        case "}": {
          let popOnce = stack.pop();
          if (popOnce === "(" || popOnce === "[") return false;
          break;
        }

        case "]": {
          let popOnce = stack.pop();
          if (popOnce === "{" || popOnce === "(") return false;
          break;
        }
      }
    }
  }

  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
};
