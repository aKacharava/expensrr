import Card from "../../UI/Card/Card";
import { BudgetData } from "../../../interfaces/budgetData";

export default function Budget({ title, date, description, amount }: BudgetData) {
  return (
    <Card className="bg-green-500">
      <div className="flex justify-between">
        <h1 className="font-bold text-xl">{title}</h1>
        <span className="font-medium">{date}</span>
      </div>
      <p>{description}</p>
      <span className="font-bold text-3xl">&euro; {amount}</span>
    </Card>
  );
}
