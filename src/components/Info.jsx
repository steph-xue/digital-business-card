function Info() {
    return (
        <div className="info">
            <img className="profilepic" src="/images/profile-steph.jpg" alt="profile-steph" />
            <p className="name">Stephanie Xue</p>
            <p className="role">Software Developer | PharmD </p>
            <p className="website">www.github.com/steph-xue</p>
            <div className="buttons">
                <a role="button" className="btn btn-light" href="mailto:stephaniexue3@gmail.com">
                    <img className="email-logo" src="/images/email.png" alt="email-logo" />
                    Email
                </a>
                <a role="button" className="btn btn-linkedin" href="https://www.linkedin.com/in/stephxue/">
                    <img className="linkedin-logo" src="/images/linkedin.png" alt="linkedin-logo" />
                    LinkedIn
                </a>
            </div>
        </div>
    );
}

export default Info;