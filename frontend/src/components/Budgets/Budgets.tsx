import { BudgetsProps } from "../../interfaces/budgetProps";
import { BudgetsData } from "../../types/budgets";
import Budget from "./Budget/Budget";

export default function Budgets({ budgets }: BudgetsProps) {
  return (
    <ul className="flex flex-col gap-4 my-2 w-full">
      {budgets.map((budget: BudgetsData) => {
        return (
          <li className="w-1/2 mx-auto" key={budget.id}>
            <Budget
              title={budget.category}
              date={budget.date}
              description={budget.description}
              amount={budget.amount}
            />
          </li>
        );
      })}
    </ul>
  );
}
