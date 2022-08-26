const user = {
  name: "Elie",
  job: "Instructor",
  workDetails: {
    type: "Part Time",
    hours: "40 hours",
  },
  educationQualifications: [
    {
      name: "Full Stack",
      type: "Certification",
    },
    {
      name: "Javascript",
      type: "Certification",
    },
  ],
};

let targetObj = {};

const convertUpperCase = (user) => {
  let tempObj = {};

  if (typeof user === "string") {
    return user.toUpperCase();
  }

  if (typeof user === "object") {
    let keys = Object.keys(user);
    for (let i = 0; i <= keys.length - 1; i++) {
      tempObj[keys[i]] = convertUpperCase(user[keys[i]]);
    }
  }

  if (Array.isArray(user)) {
    let newArr = user.map((x) => convertUpperCase(x));
    return newArr;
  }

  return tempObj;
};
