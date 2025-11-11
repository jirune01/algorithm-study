function solution(survey, choices) {
  const types = {
    R: 0, T: 0,
    C: 0, F: 0,
    J: 0, M: 0,
    A: 0, N: 0
  };

  choices.forEach((choice, i) => {
    const [type1, type2] = survey[i];
    const score = Math.abs(choice - 4);
    
    if (choice < 4) {
      types[type1] += score;
    } else if (choice > 4) {
      types[type2] += score;
    }
  });

  return (
    (types.R >= types.T ? "R" : "T") +
    (types.C >= types.F ? "C" : "F") +
    (types.J >= types.M ? "J" : "M") +
    (types.A >= types.N ? "A" : "N")
  );
}
