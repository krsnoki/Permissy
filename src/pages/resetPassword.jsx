import '../styles/resetPassword.css';
function ResetPassword() {
    return (
        <div className="resetPassword">
            <h1>Reset Password</h1>
            <label>New Password: </label>
            <input type='password' name='newPass'></input>

            <label>Confirm Password: </label>
            <input type='password' name='cnfrmPassword'></input>
        </div>
    )
}

export default ResetPassword
