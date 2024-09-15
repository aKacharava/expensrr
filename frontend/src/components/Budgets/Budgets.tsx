import { BudgetsData } from "../../types/budgets";
import Budget from "./Budget/Budget";

export default function Budgets({ budgets }: BudgetsData[]) {
  return (
    <ul className="flex flex-col gap-4 my-2">
      {
        budgets.map((budget: BudgetsData) => {
          console.log("Budget individual", budget);

          return (
            <li className="w-1/2 mx-auto">
              <Budget
                key={budget.id}
                title={budget.category}
                date={budget.date}
                description={budget.description}
                amount={budget.amount}
              />
            </li>
          )
        })
      }
    </ul>
  );
}
