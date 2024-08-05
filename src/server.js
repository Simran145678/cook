import { createServer, Model } from "miragejs";

createServer({
  models: {
    recipes: Model,
  },

  seeds(server) {
    server.create("recipe", {
      id: "1",
      name: "Creamy Tomato Basil Soup",
      description:
        "This Comforting soup is made with fresh tomatoes, aromatic basil, and touch of cream.",
      imageUrl:
        "https://cdn.loveandlemons.com/wp-content/uploads/2023/01/tomato-soup-recipe.jpg",
      steps: "",
      level: "easy",
      duration: "20 min",
      rating: "4.2",
      cuizine: "",
    });
    server.create("recipe", {
      id: "2",
      name: "Spicy Shrimp Tacos",
      description:
        "These tacos are loaded with juicy shrimp that have been marinated in a spicy blend of chilli powder.",
      imageUrl:
        "https://www.joyfulhealthyeats.com/wp-content/uploads/2020/10/Best-Spicy-Shrimp-Tacos-with-Cilantro-Lime-Slaw-web-7.jpg",
      steps: "",
      level: "intermediate",
      duration: "45 min",
      rating: "4.5",
      cuizine: "Mexican",
    });
    server.create("recipe", {
      id: "3",
      name: "Chicken Parmesan",
      description:
        "The clasic Italian dish features tender chicken breast coated in crispy breadcrumbs.",
      imageUrl:
        "https://www.thereciperebel.com/wp-content/uploads/2022/07/air-fryer-chicken-parmesan-TRR-1200-23-of-28.jpg",
      steps: "",
      level: "easy",
      duration: "30 min",
      rating: "4.8",
      cuizine: "",
    });
    server.create("recipe", {
      id: "4",
      name: "Chocolate chip Cookies",
      description:
        "These cookies are perfect balance of chewy and crispy, with goey pockets of melted.",
      imageUrl:
        "https://img.taste.com.au/FH2xb58L/taste/2010/01/choc-chip-cookies-image1-197537-1.jpg",
      steps: "",
      level: "intermediate",
      duration: "45 min",
      rating: "5.0",
      cuizine: "",
    });
    server.create("recipe", {
      id: "5",
      name: "Lemon Garlic Chicken",
      description:
        "This dish features juicy chicken thighs and tender asparagus roasted to perfection in a lemon garlic sauce.",
      imageUrl:
        "https://www.wholesomeyum.com/wp-content/uploads/2023/02/wholesomeyum-Lemon-Garlic-Chicken-16.jpg",
      steps: "",
      level: "tough",
      duration: "50 min",
      rating: "4.9",
      cuizine: "",
    });
    server.create("recipe", {
      id: "6",
      name: "Creamy Mushroon Risotto",
      description:
        "This clasic Italian dish is rich in comforting, with tender arbirio rice cooked in a flavourful broth with earthy mushrooms",
      imageUrl:
        "https://www.readyseteat.com/sites/g/files/qyyrlu501/files/uploadedImages/img_10402_72868.jpg",
      steps: "",
      level: "easy",
      duration: "20 min",
      rating: "4.4",
      cuizine: "",
    });
    server.create("recipe", {
      id: "7",
      name: "Sweet Potato Enchiladas",
      description:
        "These vegetarian enchiladas are packed with flavour and nutrition, featuring hearty black beans, sweet potatoes.",
      imageUrl:
        "https://artfrommytable.com/wp-content/uploads/2016/02/Enchilada_stuffed_Sweet_Potatoes-3-e1481819613227.jpg",
      steps: "",
      level: "intermediate",
      duration: "35 min",
      rating: "4.8",
      cuizine: "",
    });
    server.create("recipe", {
      id: "8",
      name: "Chocolate Butter Cupcakes",
      description:
        "These decadant cupcakes are chocolate lovers dream, with rich and moist chocolate cake topped with creamy peanut butter.",
      imageUrl:
        "https://www.cookingclassy.com/wp-content/uploads/2019/10/chocolate-buttercream-frosting-12.jpg",
      steps: "",
      level: "easy",
      duration: "40 min",
      rating: "5.0",
      cuizine: "",
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/recipes", (schema, request) => {
      return schema.recipes.all();
    });

    this.get("/recipes/:id", (schema, request) => {
      const id = request.params.id;
      return schema.recipes.find(id);
    });
  },
});
