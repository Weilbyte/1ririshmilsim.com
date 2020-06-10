import React, { Component } from 'react';

import * as moment from 'moment-timezone';
import Reaptcha from 'reaptcha';
import { Button, Form, FormGroup, FormLabel, FormControl, FormText, FormCheck, Alert } from 'react-bootstrap';

interface enlistFormState {
    discordHandle: string,
    characterName: string,
    timezone: string,
    hasMic: boolean,
    isOfAge: boolean,
    experiencedA3ACE: boolean,
    preferredPath: string,
    alertVariant: string | undefined,
    alertText: string,
    buttonLoading: boolean,
    captchaRef: React.RefObject<Reaptcha>
}

export class EnlistForm extends Component<{}, enlistFormState> {
    constructor(props : any) {
        super(props)

        this.state = {
            discordHandle: '',
            characterName: '',
            timezone: 'Europe/London',
            hasMic: false,
            isOfAge: false,
            experiencedA3ACE: false,
            preferredPath: 'Infantry',
            alertVariant: undefined,
            alertText: '',
            buttonLoading: false,
            captchaRef: React.createRef()
        };

        this.inputChange = this.inputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showAlert = this.showAlert.bind(this);
        this.submit = this.submit.bind(this);
    };

    toTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    async submit() {
        this.toTop();

        try {
            let res = await fetch('/api/v1/enlist', {
                method: 'POST',
                headers: {
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({
                    'captcha' : await this.state.captchaRef.current?.getResponse(),
                    'form-data' : {
                        'discordHandle' : this.state.discordHandle,
                        'characterName' : this.state.characterName,
                        'timezone' : this.state.timezone,
                        'hasMic' : this.state.hasMic,
                        'isOfAge' : this.state.isOfAge,
                        'experiencedA3ACE' : this.state.experiencedA3ACE,
                        'preferredPath' : this.state.preferredPath,
                    }
                })
            });
            const body = await res.json();
            if (JSON.parse(body)['success'] == false) {
                this.setState({
                    alertVariant: 'danger',
                    alertText: 'ReCAPTCHA failed, please refresh the page and try again.',
                    buttonLoading: false
                });
                return;
            }
        } catch (e) {
            this.setState({
                alertVariant: 'danger',
                alertText: 'An unexpected internal error has occured!',
                buttonLoading: false
            });
            return;
        }

        this.setState({
            alertVariant: 'success',
            alertText: 'Successfully submitted. Thank you for your interest in our unit!',
            buttonLoading: false
        });
    };

    handleSubmit(e : any) {
        e?.preventDefault();
        this.setState({
            alertVariant: undefined,
            alertText: '',
            buttonLoading: true
        });

        if (!(/^((.+?)#\d{4})/.test(this.state.discordHandle))) {
            this.toTop();
            this.setState({
                alertVariant: 'danger',
                alertText: 'Discord handle is invalid/missing discriminator.',
                buttonLoading: false
            });
            return;
        } 

        if (!this.state.characterName.includes(',')) {
            this.toTop();
            this.setState({
                alertVariant: 'danger',
                alertText: 'Character name is missing comma.',
                buttonLoading: false
            });
            return;
        }

        this.state.captchaRef.current?.execute();
    };

    showAlert() {
        //@ts-ignore
        if (this.state.alertVariant !== undefined) return <Alert variant={this.state.alertVariant}>{this.state.alertText}</Alert>;
        return null;
    }

    inputChange(e : any) {
        var value = e.target.value
        //@ts-ignore
        if (value == 'on') value = !this.state[e.target.id];

        //@ts-ignore
        this.setState({
            [e.target.id] : value
        });
    }

    render() {
        const tzOptions = moment.tz.names().map(tz => {
            //@ts-ignore
            const tzName = String(tz)
            if (tzName.includes('/') && !tzName.includes('Etc/')) {
                return <option>{tz}</option>
            }
        });

        return (
            <div id='enlist-form'>
                <this.showAlert />
                <Form id='form' onSubmit={this.handleSubmit}>
                    <h4>Enlistment Form</h4>
                    <br/>
                    <FormGroup>
                        <FormLabel>Discord Handle</FormLabel>
                        <FormControl 
                            id='discordHandle'
                            required
                            placeholder='jane#0001'
                            value={this.state.discordHandle}
                            onChange={this.inputChange}
                        />
                        <FormControl.Feedback type='invalid'>
                            Please provide a valid handle. 
                        </FormControl.Feedback>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Time zone</FormLabel>
                        <FormControl 
                            id='timezone'
                            as='select'
                            defaultValue={'Europe/London'}
                            onChange={this.inputChange}
                        >
                            {tzOptions}
                        </FormControl>
                    </FormGroup>
                    <br/>
                    <FormGroup>
                        <FormLabel>Do you have a working microphone?</FormLabel>
                        <FormCheck 
                            id='hasMic'
                            onChange={this.inputChange}
                            label='Yes, I do.'
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Are you at least 13 years of age?</FormLabel>
                        <FormCheck 
                            id='isOfAge'
                            onChange={this.inputChange}
                            label='Yes, I am.'
                        />
                        <FormText className='lighter'>Exceptions can be made.</FormText>
                    </FormGroup>
                    <br/>
                    <FormGroup>
                      <FormLabel>Character Name</FormLabel>
                      <FormControl 
                        required 
                        id='characterName'
                        value={this.state.characterName}
                        onChange={this.inputChange}
                        placeholder='Jane, Doe' 
                      ></FormControl>
                      <FormText className='lighter'>Your roleplay name. Format as "<b>FORENAME</b>, <b>SURNAME</b>".</FormText>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Preferred Path</FormLabel>
                        <FormControl 
                            id='preferredPath'
                            as='select'
                            defaultValue={'Infantry'}
                            onChange={this.inputChange}
                        >
                            <option>Infantry</option>
                            <option>Air Force</option>
                        </FormControl>
                        <FormText className='lighter'>This is for reference only.</FormText>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Are you experienced with Arma 3 and ACE3?</FormLabel>
                        <FormCheck 
                            id='experiencedA3ACE'
                            onChange={this.inputChange}
                            label='Yes, I am.'
                        />
                    </FormGroup>
                    <br/>
                    <Button 
                        variant="dark" 
                        disabled={this.state.buttonLoading}
                        type="submit"
                    >
                        {this.state.buttonLoading ? 'Submitting..' : 'Submit'}
                    </Button>
                    <Reaptcha
                        ref={this.state.captchaRef}
                        size='invisible'
                        onVerify={this.submit}
                        //@ts-ignore
                        sitekey={process.env.REACT_APP_SITEKEY}
                    />
                    <p id='fine' className='lighter'>* By submitting the form, you agree to follow our guidelines and acknolwedge that this is a serious unit</p>
                  </Form>
            </div>
        )
    }
  }