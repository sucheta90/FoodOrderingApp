import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import { useEffect, useState } from "react";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    let DUMMY_MEALS = [];
    fetch("https://test-a14d6-default-rtdb.firebaseio.com/meals/.json")
      .then((response) => response.json())
      .then((data) => {
        for (let key in data) {
          DUMMY_MEALS.push(data[key]);
        }
        return DUMMY_MEALS;
      })
      .then((data) => setMeals(data));
  }, []);

  const mealsList = meals.map((meal) => {
    return (
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
