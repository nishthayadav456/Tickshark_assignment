import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [data, setData] = useState([
    {
      id: 1,
      image:
        "https://media.istockphoto.com/id/489377244/photo/sporty-black-female-woman.jpg?s=612x612&w=0&k=20&c=z5jgMvZtNEQBAeZ9OEcZM0FtK3-WnIKyoUlnsEXd78Y=",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1434608519344-49d77a699e1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 3,
      image:
        "https://media.istockphoto.com/id/1097405226/photo/young-women-doing-exercise-with-suspension.jpg?s=2048x2048&w=is&k=20&c=MIiu_DMbvXpZkOmkxFxRAddIdM25k0VMW4S4bIzq9nE=",
    },
    {
      id: 4,
      image:
        "https://media.istockphoto.com/id/863132218/photo/sporty-woman-illuminated-in-color.jpg?s=612x612&w=0&k=20&c=wLUvRnXVAb6pEBXqtKmfjS3-fLe_zQPv2gT6Jn2VDpo=",
    },
    {
      id: 5,
      image:
        "https://cdn.pixabay.com/photo/2023/01/08/12/25/jogging-7705055_1280.jpg",
      title: "Move to your groove.",
      description:
        "Soft fabrics let you tune out the world and tune in to comfort",
    },

    {
      id: 6,
      image:
        "https://img.adsport.cz/data/zbozi/on/1520x900/on-active-longline-bra_1WE10431917_3.jpg",
      title: "Sustainable Future",
      description:
        "Soft fabrics let you tune out the world and tune in to comfort",
    },
    {
      id: 7,
      image:
        "https://media.istockphoto.com/id/940552590/photo/woman-doing-battle-rope-workout-at-gym.jpg?s=2048x2048&w=is&k=20&c=S9OmPZeTMH6hr6uFLzuO-IbhXY787lqE9WDKxnw6TYo=",
      title: "Move to your groove.",
      description:
        "Soft fabrics let you tune out the world and tune in to comfort",
    },
    {
      id: 8,
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS_hi4Egwxq6oYD3iiMw9vKCgZWEwmPFz6j8HQ0jHLTr2qYJ8OM",
      title: "Leggings",
      description: "Scuba Oversized Pullover",
    },
    {
      id: 9,
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRrxZgz58sVja8Uz7ZJlt2prS9zQFGZJBHzz7Qglz8hgm3ZKW1R",
      title: "Sport Bras",
      description: "Scuba Oversized Pullover Wordmark",
    },
    {
      id: 10,
      image:
        "https://media.istockphoto.com/id/2011784337/photo/serious-female-sporty-muscular-with-ponytail-doing-stretching-workout-the-shoulders-blades.jpg?s=612x612&w=0&k=20&c=320iGwzXMdyse9TjZ8L1UH50FDgSM-6TDESDB3IitdQ=",
      title: "Active Wear",
      description: "Scuba Oversized Pullover Wordmark",
    },
  ]);

  return (
    <AppContext.Provider value={{ data, setData }}>
      {children}
    </AppContext.Provider>
  );
};
