const InstructorsPresent = {
  labels: ["Present Instructors", "Total Instructors"],
  datasets: [
    {
      label: "Number of Instructors present",
      data: [10000, 17000],
      backgroundColor: ["rgba(255, 207, 40, 1)", "rgba(255, 85, 0, 1)"],
    },
  ],
};

const MaleInstructorsPresent = {
  labels: ["Present Male Instructors", "Total Male Instructors"],
  datasets: [
    {
      label: "Number of Male Instructors present",
      data: [10000, 17000],
      backgroundColor: ["rgba(230,166,181,1)", "rgba(47,255, 254, 1)"],
    },
  ],
};

const FemaleInstructorsPresent = {
  labels: ["Present Female Instructors", "Total Female Instructors"],
  datasets: [
    {
      label: "Number of Female Instructors Present",
      data: [10000, 17000],
      backgroundColor: ["rgba(255,40,0,1)", "rgba(255,255,28,1)"],
    },
  ],
};

export { FemaleInstructorsPresent, MaleInstructorsPresent, InstructorsPresent };
