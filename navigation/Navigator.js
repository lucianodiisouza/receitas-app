import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Categorias from "../screens/Categorias";
import CategoriasReceitas from "../screens/CategoriasReceitas";
import DetalheReceita from "../screens/DetalheReceita";

const Navigator = createStackNavigator({
  Categorias: Categorias,
  CategoriasReceitas: CategoriasReceitas,
  DetalheReceita: DetalheReceita,
});

export default createAppContainer(Navigator);
