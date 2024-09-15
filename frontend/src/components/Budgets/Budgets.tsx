import Budget from "./Budget/Budget";


export default function Budgets() {
  return (
    <ul className="flex flex-col gap-4 my-2">
      <li className="w-1/2 mx-auto">
        <Budget
          title="Some title"
          date="1-1-2024"
          description="Some description"
          amount={400}
        />
      </li>
    </ul>
  );
}
