import create from "zustand"

export const useFormStore = create(set => ({
    form: [],
    // signup form
    signupForm: (data) => {
        set(state => ({
            form: [...state.form, data]
        }))
    }
}))