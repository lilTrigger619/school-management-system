const StudentData = {
  labels: ["inactive students", "Total students"],
  datasets: [
    {
      label: "Number of students present",
      data: [10000, 17000],
      backgroundColor: ["rgba(230,166,181,1)", "rgba(47,255, 254, 1)"],
    },
  ],
};

const StaffData = {
  labels: ["Inactive staff", "Total staff"],
  datasets: [
    {
      label: "Number of students present",
      data: [10000, 17000],
      backgroundColor: ["rgba(255,40,0,1)", "rgba(255,255,28,1)"],
    },
  ],
};

export { StudentData, StaffData };
