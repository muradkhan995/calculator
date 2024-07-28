export const calculate = (input) => {
    try {
      return eval(input); // Use a safer method for production
    } catch {
      return 'Error';
    }
  };
