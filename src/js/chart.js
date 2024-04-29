const ctx = document.querySelector("#myChart");

const myChart = new Chart(ctx, {
  type: "pie", // 차트 유형 "pie"로 설정
  data: {
    labels: ["Python", "C", "C++", "Java", "C#", "JavaScript", "Go", "etc"],
    datasets: [
      {
        data: [96, 60, 58, 54, 41, 18, 11, 22],
        backgroundColor: [
          "red", // Python
          "orange", // C
          "yellow", // C++
          "lightgreen", // Java
          "green", // C#
          "aqua", // JavaScript
          "blue", // Go
          "lightgray", // etc
        ],
        borderWidth: 0.5,
      },
    ],
  },
  options: {
    plugins: {
      // 범례 표시 안 하도록 설정
      legend: false,
    },

    //애니메이션 효과 없앰 -> delay 되는 현상 제거
    animation: {
      duration: 0,
    },
  },
});
