import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import DashBoardRouters from "../../routers/DashBoardRouters";

describe("Pruebas en el componente <DashBoardRouters/>", () => {
  const contextValue = {
    user: { logged: true, name: "Pedro" },
  };

  test("Debe de mostrarse correctamente en Marvel", () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/"]}>
          <DashBoardRouters />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".text-info").text().trim()).toBe("Pedro");
    expect(wrapper.find("h1").text().trim()).toBe("Marvel Screen");
  });

  test("Debe de mostrarse correctamente en Dc", () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={["/dc"]}>
          <DashBoardRouters />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("h1").text().trim()).toBe("Dc Screen");
  });
});
