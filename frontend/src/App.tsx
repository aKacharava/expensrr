import Budgets from "./components/Budgets/Budgets";
import Page from "./components/UI/Page/Page";
import axios from "axios";
import { BudgetsData } from "./types/budgets";
import { useState, useEffect } from "react";
import { BudgetTypes } from "../enums/budgetTypes";

export default function App() {
  const [income, setIncome] = useState<BudgetsData[]>([]);
  const [error, setError] = useState(null);

  const filterType = BudgetTypes.Income;

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

  return (
    <Page title="Income">
      <Budgets budgets={income} />
    </Page>
  );
}
