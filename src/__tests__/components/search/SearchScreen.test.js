import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import SearchScreen from "../../../components/search/SearchScreen";

describe("Pruebas en el componente <SearchScreen/>", () => {
  test("Debe de mostrar el componente correctamente", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/search"]}>
        <SearchScreen />
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("h4").at(1).text().trim()).toBe("Results");
  });
});
