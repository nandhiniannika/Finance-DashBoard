const mockData = [
  // 💰 Income
  { id: 1, date: "2026-03-01", amount: 5000, category: "Salary", type: "income" },
  { id: 2, date: "2026-03-10", amount: 2000, category: "Freelance", type: "income" },
  { id: 3, date: "2026-03-15", amount: 3000, category: "Salary", type: "income" },
  { id: 4, date: "2026-03-25", amount: 1500, category: "Freelance", type: "income" },
  { id: 5, date: "2026-04-01", amount: 6000, category: "Salary", type: "income" },

  // 🍔 Food
  { id: 6, date: "2026-03-02", amount: 250, category: "Food", type: "expense" },
  { id: 7, date: "2026-03-03", amount: 1200, category: "Food", type: "expense" },
  { id: 8, date: "2026-03-06", amount: 400, category: "Food", type: "expense" },
  { id: 9, date: "2026-03-12", amount: 900, category: "Food", type: "expense" },
  { id: 10, date: "2026-03-20", amount: 700, category: "Food", type: "expense" },
  { id: 11, date: "2026-04-01", amount: 1500, category: "Food", type: "expense" },

  // 🚗 Transport
  { id: 12, date: "2026-03-05", amount: 800, category: "Transport", type: "expense" },
  { id: 13, date: "2026-03-07", amount: 300, category: "Transport", type: "expense" },
  { id: 14, date: "2026-03-14", amount: 450, category: "Transport", type: "expense" },
  { id: 15, date: "2026-03-18", amount: 600, category: "Transport", type: "expense" },
  { id: 16, date: "2026-03-28", amount: 500, category: "Transport", type: "expense" },

  // 🛍 Shopping
  { id: 17, date: "2026-03-04", amount: 2000, category: "Shopping", type: "expense" },
  { id: 18, date: "2026-03-11", amount: 1200, category: "Shopping", type: "expense" },
  { id: 19, date: "2026-03-19", amount: 800, category: "Shopping", type: "expense" },
  { id: 20, date: "2026-03-29", amount: 1500, category: "Shopping", type: "expense" },

  // 💡 Bills
  { id: 21, date: "2026-03-08", amount: 1800, category: "Bills", type: "expense" },
  { id: 22, date: "2026-03-21", amount: 2200, category: "Bills", type: "expense" },
  { id: 23, date: "2026-04-02", amount: 2000, category: "Bills", type: "expense" },

  // 🎬 Entertainment
  { id: 24, date: "2026-03-09", amount: 600, category: "Entertainment", type: "expense" },
  { id: 25, date: "2026-03-16", amount: 900, category: "Entertainment", type: "expense" },
  { id: 26, date: "2026-03-23", amount: 700, category: "Entertainment", type: "expense" },

  // 🏥 Health
  { id: 27, date: "2026-03-13", amount: 1200, category: "Health", type: "expense" },
  { id: 28, date: "2026-03-26", amount: 900, category: "Health", type: "expense" },

  // 📚 Misc
  { id: 29, date: "2026-03-17", amount: 300, category: "Misc", type: "expense" },
  { id: 30, date: "2026-03-22", amount: 400, category: "Misc", type: "expense" },
  { id: 31, date: "2026-03-30", amount: 350, category: "Misc", type: "expense" },

  // Extra for smooth graph
  { id: 32, date: "2026-04-03", amount: 500, category: "Food", type: "expense" },
  { id: 33, date: "2026-04-04", amount: 700, category: "Shopping", type: "expense" },
  { id: 34, date: "2026-04-05", amount: 300, category: "Transport", type: "expense" },
  { id: 35, date: "2026-04-06", amount: 900, category: "Entertainment", type: "expense" },
  { id: 36, date: "2026-04-07", amount: 1100, category: "Bills", type: "expense" },
  { id: 37, date: "2026-04-08", amount: 2000, category: "Freelance", type: "income" },
  { id: 38, date: "2026-04-09", amount: 400, category: "Food", type: "expense" },
  { id: 39, date: "2026-04-10", amount: 600, category: "Health", type: "expense" },
  { id: 40, date: "2026-04-11", amount: 800, category: "Shopping", type: "expense" }
];

export default mockData;