import Budgets from "./components/Budgets/Budgets";
import Page from "./components/UI/Page/Page";
import axios from "axios"
import { BudgetData } from "./interfaces/budgetData";
import { useState, useEffect } from "react";

export default function App() {
  const [income, setIncome] = useState<BudgetData[]>([]);
  const [error, setError] = useState(null);
  
  const filterType = 'Income';

  useEffect(() => {
    const fetchIncome = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/budgets", {
          params: { type: filterType },
        });
        setIncome(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchIncome();
  }, [filterType]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  console.log("Income", income)

  return (
    <Page title="Income">
      <Budgets budgets={income} />
    </Page>
  );
}
