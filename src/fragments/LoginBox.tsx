import * as React from 'react';
import Form from './../components/form/Form';
import FormField from '../components/form/FormField';
import TextInput from './../components/form/TextInput';
import PasswordInput from './../components/form/PasswordInput';
import { BaseProps, getProps, NoProps } from './../BedrockUtils';
import FormButton from './../components/form/FormButton';

interface LoginBoxProps extends BaseProps {
    /**
     * Handler fired when the login form is submitted
     */
    onSubmit?: (username: string, password: string, eventID: string) => void;
}

export default class LoginBox extends React.Component<LoginBoxProps, NoProps> {

    username: string;

    password: string;

    handleSubmitClick = (e) => {
        if (this.props.onSubmit) {
            this.props.onSubmit(this.username, this.password, this.props.eventID);
        }
    }

    handleUserChange = (v: string) => {
        this.username = v;
    }

    handlePasswordChange = (v: string) => {
        this.password = v;
    }

    render() {
        const extra: any = getProps(this.props);

        return <Form {...extra} className={this.props.className}>
            <FormField label="Username">
                <TextInput type='email' placeholder='Email address' onChange={this.handleUserChange} />
            </FormField>
            <FormField label="Password">
                <PasswordInput onChange={this.handlePasswordChange} />
            </FormField>
            <FormButton type="submit" onClick={this.handleSubmitClick}>Submit</FormButton>
        </Form>;
    }

}
