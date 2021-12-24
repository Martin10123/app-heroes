import { mount } from "enzyme";
import { AuthContext } from "../../auth/AuthContext";
import AppRouter from "../../routers/AppRouter";

describe("Pruebas en el componente <AppRouter/>", () => {
  test("Debe de mostrarse correctamente", () => {
    const contextValue = {
      user: { logged: false },
    };

    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("h1").text().trim()).toBe("Login");
  });

  test("Debe de mostrar el componente de Marvel o Dc si está autenticado", () => {
    const contextValue = {
      user: { logged: true, name: "Martin" },
    };

    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".navbar").exists()).toBe(true);
    expect(wrapper.find("span").text().trim()).toBe(contextValue.user.name);
  });
});
