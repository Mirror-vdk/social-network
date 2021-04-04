import React from "react";
import { create } from "react-test-renderer"
import ProfileStatus from "./ProfileStatus";



describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="Тестовый статус" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("Тестовый статус");
    });
    test("after creation span with status  should be displayed", () => {
        const component = create(<ProfileStatus status="Тестовый статус" />);
        const root = component.root;
        let span = root.findByType("span")
        expect(span.length).not.toBeNull();
    })
    test("after creation span with status  shouldnt be displayed", () => {
        const component = create(<ProfileStatus status="Тестовый статус" />);
        const root = component.root;
        expect(()=> {let textarea = root.findByType("textarea")}).toThrow();
    });
    test("textarea should be displayed in editMode instead of span", () => {
        const component = create(<ProfileStatus status="Тестовый статус" />);
        const root = component.root;
        let span = root.findByType("span")
        span.props.onDoubleClick()
        let textarea = root.findByType("textarea")
        expect(textarea.props.value).toBe("Тестовый статус")
    });
});