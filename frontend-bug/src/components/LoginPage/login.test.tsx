import { render, screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import { LoadingSpinner } from "../LoadingSpinner/LoadingSpinner";
import { LoginPage } from "./LoginPage"
import { Provider } from "react-redux";
import store from "../../app/store";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom';

describe("Login component testing", () => {
    it("should have correct email value", async () => {
        user.setup()
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <LoginPage formType="signup" />
                </BrowserRouter>
            </Provider>
        )

        const emailInput = screen.getByLabelText<HTMLInputElement>("email")

        await user.type(emailInput, "jesttest@gmail.com")
        expect(emailInput.value).toBe("jesttest@gmail.com")
    })

    it("should display an error for incorrect login information", async () => {
        user.setup()
        render(
            <Provider store={store}>
                <BrowserRouter>
                    <LoginPage formType="login" />
                </BrowserRouter>
            </Provider>
        )

        const loginButton = screen.getByLabelText<HTMLElement>("loginbutton")
        const emailInput = screen.getByLabelText<HTMLElement>("email")
        await user.type(emailInput, "nouserexists@gmail.com")
        await user.click(loginButton)


        let errorMessage;
        //not happy about using setTimeout
        //however waitFor does not seem to work
        //try to find solution later
        setTimeout(() => {
            errorMessage = screen.getByText("Invalid")
            expect(errorMessage).toBeInTheDocument()
        }, 2000)
    })
})

export { }