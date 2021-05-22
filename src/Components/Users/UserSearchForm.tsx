import {Field, Form, Formik} from "formik";
import React, {FC, memo} from "react";
import {FilterType} from "../../redux/users-reducer";

const usersSearchFormValidate = (values: any) => {
    const errors = {};
    return errors;
}
type PropsType = {
    onFilterChanged: (filter: FilterType) => void
}
type FormType = {
    term : string
    friend: "true" | "false" | "null"
}

export const UserSearchForm: FC<PropsType> = memo((props) => {

    const submit = (values: FormType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        const filter: FilterType = {
            term: values.term,
            friend: values.friend === "null" ? null : values.friend === "true" ? true : false
        }
        props.onFilterChanged(filter)
        setSubmitting(false)
    }

    return (
        <div>
            <Formik
                initialValues={{term: '', friend: 'null'}}
                validate={usersSearchFormValidate}
                onSubmit={submit}
            >
                {({isSubmitting}) => (
                    <Form>
                        <Field type="text" name="term"/>
                        <Field name="friend" as="select">
                            <option value="null">All</option>
                            <option value="true">Followed</option>
                            <option value="false">Unfollowed</option>
                        </Field>
                        <button type="submit" disabled={isSubmitting}>
                            Поиск
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
})