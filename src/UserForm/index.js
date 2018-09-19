import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { onUserSave } from '../actions/user';
import { toast } from 'react-toastify';
import './UserForm.css';
import UserFormUI from './UserFormUI';
class UserForm extends React.Component {
    static propTypes = {
        onUserSave: PropTypes.func.isRequired,
        isLoading: PropTypes.bool.isRequired,
        hasErrored: PropTypes.bool.isRequired,
        user: PropTypes.object
    };
    static defaultProps = {
        user: null
    };

    constructor(props) {
        super(props);
        this.state = {
            formInfo: {
                id: '',
                firstName: '',
                lastName: '',
                company: '',
                position: '',
                department: '',
                email: ''
            }
        };
    }

    componentDidMount() {
        if (this.props.user)
            this.setState({
                formInfo: this.props.user,
            });
    }

    componentWillReceiveProps(newProps) {
        if (!newProps.isLoading && this.props.isLoading && !newProps.hasErrored) {
            toast.success("User save successfully", {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 5000
            });
            this.setState({
                formInfo: newProps.user,
            });
        }
    }

    componentWillUnmount() {
    }


    handleUserFormInputs(event) {
        this.setState({
            formInfo: {
                ...this.state.formInfo, ...{
                    [event.target.name]: event.target.value
                }
            }
        })
    }

    onUserSave() {
        this.props.onUserSave(this.state.formInfo);
    }

    render() {
        const props = {
            onUserSave: this.onUserSave.bind(this),
            formInfo: this.state.formInfo,
            handleUserFormInputs: this.handleUserFormInputs.bind(this)
        }
        return (<UserFormUI {...props} />)
    }
}



export const mapStateToProps = state => ({
    user: state && state.user && state.user.currentUser ? state.user.currentUser : null,
    hasErrored: state && state.user && state.user.hasErrored ? state.user.hasErrored : false,
    isLoading: state && state.user && state.user.isLoading ? state.user.isLoading : false
});
export const mapDispatchToProps = (dispatch) => ({
    onUserSave: (userInfo) => dispatch(onUserSave(userInfo))
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserForm);
