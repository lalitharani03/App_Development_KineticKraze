import React, { useEffect, useState } from 'react';

export default function DietPlan({ details, setDietPlan }) {
  const [localDietPlan, setLocalDietPlan] = useState({});
  const [currentDay, setCurrentDay] = useState("");

  useEffect(() => {
    if (details) {
      generateDietPlan(details);
    }
    const day = new Date().toLocaleString('en-US', { weekday: 'long' });
    setCurrentDay(day);
  }, [details]);

  const generateDietPlan = (details) => {
    let plan = {
      Monday: {},
      Tuesday: {},
      Wednesday: {},
      Thursday: {},
      Friday: {},
      Saturday: {},
      Sunday: {}
    };
    
    if (details.fitnessGoals.includes("weight loss")) {
      plan = {
        Monday: { breakfast: "Oatmeal with berries", lunch: "Grilled chicken salad", dinner: "Steamed vegetables with tofu", snacks: "Fruit and nuts" },
        Tuesday: { breakfast: "Smoothie with protein powder", lunch: "Tuna salad", dinner: "Chicken stir-fry", snacks: "Carrot sticks with hummus" },
      };
    } else if (details.fitnessGoals.includes("muscle gain")) {
      plan = {
        Monday: { breakfast: "Scrambled eggs with spinach", lunch: "Turkey sandwich with whole grain bread", dinner: "Salmon with quinoa and broccoli", snacks: "Greek yogurt with honey" },
        Tuesday: { breakfast: "Protein pancakes", lunch: "Chicken burrito bowl", dinner: "Beef stew", snacks: "Protein bars" },
        Wednesday: { breakfast: "1Protein pancakes", lunch: "Chicken burrito bowl", dinner: "Beef stew", snacks: "Protein bars" },
        Thursday: { breakfast: "2Protein pancakes", lunch: "Chicken burrito bowl", dinner: "Beef stew", snacks: "Protein bars" },
        Friday: { breakfast: "3Protein pancakes", lunch: "Chicken burrito bowl", dinner: "Beef stew", snacks: "Protein bars" },
        Saturday: { breakfast: "4Protein pancakes", lunch: "Chicken burrito bowl", dinner: "Beef stew", snacks: "Protein bars" },
        Sunday: { breakfast: "5Protein pancakes", lunch: "Chicken burrito bowl", dinner: "Beef stew", snacks: "Protein bars" }
      };
    } else {
      plan = {
        Monday: { breakfast: "Smoothie with protein powder", lunch: "Chicken wrap with veggies", dinner: "Pasta with marinara sauce", snacks: "Veggies with hummus" },
        Tuesday: { breakfast: "Fruit and yogurt parfait", lunch: "Veggie burger", dinner: "Stir-fried tofu with veggies", snacks: "Apple slices with peanut butter" },
        Wednesday: { breakfast: "1Protein pancakes", lunch: "Chicken burrito bowl", dinner: "Beef stew", snacks: "Protein bars" },
        Thursday: { breakfast: "2Protein pancakes", lunch: "Chicken burrito bowl", dinner: "Beef stew", snacks: "Protein bars" },
        Friday: { breakfast: "3Protein pancakes", lunch: "Chicken burrito bowl", dinner: "Beef stew", snacks: "Protein bars" },
        Saturday: { breakfast: "4Protein pancakes", lunch: "Chicken burrito bowl", dinner: "Beef stew", snacks: "Protein bars" },
        Sunday: { breakfast: "5Protein pancakes", lunch: "Chicken burrito bowl", dinner: "Beef stew", snacks: "Protein bars" }
      };
    }

    setLocalDietPlan(plan);
    setDietPlan(plan); 
  };

  return (
    <div>
      <h2>Diet Plan for {currentDay}</h2>
      <div>
        <h3>Breakfast:</h3>
        <p>{localDietPlan[currentDay]?.breakfast}</p>
      </div>
      <div>
        <h3>Lunch:</h3>
        <p>{localDietPlan[currentDay]?.lunch}</p>
      </div>
      <div>
        <h3>Dinner:</h3>
        <p>{localDietPlan[currentDay]?.dinner}</p>
      </div>
      <div>
        <h3>Snacks:</h3>
        <p>{localDietPlan[currentDay]?.snacks}</p>
      </div>
    </div>
  );
}
