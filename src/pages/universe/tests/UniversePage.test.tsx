import {
  RenderOptions,
  render,
  screen,
  fireEvent,
} from "@testing-library/react";
import { Provider } from "react-redux";
import { UniversePage } from "../components/UniversePage";
import { ReactElement } from "react";
import { EnhancedStore, configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "../../../store";
import { RootState } from "../../../store";
import "@testing-library/jest-dom";

type ExtendedRenderOptions = {
  initialState?: Partial<RootState>;
  store?: EnhancedStore;
  options?: Omit<RenderOptions, "queries">;
};

export const renderWithRedux = (
  component: ReactElement,
  {
    initialState,
    store = configureStore({
      reducer: rootReducer,
      preloadedState: initialState,
    }),
    options,
  }: ExtendedRenderOptions = {}
) => {
  const renderResult = render(
    <Provider store={store}>{component}</Provider>,
    options
  );
  return { renderResult, store };
};

it("renders with Redux", () => {
  renderWithRedux(<UniversePage />);
  const galaxyButtonElement = screen.getByText("Add Galaxy");
  expect(galaxyButtonElement).toBeInTheDocument();
});

it("allows you to add a galaxy", async () => {
  const { store } = renderWithRedux(<UniversePage />);
  const galaxyButtonElement = screen.getByText("Add Galaxy");
  fireEvent.click(galaxyButtonElement);
  console.log(store.getState());
  const starButtonElement = screen.getByText("Add Star");
  expect(galaxyButtonElement).toBeInTheDocument();
  expect(starButtonElement).toBeInTheDocument();
});
