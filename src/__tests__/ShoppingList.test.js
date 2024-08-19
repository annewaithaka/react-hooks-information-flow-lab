import { render, screen, fireEvent } from "@testing-library/react";
import ShoppingList from "../components/ShoppingList";

const testData = [
  { id: 1, name: "Yogurt", category: "Dairy" },
  { id: 2, name: "Pomegranate", category: "Produce" },
  { id: 3, name: "Lettuce", category: "Produce" },
  { id: 4, name: "String Cheese", category: "Dairy" },
  { id: 5, name: "Cookies", category: "Dessert" },
];

test("displays all items when initially rendered", () => {
  render(<ShoppingList items={testData} />);
  
  // Verify all items are displayed initially
  const items = screen.getAllByText(/Yogurt|Pomegranate|Lettuce|String Cheese|Cookies/);
  expect(items).toHaveLength(testData.length);
});

// test("displays only items that match the selected category", () => {
//   render(<ShoppingList items={testData} />);

//   // Simulate selecting "Dairy" category
//   fireEvent.change(screen.getByRole("combobox"), {
//     target: { value: "Dairy" },
//   });

//   // Expect only Dairy items to be visible
//   expect(screen.getByText("Yogurt")).toBeInTheDocument();
//   expect(screen.getByText("String Cheese")).toBeInTheDocument();
//   expect(screen.queryByText("Pomegranate")).not.toBeInTheDocument();
//   expect(screen.queryByText("Lettuce")).not.toBeInTheDocument();
//   expect(screen.queryByText("Cookies")).not.toBeInTheDocument();

//   // Simulate selecting "Dessert" category
//   fireEvent.change(screen.getByRole("combobox"), {
//     target: { value: "Dessert" },
//   });

//   // Expect only Dessert item to be visible
//   expect(screen.getByText("Cookies")).toBeInTheDocument();
//   expect(screen.queryByText("Yogurt")).not.toBeInTheDocument();
//   expect(screen.queryByText("String Cheese")).not.toBeInTheDocument();
//   expect(screen.queryByText("Pomegranate")).not.toBeInTheDocument();
//   expect(screen.queryByText("Lettuce")).not.toBeInTheDocument();
// );
