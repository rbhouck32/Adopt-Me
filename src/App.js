const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna Kips",
      animal: "Dump",
      breed: "dumpiestDump",
    }),
    React.createElement(Pet, {
      name: "Leona",
      animal: "Cat",
      breed: "Tabby",
    }),
    React.createElement(Pet, {
      name: "Charlie",
      animal: "Cat",
      breed: "Russian Blue",
    }),
    React.createElement(Pet, {
      name: "SadNiko",
      animal: "Dog",
      breed: "Siberian Husky",
    }),
    React.createElement(Pet, {
      name: "Anzu",
      animal: "Bird",
      breed: "Cockatiel",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
